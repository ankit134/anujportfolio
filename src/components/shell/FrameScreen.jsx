import { CornerMarker } from '../ui/CornerMarkers'
import FrameHeader from './FrameHeader'
import FrameFooter from './FrameFooter'
import ScrollProgressRail from './ScrollProgressRail'

export default function FrameScreen() {
  return (
    <div className="frameScreen">
      <ScrollProgressRail />
      <CornerMarker className="topleft" />
      <CornerMarker className="topright" />
      <CornerMarker className="bottomleft" />
      <CornerMarker className="bottomright" />
      <FrameHeader />
      <FrameFooter />
    </div>
  )
}
