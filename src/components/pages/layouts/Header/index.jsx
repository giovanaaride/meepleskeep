import Logo from '../../../../assets/Logo.jsx'
import { brand } from '../../../../links.js'

// Ornamento decorativo topo
function TopOrnament() {
  return (
    <div
      className="rise flex items-center gap-3"
      style={{ '--i': 0 }}
      aria-hidden="true"
    >
      <span
        className="block h-px w-10"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,107,.4))' }}
      />
      <svg viewBox="0 0 16 16" width="14" height="14" fill="#C9A96B" style={{ opacity: .65 }}>
        <path d="M8 0 L9.8 6.2 L16 8 L9.8 9.8 L8 16 L6.2 9.8 L0 8 L6.2 6.2 Z" />
      </svg>
      <span
        className="block h-px w-10"
        style={{ background: 'linear-gradient(to left, transparent, rgba(201,169,107,.4))' }}
      />
    </div>
  )
}

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center gap-0">
      {/* Ornamento */}
      <TopOrnament />

      {/* Logo oficial */}
      <div
        className="rise mt-4"
        style={{ '--i': 1 }}
      >
        <Logo
          className="w-full mx-auto"
          style={{ maxWidth: 'clamp(220px, 70vw, 320px)', filter: 'drop-shadow(0 4px 12px rgba(27, 46, 59, 0.15))' }}
        />
      </div>

      {/* Tagline */}
      <p
        className="rise mt-4 font-serif italic"
        style={{
          '--i': 2,
          fontSize: 'clamp(.9rem, 3.8vw, 1.05rem)',
          color: 'rgba(27, 46, 59, 0.7)', // Navy muted
        }}
      >
        {brand.tagline}
      </p>
    </header>
  )
}
