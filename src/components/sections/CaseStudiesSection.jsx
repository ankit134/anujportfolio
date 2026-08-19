import { projects } from '../../data/content'
import { CornerButton } from '../ui/CornerButton'
import { ImageMask } from '../ui/ImageMask'
import { MotionText } from '../ui/MotionText'
import { TagList } from '../ui/TagList'

export default function CaseStudiesSection() {
  return (
    <>
      <div className="caseheader" id="work">
        <MotionText as="h2">
          <b>Selected UX/UI cases</b>
          <br />I craft interfaces for web and mobile products
        </MotionText>
      </div>
      <div className="casecontainer">
        <div className="caseList">
          {projects.map((project, index) => (
            <article
              className="case"
              key={project.id}
              id={`project-${index}`}
              aria-labelledby={`case-${project.id}`}
            >
              <ImageMask src={project.image} alt={project.imageAlt} />
              <div className="caseInfo">
                <TagList tags={project.tags} />
                <h3 id={`case-${project.id}`}>{project.title}</h3>
                <p>{project.description}</p>
                <CornerButton href={project.href}>View case</CornerButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
