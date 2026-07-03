import './SocialIcons.css'

function SocialIcons({ className = '' }) {
  return (
    <ul className={`social-icons ${className}`}>
      <li>
        <a
          href="https://www.linkedin.com/in/bapa-rao-pendyala/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3ZM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.45 2.25 4.45 5.18V20Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/baparao15"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://leetcode.com/u/baparao15/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons
