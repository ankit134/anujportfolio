import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function MotionText({ as: Tag = 'h2', children, className = '', id }) {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion || typeof children !== 'string') {
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    )
  }

  const parts = String(children).split(/(\s+)/)

  return (
    <Tag className={className} id={id}>
      {parts.map((part, index) =>
        part.trim() === '' ? (
          part
        ) : (
          <span
            key={`${part}-${index}`}
            className="text-reveal-part"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            {part}
          </span>
        ),
      )}
    </Tag>
  )
}
