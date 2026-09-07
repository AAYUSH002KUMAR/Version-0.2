function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-10 text-3xl font-bold text-stone-800">
          About Me
        </h2>

        <div className="grid gap-10 md:grid-cols-2">

          {/* About */}
          <div>
            <p className="leading-7 text-stone-600">
              I am a B.Tech Information Technology student at Maharaja
              Surajmal Institute of Technology with an interest in
              full-stack web development and software development.
            </p>

            <p className="mt-5 leading-7 text-stone-600">
              I have gained practical development experience through
              internships where I worked on dashboards, web pages,
              APIs, databases and version control.
            </p>

            <div className="mt-6 border-l-4 border-orange-700 pl-4">
              <p className="font-semibold text-stone-800">
                Best Paper Award
              </p>

              <p className="mt-1 text-sm leading-6 text-stone-600">
                Received for the research paper "Survey on Green Data
                Centres" at the National Conference on Recent Trends
                in Climate Change, Energy and Sustainability.
              </p>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-6">

            <div className="rounded-md border border-stone-200 p-5">
              <h3 className="text-xl font-semibold text-stone-800">
                Education
              </h3>

              <p className="mt-3 font-medium text-orange-700">
                Maharaja Surajmal Institute of Technology
              </p>

              <p className="mt-1 text-stone-600">
                B.Tech in Information Technology · 2023–2027
              </p>

              <p className="mt-1 text-stone-600">
                CGPA: 9.125 till 6th Semester
              </p>

              <p className="mt-4 font-medium text-orange-700">
                Ambedkar Institute of Technology
              </p>

              <p className="mt-1 text-stone-600">
                Diploma in Computer Engineering · 2020–2023
              </p>

              <p className="mt-1 text-stone-600">
                84.02% · First Division with Distinction
              </p>
            </div>

            <div className="rounded-md border border-stone-200 p-5">
              <h3 className="text-xl font-semibold text-stone-800">
                Internship Experience
              </h3>

              <p className="mt-3 font-medium text-orange-700">
                The Indian Express
              </p>

              <p className="mt-1 text-sm text-stone-600">
                Software Development Intern · Jun 2025 – Aug 2025
              </p>

              <p className="mt-3 text-sm leading-6 text-stone-600">
                Worked on a Subscription Analytics Dashboard using
                PHP, MySQL, HTML, CSS, JavaScript and Chart.js.
              </p>

              <p className="mt-4 font-medium text-orange-700">
                YHills Edutech
              </p>

              <p className="mt-1 text-sm text-stone-600">
                Web Development Intern · Feb 2023 – Mar 2023
              </p>

              <p className="mt-3 text-sm leading-6 text-stone-600">
                Built responsive web pages using HTML, CSS, JavaScript
                and Bootstrap and worked with Git.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;