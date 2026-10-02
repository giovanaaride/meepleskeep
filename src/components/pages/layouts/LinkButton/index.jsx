
import {
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  ShoppingBag,
  ShoppingCart,
  Store
} from 'lucide-react'

const ICONS = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  bag: ShoppingBag,
  cart: ShoppingCart,
  store: Store,
}

export default function LinkButton({ link, index }) {
  const Icon = ICONS[link.icon] || ShoppingBag

  return (
    <a
      id={`link-${link.id}`}
      className={`link-btn rise${link.featured ? ' featured' : ''}`}
      style={{ '--i': index }}
      href={
        link.id === 'loja'
          ? 'https://meeples-keep.lojaintegrada.com.br/'
          : link.url
      }
    >
      <Icon
        className="btn-icon"
        aria-hidden="true"
        strokeWidth={1.75}
      />
      <span>{link.id === 'loja' ? 'Loja' : link.title}</span>
    </a>
  )
}