export function TagList({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}
