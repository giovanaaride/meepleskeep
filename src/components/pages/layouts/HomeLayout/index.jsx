
import { links } from '../../../../links.js'
import Header from '../Header/index.jsx'
import LinkButton from '../LinkButton/index.jsx'
import Footer from '../Footer/index.jsx'

export default function HomeLayout() {
  const active = links.filter((link) => link.active)

  // Identifica o botão Fale conosco
  const isContact = (link) => {
    const id = link.id?.toLowerCase()
    const title = link.title?.trim().toLowerCase()

    return (
      ['contato', 'fale-conosco', 'fale_conosco'].includes(id) ||
      title === 'fale conosco'
    )
  }

  // Organiza: Loja primeiro, Fale conosco por último
  const orderedLinks = [
    ...active.filter((link) => link.id === 'loja'),
    ...active.filter(
      (link) => link.id !== 'loja' && !isContact(link)
    ),
    ...active.filter(isContact),
  ]

  return (
    <main className="bg-stage min-h-screen w-full flex flex-col items-center px-4 py-12 relative z-0">
      {/* Halo de luz central */}
      <div className="bg-glow" aria-hidden="true" />

      {/* Coluna central */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">

        {/* Cabeçalho */}
        <Header />

        {/* Lista de links */}
        <nav
          className="w-full mt-8 flex flex-col gap-4"
          aria-label="Links da Meeples Keep"
        >
          {orderedLinks.map((link, index) => (
            <LinkButton
              key={link.id}
              link={link}
              index={index + 3}
            />
          ))}
        </nav>

        {/* Rodapé */}
        <Footer linkCount={orderedLinks.length} />

      </div>
    </main>
  )
}