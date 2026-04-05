export default function Logo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle background */}
      <circle cx="24" cy="24" r="24" fill="url(#logoGrad)" />

      {/* Water drop shape */}
      <path
        d="M24 8C24 8 14 19 14 26a10 10 0 0020 0C34 19 24 8 24 8Z"
        fill="white"
        fillOpacity="0.15"
        stroke="white"
        strokeWidth="1.5"
      />

      {/* Horizontal pipe left */}
      <rect x="6" y="22" width="10" height="4" rx="2" fill="white" />

      {/* Horizontal pipe right */}
      <rect x="32" y="22" width="10" height="4" rx="2" fill="white" />

      {/* Vertical pipe top */}
      <rect x="22" y="6" width="4" height="10" rx="2" fill="white" />

      {/* Center connector circle */}
      <circle cx="24" cy="24" r="5" fill="white" />
      <circle cx="24" cy="24" r="2.5" fill="url(#logoGrad)" />

      {/* Water drop inside */}
      <path
        d="M24 19c0 0-3 4-3 6a3 3 0 006 0C27 23 24 19 24 19Z"
        fill="white"
        fillOpacity="0.9"
      />

      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
