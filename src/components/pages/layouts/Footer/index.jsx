import { brand } from '../../../../links.js'

export default function Footer({ linkCount = 6 }) {
  return (
    <footer
      className="rise mt-10 flex flex-col items-center gap-2"
      style={{ '--i': linkCount + 3 }}
    >
      {/* Frase da marca */}
      <p
        className="font-serif italic uppercase"
        style={{
          fontSize: '.7rem',
          color: 'rgba(27, 46, 59, 0.55)',
          letterSpacing: '.18em',
        }}
      >
        Jogos. Pessoas. Histórias.
      </p>

      {/* Copyright com ornamentos */}
      <div
        className="flex items-center gap-2 font-sans font-medium"
        style={{ color: 'rgba(27, 46, 59, 0.55)', fontSize: '.78rem' }}
      >
        <span
          className="inline-block w-[7px] h-[7px] rounded-[2px] rotate-45"
          style={{ background: '#C9A96B', opacity: .8 }}
          aria-hidden="true"
        />
        Meeples Keep © {brand.year}
        <span
          className="inline-block w-[7px] h-[7px] rounded-[2px] rotate-45"
          style={{ background: '#C9A96B', opacity: .8 }}
          aria-hidden="true"
        />
      </div>
    </footer>
  )
}
