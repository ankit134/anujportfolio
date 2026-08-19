import { profile } from '../../data/content'
import { CornerButton } from '../ui/CornerButton'
import { MotionText } from '../ui/MotionText'

export default function SpecialtySection() {
  return (
    <section className="section" id="specialty" aria-labelledby="specialty-heading">
      <div className="container">
        <div className="titleGroup">
          <MotionText as="h2" id="specialty-heading">
            <b>I specialize in</b> mobile app design, prototyping, and complex web interfaces for digital products
          </MotionText>
        </div>
        <p className="bio">{profile.availability}</p>
        <ul className="btnGroup">
          <li>
            <CornerButton href={`mailto:${profile.email}`}>Email me</CornerButton>
          </li>
          <li>
            <CornerButton href={profile.cvUrl} target="_blank" rel="noopener noreferrer">
              Download cv
            </CornerButton>
          </li>
        </ul>
      </div>
    </section>
  )
}
