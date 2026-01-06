type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      className={
        className ??
        'inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white'
      }
      aria-label="Super Legit Bank logo mark"
      title="Super Legit Bank"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10l9-6 9 6" />
        <path d="M4 10h16" />
        <path d="M6 10v9" />
        <path d="M10 10v9" />
        <path d="M14 10v9" />
        <path d="M18 10v9" />
        <path d="M5 19h14" />
      </svg>
    </span>
  );
}
