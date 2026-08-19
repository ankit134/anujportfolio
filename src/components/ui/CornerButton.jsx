import { CornerMarkers } from './CornerMarkers'

export function CornerButton({ href, children, className = '', ...props }) {
  const Tag = href ? 'a' : 'button'

  return (
    <Tag href={href} className={`btn ${className}`.trim()} {...props}>
      {children}
      <CornerMarkers />
    </Tag>
  )
}
