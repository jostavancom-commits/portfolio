const projects = [
  { id: 1, title: 'Project 1', description: 'Amazing project description' },
  { id: 2, title: 'Project 2', description: 'Another great project' },
  { id: 3, title: 'Project 3', description: 'Incredible project' }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}