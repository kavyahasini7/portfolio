import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white ">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-700/30 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-6 backdrop-blur-md bg-black/30 border-b border-white/10">
        <h1 className="text-2xl font-bold">Kavya</h1>

        <ul className="hidden md:flex gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">

  <li>
    <a href="#home">Home</a>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#skills">Skills</a>
  </li>

  <li>
    <a href="#projects">Projects</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>

</ul>
      </nav>

      {/* Hero Section */}
      <section
  id="home"
  className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20"
>

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
            Available for Opportunities
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
  Hi, I'm <span className="text-pink-500">Kavya</span>
</h1>

          <h2 className="text-3xl mt-4 text-gray-300">
            Aspiring Software Developer & CS Student
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
          Passionate Computer Science student focused on building modern, responsive and visually engaging web applications using React, JavaScript and modern technologies. Always learning, creating and improving as a developer.
          </p>

         <div className="flex gap-4 mt-8">
         <a
  href="#projects"
  className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-red-600 hover:scale-105 transition duration-300 inline-block shadow-lg shadow-pink-600/30"
>
  View Projects
</a>

            <a
  href="/resumekh.pdf"
  download
  className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 hover:scale-105 transition duration-300 inline-block"
>
  Download Resume
</a>
          </div>

          <div className="flex gap-5 mt-8">
            <a
    href="https://github.com/kavyahasini7"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-400 transition"
  >
    GitHub
  </a>
            <a
    href="https://www.linkedin.com/in/p-kavya-hasini07"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-400 transition"
  >
    LinkedIn
  </a>
            
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 lg:mt-0"
        >
          <div className="relative">

            <div className="absolute inset-0 bg-pink-600 blur-[100px] opacity-40"></div>

            <div className="relative w-[380px] h-[500px] rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-2xl">

              <img
  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
  alt="Developer"
  className="w-full h-full object-cover"
/>

            </div>

          </div>
        </motion.div>

      </section>
      {/* About Section */}
<section
  id="about"
  className="relative z-10 py-24 px-10 lg:px-20"
>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <div>

      <h2 className="text-5xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-gray-400 leading-8">
        Hi, I'm Kavyahasini, a passionate Computer Science
        student and Frontend Developer. I enjoy creating
        modern, responsive and visually appealing web
        applications using React, JavaScript and modern
        technologies.

        My goal is to become a skilled Software Developer
        and build impactful digital products that solve
        real-world problems.
      </p>

    </div>

    <div className="flex justify-center">

      <div className="w-[320px] h-[400px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center">

        <span className="text-gray-400">
          AI Portrait Coming Soon
        </span>

      </div>

    </div>

  </div>

</section>
{/* Skills Section */}
<section
  id="skills"
  className="relative z-10 py-24 px-10 lg:px-20"
>

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-16">
      Skills
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-4 text-pink-400">
          Frontend
        </h3>

        <p className="text-gray-400">
          HTML, CSS, JavaScript, React, Tailwind CSS
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-4 text-pink-400">
          Programming
        </h3>

        <p className="text-gray-400">
          C, C++, Java, Python
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-4 text-pink-400">
          Tools
        </h3>

        <p className="text-gray-400">
          Git, GitHub, VS Code
        </p>
      </div>

    </div>

  </div>

</section>
{/* Projects Section */}
<section
  id="projects"
  className="relative z-10 py-24 px-10 lg:px-20"
>

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-16">
      Featured Projects
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Project 1 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:scale-105 transition duration-300">

        <div className="h-48 bg-gradient-to-r from-pink-600 to-red-600"></div>

        <div className="p-6">

          <h3 className="text-2xl font-semibold mb-3">
            Mini Job Portal
          </h3>

          <p className="text-gray-400 mb-5">
            A job portal system built using Java, JSP,
            HTML, CSS and JavaScript for managing job
            listings and applications.
          </p>

          <a
            href="https://github.com/kavyahasini7/mini-job-portal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-full bg-pink-600 hover:bg-pink-700"
          >
            View Code
          </a>

        </div>

      </div>

      {/* Project 2 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:scale-105 transition duration-300">

        <div className="h-48 bg-gradient-to-r from-red-600 to-pink-500"></div>

        <div className="p-6">

          <h3 className="text-2xl font-semibold mb-3">
            Indian Restaurant Website
          </h3>

          <p className="text-gray-400 mb-5">
            Responsive restaurant website developed
            using HTML and CSS with a clean and modern UI.
          </p>

          <button className="px-5 py-2 rounded-full bg-pink-600">
            Coming Soon
          </button>

        </div>

      </div>

      {/* Project 3 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:scale-105 transition duration-300">

        <div className="h-48 bg-gradient-to-r from-pink-500 to-red-700"></div>

        <div className="p-6">

          <h3 className="text-2xl font-semibold mb-3">
            Personal Portfolio Website
          </h3>

          <p className="text-gray-400 mb-5">
            Modern animated portfolio built using React,
            Tailwind CSS and Framer Motion.
          </p>

          <button className="px-5 py-2 rounded-full bg-pink-600">
            In Progress
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Contact Section */}
<section
  id="contact"
  className="relative z-10 py-24 px-10 lg:px-20"
>

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-5xl font-bold mb-8">
      Let's Connect
    </h2>

    <p className="text-gray-400 text-lg mb-12">
      Open to internships, collaborations and exciting opportunities.
    </p>

    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10">

      <div className="space-y-6">

        <div>
          <h3 className="text-xl font-semibold text-pink-400">
            Email
          </h3>

          <p className="text-gray-300">
            yourmail@gmail.com
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-pink-400">
            GitHub
          </h3>

          <a
            href="https://github.com/kavyahasini7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400"
          >
            github.com/kavyahasini7
          </a>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-pink-400">
            LinkedIn
          </h3>

          <a
    href="https://www.linkedin.com/in/p-kavya-hasini07"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-pink-400"
  >
    linkedin.com/in/p-kavya-hasini07
  </a>
        </div>

      </div>

    </div>

  </div>

</section>

{/* Contact Section */}
<section
  id="contact"
  className="relative z-10 py-24 px-10 lg:px-20"
>
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-5xl font-bold mb-8">
      Contact Me
    </h2>

    <p className="text-gray-400 mb-10">
      Open to internships, collaborations and software development opportunities.
    </p>

    <div className="flex flex-col gap-4 items-center">

      <a
        href="https://github.com/kavyahasini7"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg hover:text-pink-400"
      >
        💻 GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/p-kavya-hasini07"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg hover:text-pink-400"
      >
        🔗 LinkedIn
      </a>

    </div>

  </div>
</section>
{/* Footer */}
<footer className="relative z-10 border-t border-white/10 py-8 mt-10">

  <div className="text-center text-gray-500">

    © 2026 Kavya. Built with React & Tailwind CSS

  </div>

</footer>

 
    </div>
  );
}

export default App;