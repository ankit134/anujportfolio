import { useDebugHud } from '../../hooks/useDebugHud'

export default function CustomCursor() {
  const { cursor } = useDebugHud()

  return (
    <div
      className="coursor is-visible"
      style={{ transform: `translate3d(${cursor.x + 12}px, ${cursor.y + 12}px, 0)` }}
      aria-hidden="true"
    />
  )
}
