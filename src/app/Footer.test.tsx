import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer element', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('renders the name GIRIDHAR REDDY', () => {
    render(<Footer />);
    expect(screen.getByText('GIRIDHAR REDDY')).toBeInTheDocument();
  });

  it('renders the copyright text', () => {
    render(<Footer />);
    expect(screen.getByText('© 2026. OPTIMIZED FOR EXECUTION.')).toBeInTheDocument();
  });

  it('renders the GitHub link correctly', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com');
  });

  it('renders the LinkedIn link correctly', () => {
    render(<Footer />);
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/giridhar-reddy-s/');
  });

  it('renders the Email link correctly', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: /Email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:giridhar123reddy@gmail.com');
  });
});
