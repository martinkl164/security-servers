import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import AppShell from '../components/AppShell';
import AppRoutes from '../AppRoutes';

describe('Login page', () => {
  it('renders the login content when navigating to /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
    expect(screen.getByRole('form', { name: /login form/i })).toBeInTheDocument();
  });

  it('presents a username/email input and a password input', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </MemoryRouter>,
    );

    expect(screen.getByLabelText(/username or email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
  });

  it('shows a mock success state and redirects to / shortly after submit', async () => {
    vi.useFakeTimers();

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText(/username or email/i), {
      target: { value: 'demo@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    expect(
      screen.getByText(/mock login successful\. redirecting/i),
    ).toBeInTheDocument();

    await act(async () => {
      vi.advanceTimersByTime(800);
    });

    expect(
      screen.getByRole('heading', { name: 'Simple banking for modern life.' }),
    ).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('allows navigation between Home and Login using primary navigation', () => {
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

    fireEvent.click(screen.getByRole('link', { name: 'Login' }));
    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('link', { name: 'Home' }));
    expect(
      screen.getByRole('heading', { name: 'Simple banking for modern life.' }),
    ).toBeInTheDocument();
  });
});
