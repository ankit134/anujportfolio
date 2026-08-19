export function ExternalIcon() {
  return (
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="external"
      aria-hidden="true"
    >
      <path d="M4 0H0L4 4V0Z" fill="white" />
    </svg>
  )
}

export function FrameLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      className="link"
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
      {external ? <ExternalIcon /> : null}
    </a>
  )
}
