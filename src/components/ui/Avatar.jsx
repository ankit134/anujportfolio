import { useState } from 'react'

export function Portrait({ src, alt, initials, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`avatar-placeholder ${className}`} aria-hidden="true">
        {initials}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
