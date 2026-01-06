import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import AppShell from '../components/AppShell';
import AppRoutes from '../AppRoutes';
import Home from './Home';

describe('Home page', () => {
  it('shows the required marketing headline and supporting copy', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: 'Simple banking for modern life.' }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Super Legit Bank provides straightforward accounts and reliable everyday tools designed for clarity and control.',
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Trusted by 1,200,000+ clients worldwide (mock).'),
    ).toBeInTheDocument();
  });

  it('shows a Features section and each feature has an icon, title, and text', () => {
    render(<Home />);

    const featuresHeading = screen.getByRole('heading', { name: 'Features' });
    expect(featuresHeading).toBeInTheDocument();

    const featureCards = screen.getAllByTestId('feature');
    expect(featureCards.length).toBeGreaterThan(0);

    expect(screen.getByRole('heading', { name: /everyday checking & savings/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /fast transfers/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /mobile app access/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^security$/i })).toBeInTheDocument();

    for (const card of featureCards) {
      expect(within(card).getByRole('heading', { level: 3 })).toBeInTheDocument();
      expect(within(card).getByText(/.+/i, { selector: 'p' })).toBeInTheDocument();
      expect(card.querySelector('svg')).not.toBeNull();
    }
  });

  it('does not present account-specific widgets', () => {
    render(<Home />);

    expect(screen.queryByText(/account summary/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/recent activity/i)).not.toBeInTheDocument();
  });

  it('renders the home content when navigating to /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Simple banking for modern life.' }),
    ).toBeInTheDocument();
  });
});
