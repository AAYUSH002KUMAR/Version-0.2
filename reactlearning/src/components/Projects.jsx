function Projects() {
  const projects = [
    {
      title: "Subscription Analytics Dashboard",
      description:
        "A web-based dashboard for displaying business metrics and subscription reporting using interactive charts and filters.",
      technologies:
        "PHP, MySQL, HTML, CSS, JavaScript, Chart.js",
    },
    {
      title: "Library Management System",
      description:
        "An academic project for managing books and student members, with search functionality and basic CRUD operations.",
      technologies:
        "HTML, CSS, JavaScript, PHP, MySQL",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-10 text-3xl font-bold text-stone-800">
          My Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-md border border-stone-200 p-6"
            >

              <h3 className="text-2xl font-semibold text-stone-800">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                {project.description}
              </p>

              <p className="mt-5 text-sm font-medium text-orange-700">
                Technologies
              </p>

              <p className="mt-2 text-sm text-stone-600">
                {project.technologies}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;