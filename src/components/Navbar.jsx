export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}