import { useBootLoader } from '../../hooks/useBootLoader'

function LoaderLogo() {
  return (
    <svg
      width="49"
      height="35"
      viewBox="0 0 49 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 7V35L0 28V0L14 7ZM31.5 7V35L17.5 28V0L31.5 7ZM49 7V35L35 28V0L49 7Z"
        fill="white"
      />
    </svg>
  )
}

export default function BootLoader() {
  const { progress, hidden, contentHidden } = useBootLoader()

  return (
    <div className={`loader${hidden ? ' is-hidden' : ''}`} aria-hidden="true">
      <div className={`loaderContent${contentHidden ? ' hide' : ''}`}>
        <LoaderLogo />
        <div className="loadline">
          <div className="loading-bar" style={{ width: `${progress}%` }} />
        </div>
        <span className="loadpercent">{progress}%</span>
      </div>
    </div>
  )
}
