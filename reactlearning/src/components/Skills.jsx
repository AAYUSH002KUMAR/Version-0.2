function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "MySQL",
    "PHP",
    "REST APIs",
    "Bootstrap",
    "Git",
    "GitHub",
    "Postman",
    "React",
    "Tailwind CSS",
  ];

  return (
    <section
      id="skills"
      className="bg-stone-50 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-10 text-3xl font-bold text-stone-800">
          My Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-md border border-stone-300 bg-white px-5 py-3 text-stone-700"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;