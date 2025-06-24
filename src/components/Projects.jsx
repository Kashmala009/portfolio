const projects = [
  {
    title: 'Awesome Project',
    description: 'A brief description of the project.',
    link: 'https://github.com/yourusername/awesome-project',
  },
  // add more projects here
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{p.description}</p>
            <a href={p.link} className="text-blue-600 hover:underline" target="_blank">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
