function Navbar() {
  return (
    <nav className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <h1 className="text-2xl font-bold text-stone-800">
          Aayush Kumar
        </h1>

        <div className="hidden gap-6 md:flex">
          <a href="#home" className="text-stone-600 hover:text-orange-700">
            Home
          </a>

          <a href="#about" className="text-stone-600 hover:text-orange-700">
            About
          </a>

          <a href="#skills" className="text-stone-600 hover:text-orange-700">
            Skills
          </a>

          <a href="#projects" className="text-stone-600 hover:text-orange-700">
            Projects
          </a>

          <a href="#contact" className="text-stone-600 hover:text-orange-700">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;