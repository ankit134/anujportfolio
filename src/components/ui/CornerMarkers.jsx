export function CornerMarker({ className = '' }) {
  return (
    <svg
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`corner ${className}`}
      aria-hidden="true"
    >
      <path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="#D9D9D9" />
    </svg>
  )
}

export function CornerMarkers() {
  return (
    <>
      <CornerMarker className="topleft" />
      <CornerMarker className="topright" />
      <CornerMarker className="bottomleft" />
      <CornerMarker className="bottomright" />
    </>
  )
}
