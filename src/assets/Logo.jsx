/**
 * Logo oficial da Meeples Keep.
 *
 * ► Como usar:
 *   Coloque o arquivo da logo em:  public/logo.png  (ou .svg)
 *   Ela será carregada automaticamente em produção.
 *
 * ► Se preferir SVG, troque o src abaixo por "/logo.svg"
 */
export default function Logo({ className = '' }) {
  return (
    <img
      src="/images/MeeplesKeepLogoTransparentePNG.png"
      alt="Meeples Keep"
      className={className}
      draggable={false}
    />
  )
}
