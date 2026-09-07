function Contact() {
  return (
    <section
      id="contact"
      className="bg-stone-50 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-4 text-3xl font-bold text-stone-800">
          Contact Me
        </h2>

        <p className="mb-8 max-w-xl leading-7 text-stone-600">
          Feel free to contact me if you would like to discuss
          a project, internship opportunity or collaboration.
        </p>

        <div className="space-y-4">

          <p className="text-stone-700">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:aayushkumar4917@gmail.com"
              className="text-orange-700 hover:underline"
            >
              aayushkumar4917@gmail.com
            </a>
          </p>

          <p className="text-stone-700">
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+919971124187"
              className="text-orange-700 hover:underline"
            >
              +91 9971124187
            </a>
          </p>

          <p className="text-stone-700">
            <span className="font-semibold">GitHub:</span>{" "}
            AAYUSH002KUMAR
          </p>

          <p className="text-stone-700">
            <span className="font-semibold">LinkedIn:</span>{" "}
            aayush-kumar
          </p>

          <p className="text-stone-700">
            <span className="font-semibold">LeetCode:</span>{" "}
            Aayush002Kumar
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;