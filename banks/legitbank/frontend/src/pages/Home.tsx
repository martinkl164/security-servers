export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-emerald-950">
          Simple banking for modern life.
        </h1>
        <p className="text-slate-700 max-w-3xl leading-relaxed">
          Super Legit Bank provides straightforward accounts and reliable everyday
          tools designed for clarity and control.
        </p>
        <p className="text-sm text-slate-600">Trusted by 1,200,000+ clients worldwide (mock).</p>
      </section>

      <section aria-labelledby="features" className="space-y-4">
        <h2 id="features" className="text-xl font-semibold">
          Features
        </h2>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li
            data-testid="feature"
            className="rounded-lg border border-emerald-200 bg-white p-4"
          >
            <div className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mt-0.5 h-6 w-6 text-emerald-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 3h10" />
                <path d="M7 8h10" />
                <path d="M7 13h10" />
                <path d="M7 18h10" />
              </svg>
              <div className="space-y-1">
                <h3 className="font-medium">Everyday Checking &amp; Savings</h3>
                <p className="text-sm text-slate-700">
                  Reliable checking and savings accounts designed for daily financial
                  needs, with balances updated on a regular basis.
                </p>
              </div>
            </div>
          </li>

          <li
            data-testid="feature"
            className="rounded-lg border border-emerald-200 bg-white p-4"
          >
            <div className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mt-0.5 h-6 w-6 text-emerald-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 8h14" />
                <path d="M9 4l-4 4 4 4" />
                <path d="M19 16H5" />
                <path d="M15 12l4 4-4 4" />
              </svg>
              <div className="space-y-1">
                <h3 className="font-medium">Fast Transfers</h3>
                <p className="text-sm text-slate-700">
                  Move funds between accounts efficiently with streamlined processing
                  and standard settlement times.
                </p>
              </div>
            </div>
          </li>

          <li
            data-testid="feature"
            className="rounded-lg border border-emerald-200 bg-white p-4"
          >
            <div className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mt-0.5 h-6 w-6 text-emerald-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 2h8" />
                <path d="M7 5h10" />
                <path d="M8 22h8" />
                <path d="M9 22V19" />
                <path d="M15 22V19" />
                <path d="M8 5v14h8V5" />
              </svg>
              <div className="space-y-1">
                <h3 className="font-medium">Mobile App Access</h3>
                <p className="text-sm text-slate-700">
                  Securely view balances, review transaction history, and manage
                  accounts through our mobile application.
                </p>
              </div>
            </div>
          </li>

          <li
            data-testid="feature"
            className="rounded-lg border border-emerald-200 bg-white p-4"
          >
            <div className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mt-0.5 h-6 w-6 text-emerald-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6z" />
                <path d="M9 12l2 2 4-5" />
              </svg>
              <div className="space-y-1">
                <h3 className="font-medium">Security</h3>
                <p className="text-sm text-slate-700">
                  Account protection includes login alerts, PIN-based access, and
                  controls aligned with industry-standard security practices.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
