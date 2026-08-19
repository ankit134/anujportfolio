export default function BackgroundStage() {
  return (
    <>
      <div className="bg-stage" aria-hidden="true" />
      <div className="edge-blur" aria-hidden="true">
        <div className="edge-blur__top" />
        <div className="edge-blur__bottom" />
      </div>
    </>
  )
}
