import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
      fill="none"
    >
      <defs>
        <linearGradient id="ff" x1="16" y1="16" x2="112" y2="112">
          <stop stopColor="#FF8C00" />
          <stop offset="1" stopColor="#FF6600" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="50" stroke="url(#ff)" strokeWidth="10" />
      {/* Flame drop */}
      <path
        d="M79 85c0 10-7 18-15 18s-15-8-15-18c0-12 10-18 14-33 4 7 16 17 16 33Z"
        fill="url(#ff)"
      />
      {/* Nozzle + handle */}
      <path
        d="M88 33c6 0 10 5 10 10v9c0 4-3 7-7 7h-6l-9 14c-2 3-6 4-9 2l-11-8c-3-2-4-6-2-9l12-19c3-4 7-6 12-6h10Z"
        fill="url(#ff)"
      />
      <rect x="54" y="50" width="20" height="20" rx="6" fill="#0B0B0B" />
    </svg>
  );
}

