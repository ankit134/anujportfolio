import { profile, frameNavLinks } from '../../data/content'
import { FrameLink } from '../ui/FrameLink'
import { AudioWave } from '../ui/AudioWave'

export default function FrameHeader() {
  return (
    <div className="header">
      <div className="logoBlock">
        <span className="wordmark">{profile.wordmark}</span>
        <AudioWave />
      </div>
      <ul className="mainMenu">
        {frameNavLinks.map((link) => (
          <li key={link.label}>
            <FrameLink href={link.href} external={link.external}>
              {link.label}
            </FrameLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
