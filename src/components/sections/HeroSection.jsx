import { profile, specialtyTags } from '../../data/content'

export default function HeroSection() {
  return (
    <div id="hero-content">
      <div className="hero-inner" id="hero">
        <div className="logoTitle">
          <h1>
            <b>{profile.heroHeadline[0]}</b> <b>{profile.heroHeadline[1]}</b>{' '}
            {profile.heroHeadline[2]}
          </h1>
          <p className="bio">{profile.heroSummary}</p>
        </div>
        <ul className="logoGroup">
          {specialtyTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
