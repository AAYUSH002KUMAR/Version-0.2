function Hero() {
  return (
    <section
      id="home"
      className="bg-stone-50 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        
        <p className="mb-4 text-lg font-medium text-orange-700">
          Hello, I'm Aayush Kumar
        </p>

        <h1 className="text-4xl font-bold text-stone-800 sm:text-5xl">
          Full-Stack Developer
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          I'm a B.Tech Information Technology student at Maharaja
          Surajmal Institute of Technology. I enjoy building practical
          web applications and learning new technologies.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <a
            href="#projects"
            className="rounded-md bg-orange-700 px-6 py-3 text-center font-medium text-white hover:bg-orange-800"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-md border border-stone-400 px-6 py-3 text-center font-medium text-stone-700 hover:border-orange-700 hover:text-orange-700"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;