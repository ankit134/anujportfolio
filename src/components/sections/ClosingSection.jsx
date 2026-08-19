import { frameNavLinks, profile } from '../../data/content'
import { Portrait } from '../ui/Avatar'
import { FrameLink } from '../ui/FrameLink'

export default function ClosingSection() {
  const year = new Date().getFullYear()

  return (
    <section className="section lalalast" aria-label="Closing">
      <div className="closing-section">
        <Portrait src={profile.photo} alt={profile.name} initials={profile.initials} />
        <p className="bio">{profile.heroSummary}</p>
        <ul className="mainMenu">
          {frameNavLinks.map((link) => (
            <li key={`close-${link.label}`}>
              <FrameLink href={link.href} external={link.external}>
                {link.label}
              </FrameLink>
            </li>
          ))}
        </ul>
        <p className="small">
          © {year} {profile.name} · {profile.copyrightLocation}
        </p>
      </div>
    </section>
  )
}
