export default function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1 bg-blue-200 dark:bg-blue-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
