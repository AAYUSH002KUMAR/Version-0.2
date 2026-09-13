
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <h1 className="text-3xl font-bold text-[#83B735]">
            acer
          </h1>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="hover:text-[#83B735]">
              Home
            </a>

            <a href="#products" className="hover:text-[#83B735]">
              Products
            </a>

            <a href="#about" className="hover:text-[#83B735]">
              About
            </a>

            <a href="#contact" className="hover:text-[#83B735]">
              Contact
            </a>

            <button className="rounded-md bg-[#83B735] px-5 py-2 text-white hover:bg-[#6f9d2d]">
              Shop Now
            </button>
          </div>

          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t px-6 py-4 md:hidden">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gray-100">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">

          <div>
            <p className="mb-4 font-semibold text-[#83B735]">
              INNOVATION MEETS PERFORMANCE
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Power your
              <br />
              next adventure.
            </h2>

            <p className="mt-6 max-w-lg text-lg text-gray-600">
              Discover powerful laptops designed for work,
              creativity, and gaming.
            </p>

            <button className="mt-8 rounded-md bg-[#83B735] px-6 py-3 font-semibold text-white hover:bg-[#6f9d2d]">
              Explore Laptops →
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-5 text-center text-sm text-gray-500">
                ACER LAPTOP
              </div>

              <div className="mx-auto h-32 w-full max-w-sm rounded-lg border-8 border-gray-700 bg-gradient-to-br from-gray-700 to-gray-950 shadow-xl">
                <div className="flex h-full items-center justify-center text-4xl font-bold text-white">
                  acer
                </div>
              </div>

              <div className="mx-auto mt-2 h-3 w-64 rounded-b-lg bg-gray-400"></div>

              <p className="mt-6 text-center font-semibold">
                Built for what’s next.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Featured Products
          </h2>

          <p className="mt-3 text-gray-600">
            Find the perfect laptop for your needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Product 1 */}
          <div className="rounded-xl border border-gray-200 p-6 transition hover:shadow-lg">

            <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100">
              <div className="h-20 w-32 rounded-md bg-gray-800 shadow-lg">
                <div className="flex h-full items-center justify-center text-sm font-bold text-white">
                  acer
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Acer Aspire
            </h3>

            <p className="mt-2 text-gray-600">
              Reliable performance for everyday work and study.
            </p>

            <button className="mt-5 rounded-md border border-[#83B735] px-4 py-2 text-[#6f9d2d] hover:bg-[#83B735] hover:text-white">
              Learn More
            </button>

          </div>

          {/* Product 2 */}
          <div className="rounded-xl border border-gray-200 p-6 transition hover:shadow-lg">

            <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100">
              <div className="h-20 w-32 rounded-md bg-gray-900 shadow-lg">
                <div className="flex h-full items-center justify-center text-sm font-bold text-red-500">
                  NITRO
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Acer Nitro
            </h3>

            <p className="mt-2 text-gray-600">
              Powerful gaming performance for your next challenge.
            </p>

            <button className="mt-5 rounded-md border border-[#83B735] px-4 py-2 text-[#6f9d2d] hover:bg-[#83B735] hover:text-white">
              Learn More
            </button>

          </div>

          {/* Product 3 */}
          <div className="rounded-xl border border-gray-200 p-6 transition hover:shadow-lg">

            <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100">
              <div className="h-20 w-32 rounded-md bg-gray-600 shadow-lg">
                <div className="flex h-full items-center justify-center text-sm font-bold text-white">
                  SWIFT
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Acer Swift
            </h3>

            <p className="mt-2 text-gray-600">
              Lightweight design with performance on the go.
            </p>

            <button className="mt-5 rounded-md border border-[#83B735] px-4 py-2 text-[#6f9d2d] hover:bg-[#83B735] hover:text-white">
              Learn More
            </button>

          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold">
            Technology for Everyone
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            From everyday laptops to powerful gaming machines,
            Acer brings technology closer to your everyday life.
          </p>

          <button className="mt-8 rounded-md bg-[#83B735] px-6 py-3 text-white hover:bg-[#6f9d2d]">
            Discover More
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 px-6 py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">

          <div>
            <h2 className="text-2xl font-bold text-[#83B735]">
              acer
            </h2>

            <p className="mt-2 text-gray-400">
              Technology that inspires.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <a href="#home" className="hover:text-white">
              Home
            </a>

            <a href="#products" className="hover:text-white">
              Products
            </a>

            <a href="#about" className="hover:text-white">
              About
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-gray-700 pt-6 text-sm text-gray-400">
          © 2026 Acer-inspired landing page. Student project.
        </div>

      </footer>

    </div>
  );
}

export default App;