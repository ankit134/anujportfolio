import { experience, personalProjects, skills } from '../../data/content'
import { CornerButton } from '../ui/CornerButton'

export default function InfoColumnsSection() {
  return (
    <section className="section" id="info" aria-label="Experience, skills, and personal projects">
      <div className="last">
        <div className="block">
          <h3 className="small">Experience</h3>
          <ul className="list">
            {experience.map((item) => (
              <li key={item.id}>
                <span className="date">
                  {item.period} · {item.company}
                </span>
                <h4>{item.role}</h4>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="block">
          <h3 className="small">Skills</h3>
          <ul className="list">
            {skills.map((skill) => (
              <li key={skill.title}>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="block">
          <h3 className="small">Personal projects</h3>
          <ul className="list">
            {personalProjects.map((project) => (
              <li key={project.id}>
                <h4>
                  {project.title}
                  {project.soon ? <em className="soon">soon</em> : null}
                </h4>
                <p>{project.description}</p>
                {!project.soon ? (
                  <CornerButton href={project.href}>View project</CornerButton>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
