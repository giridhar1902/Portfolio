import { render, screen } from '@testing-library/react';
import Archive from './page';

describe('Archive Component', () => {
  it('renders the header correctly', () => {
    render(<Archive />);
    expect(screen.getByText('Execution Archive')).toBeInTheDocument();
    expect(
      screen.getByText(
        'A chronological ledger of projects, automation experiments, and operational builds.'
      )
    ).toBeInTheDocument();
  });

  it('renders table headers on desktop', () => {
    render(<Archive />);
    // Testing library might find multiple elements with text if they are rendered multiple times,
    // but the headers are just rendered once in the header row
    expect(screen.getByText('YEAR')).toBeInTheDocument();
    expect(screen.getByText('PROJECT')).toBeInTheDocument();
    expect(screen.getByText('TYPE')).toBeInTheDocument();
    expect(screen.getByText('STATUS')).toBeInTheDocument();
  });

  it('renders all 5 ledger items', () => {
    render(<Archive />);

    // We can count items by looking for something that is repeated per item.
    // For example, checking if '2026' appears twice, '2025' twice, and '2024' once
    const year2026 = screen.getAllByText('2026');
    expect(year2026).toHaveLength(2);

    const year2025 = screen.getAllByText('2025');
    expect(year2025).toHaveLength(2);

    const year2024 = screen.getAllByText('2024');
    expect(year2024).toHaveLength(1);

    // Let's verify specific projects exist
    expect(screen.getByText('Domvio Core Loop')).toBeInTheDocument();
    expect(screen.getByText('Domvio Growth Engine')).toBeInTheDocument();
    expect(screen.getByText('AI Startup Research Pipeline')).toBeInTheDocument();
    expect(screen.getByText('Investor Due Diligence CRM')).toBeInTheDocument();
    expect(screen.getByText('Lead Generation Automations')).toBeInTheDocument();
  });

  it('renders status indicators correctly', () => {
    render(<Archive />);

    // In the actual component, "Active" and "Archived" appear twice per item
    // (once for desktop view, once for mobile view).
    // Also "• Active" and "• Archived" are rendered for mobile.

    const activeStatuses = screen.getAllByText('Active');
    // 2 active projects * 1 desktop element = 2
    expect(activeStatuses).toHaveLength(2);

    const activeMobileStatuses = screen.getAllByText('• Active');
    expect(activeMobileStatuses).toHaveLength(2);

    const archivedStatuses = screen.getAllByText('Archived');
    // 3 archived projects * 1 desktop element = 3
    expect(archivedStatuses).toHaveLength(3);

    const archivedMobileStatuses = screen.getAllByText('• Archived');
    expect(archivedMobileStatuses).toHaveLength(3);
  });
});
