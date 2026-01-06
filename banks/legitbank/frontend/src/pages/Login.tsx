import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type LoginStatus = 'idle' | 'success';

export default function Login() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<LoginStatus>('idle');
  const redirectTimerId = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (redirectTimerId.current !== null) {
        window.clearTimeout(redirectTimerId.current);
      }
    };
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const hasIdentifier = identifier.trim().length > 0;
    const hasPassword = password.trim().length > 0;
    if (!hasIdentifier || !hasPassword) {
      return;
    }

    setStatus('success');

    redirectTimerId.current = window.setTimeout(() => {
      navigate('/', { replace: true });
    }, 700);
  }

  const isSuccess = status === 'success';

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-neutral-700">
          Authentication is intentionally out of scope for this demo.
        </p>
      </header>

      <form
        className="slb-card space-y-4 max-w-md p-6"
        onSubmit={handleSubmit}
        aria-label="Login form"
      >
        <div className="space-y-2">
          <label htmlFor="login-identifier" className="text-sm font-medium text-neutral-800">
            Username or email
          </label>
          <input
            id="login-identifier"
            name="identifier"
            type="text"
            autoComplete="username"
            className="slb-input"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            disabled={isSuccess}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="login-password" className="text-sm font-medium text-neutral-800">
            Password
          </label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="slb-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={isSuccess}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="slb-button-primary"
            disabled={isSuccess}
          >
            {isSuccess ? 'Success' : 'Sign in'}
          </button>

          {isSuccess ? (
            <p role="status" className="text-sm text-primary-900">
              Mock login successful. Redirecting…
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
