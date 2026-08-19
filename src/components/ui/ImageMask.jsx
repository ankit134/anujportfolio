import { CornerMarkers } from './CornerMarkers'

export function ImageMask({ src, alt, padColor }) {
  return (
    <div className="imageMask">
      <div style={{ background: padColor || '#111', padding: '12px' }}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <CornerMarkers />
    </div>
  )
}
