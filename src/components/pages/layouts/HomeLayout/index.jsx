import { links } from '../../../../links.js'
import Header     from '../Header/index.jsx'
import LinkButton from '../LinkButton/index.jsx'
import Footer     from '../Footer/index.jsx'

export default function HomeLayout() {
  const active = links.filter((l) => l.active)

  return (
    <main className="bg-stage min-h-screen w-full flex flex-col items-center px-4 py-12 relative z-0">
      {/* Halo de luz central */}
      <div className="bg-glow" aria-hidden="true" />

      {/* Coluna central — nunca se espalha horizontalmente */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">

        {/* ── Cabeçalho: ornamento + logo + tagline ── */}
        <Header />

        {/* ── Lista de links ── */}
        <nav
          className="w-full mt-8 flex flex-col gap-4"
          aria-label="Links da Meeples Keep"
        >
          {active.map((l, i) => (
            <LinkButton key={l.id} link={l} index={i + 3} />
          ))}
        </nav>

        {/* ── Rodapé ── */}
        <Footer linkCount={active.length} />

      </div>
    </main>
  )
}
