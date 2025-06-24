import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="text-center pt-12">
      <h1 className="text-4xl font-bold mb-2">Kashmala Khan</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
        Full‑Stack Developer | React.js | Node.js
      </p>
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="https://github.com/yourusername" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
    </header>
  )
}
