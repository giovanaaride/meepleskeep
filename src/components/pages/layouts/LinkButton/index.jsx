import { MessageCircle, Instagram, Facebook, Youtube, ShoppingBag, ShoppingCart, Store } from 'lucide-react'

const ICONS = {
  whatsapp:    MessageCircle,
  instagram:   Instagram,
  facebook:    Facebook,
  youtube:     Youtube,
  bag:         ShoppingBag,
  cart:        ShoppingCart,
  store:       Store,
}

export default function LinkButton({ link, index }) {
  const Icon     = ICONS[link.icon] || ShoppingBag
  const isPlaceholder = link.url === '#'
  const external = /^https?:/.test(link.url) && !isPlaceholder

  return (
    <a
      id={`link-${link.id}`}
      className={`link-btn rise${link.featured ? ' featured' : ''}${isPlaceholder ? ' opacity-60 cursor-not-allowed' : ''}`}
      style={{ '--i': index }}
      href={link.url}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
    >
      <Icon className="btn-icon" aria-hidden="true" strokeWidth={1.75} />
      <span>{link.title}</span>
    </a>
  )
}
