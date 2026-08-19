import { profile, tickers } from '../../data/content'
import { useDebugHud } from '../../hooks/useDebugHud'
import { Portrait } from '../ui/Avatar'
import { CornerMarker } from '../ui/CornerMarkers'

function TickerArrow({ direction }) {
  if (direction === 'up') {
    return (
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
        <path d="M6 8H2L4 5.5L6 8Z" fill="#65A049" />
      </svg>
    )
  }

  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
      <path d="M6 5.5H2L4 8L6 5.5Z" fill="#A0494B" />
    </svg>
  )
}

export default function FrameFooter() {
  const { cursor, scroll, time } = useDebugHud()

  return (
    <div className="footer">
      <div className="footerLeft">
        <div className="quote">
          <Portrait
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            initials={profile.initials}
          />
          <p className="small">{profile.tagline}</p>
        </div>
        <div className="fin">
          {tickers.map((ticker, index) => (
            <span key={ticker.symbol} style={{ display: 'contents' }}>
              {index > 0 ? <span className="divider ld" /> : null}
              <div className="finCard">
                <div className="finIcon">{ticker.label.slice(0, 1)}</div>
                <div className="finText">
                  <span className="finTitle">{ticker.label}</span>
                  <span className="changePrice">
                    <span className="finPrice">{ticker.price}</span>
                    <span className={`finChange ${ticker.direction}`}>
                      <TickerArrow direction={ticker.direction} />
                      {ticker.change.toFixed(2)}%
                    </span>
                  </span>
                </div>
              </div>
            </span>
          ))}
          <CornerMarker className="topleft" />
          <CornerMarker className="topright" />
          <CornerMarker className="bottomright" />
        </div>
      </div>

      <div className="scrollDown">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="5" y="3.5" width="10" height="15" rx="3.5" stroke="white" />
          <rect x="9.5" y="6" width="1" height="4" rx="0.5" fill="white" />
        </svg>
        <span>Scroll down</span>
      </div>

      <div className="footNumbers">
        <CornerMarker className="topleft" />
        <CornerMarker className="topright" />
        <CornerMarker className="bottomleft" />
        <div className="footNumbersColumn">
          <div>
            Cursor X: <span>{cursor.x}</span>
          </div>
          <div>
            Cursor Y: <span>{cursor.y}</span>
          </div>
        </div>
        <span className="divider" />
        <div className="footNumbersColumn">
          <div>
            Scroll: <span>{scroll}</span>
          </div>
          <div>
            Time: <span>{time}s</span>
          </div>
        </div>
      </div>
    </div>
  )
}
