import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import Home from './page'

// Mock the Next.js components to keep tests simple
vi.mock('next/link', () => {
  return {
    default: ({ children, href }: { children: React.ReactNode, href: string }) => {
      return <a href={href}>{children}</a>;
    }
  };
});

vi.mock('next/image', () => {
  return {
    default: (props: any) => {
      const { unoptimized, ...rest } = props;
      // We exclude unoptimized from the DOM to avoid React warnings
      return <img {...rest} />;
    }
  };
});

describe('Home Page', () => {
  it('renders the hero section with correct text', () => {
    render(<Home />)

    // Check if the main heading exists
    expect(screen.getByText(/Product Builder/)).toBeInTheDocument()
    expect(screen.getByText(/Zero Ad Spend/)).toBeInTheDocument()

    // Check if the CTA links are present
    expect(screen.getByRole('link', { name: /See Domvio/i })).toHaveAttribute('href', '/domvio')
    expect(screen.getByRole('link', { name: /How I Work/i })).toHaveAttribute('href', '/stack')
  })

  it('renders the Domvio case study section', () => {
    render(<Home />)

    // Check for the section header
    expect(screen.getByText(/Domvio — WhatsApp-First Rent Collection/)).toBeInTheDocument()

    // Check for the wireframe image
    const image = screen.getByAltText(/Wireframe rendering of a WhatsApp chat interface/)
    expect(image).toBeInTheDocument()
  })

  it('renders the stats row', () => {
    render(<Home />)

    // Check for specific stats
    expect(screen.getByText('100+')).toBeInTheDocument()
    expect(screen.getByText(/Landlords Waitlisted/i)).toBeInTheDocument()

    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText(/Weeks Core Loop Shipped/i)).toBeInTheDocument()

    expect(screen.getByText('₹0')).toBeInTheDocument()
    expect(screen.getByText(/Paid Acquisition/i)).toBeInTheDocument()
  })

  it('renders the execution stack and output history', () => {
    render(<Home />)

    // Headers
    expect(screen.getByText('Execution Stack')).toBeInTheDocument()
    expect(screen.getByText('Output History')).toBeInTheDocument()

    // Check a couple of stack items
    expect(screen.getByText('AI Tooling')).toBeInTheDocument()
    expect(screen.getByText('Pragmatism')).toBeInTheDocument()
  })
})
