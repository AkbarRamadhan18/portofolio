"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

// Timeline Item Component
interface TimelineItemProps {
  date: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  category,
  description,
  image,
}) => {
  return (
    <motion.div
      className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-2xl shadow-md border border-gray-700 hover:border-blue-400/50 mb-10 flex gap-6"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Garis timeline */}
      <div className="absolute left-[-20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-purple-400"></div>

      {/* Gambar project */}
      <div className="w-32 h-24 relative flex-shrink-0 rounded-lg overflow-hidden border-2 border-blue-400/30">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Konten */}
      <div>
        <span className="text-sm text-gray-400">{date}</span>
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{title}</h3>
        <p className="text-sm text-blue-400 mb-2">#{category}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const timelineItems = [
    {
      date: "25/06/2024",
      title: "Yap2Type",
      category: "App",
      description:
        "Aplikasi AI untuk merangkum konten berbasis audio seperti podcast, berita, dan percakapan.",
      image: "/projects/yap2type.png",
    },
    {
      date: "15/07/2024",
      title: "Notion AI",
      category: "Productivity",
      description:
        "Integrasi Notion dengan AI untuk mempercepat catatan, merangkum dokumen, dan brainstorming ide lebih efisien.",
      image: "/projects/notion.png",
    },
    {
      date: "05/08/2024",
      title: "NextCloud Deploy",
      category: "Cloud",
      description:
        "Deploy Nextcloud di AWS Kubernetes dengan RDS MariaDB & EFS, dilengkapi monitoring CloudWatch.",
      image: "/projects/project3.png",
    },
  ];

  // Skills by category
  const skills = [
    {
      category: "Web Development",
      tools: ["Next.js", "MySQL", "Javascript", "Python", "Html"],
    },
    {
      category: "Mobile Development",
      tools: ["Flutter", "Dart"],
    },
    {
      category: "Cloud Computing",
      tools: ["AWS"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white font-sans">
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">My Portfolio</h1>
          <div className="space-x-6 text-sm uppercase">
            <Link to="profile" smooth duration={600} className="hover:text-blue-400 cursor-pointer transition">
              Profile
            </Link>
            <Link to="projects" smooth duration={600} className="hover:text-blue-400 cursor-pointer transition">
              Projects
            </Link>
            <Link to="skills" smooth duration={600} className="hover:text-blue-400 cursor-pointer transition">
              Skills
            </Link>
            <Link to="contact" smooth duration={600} className="hover:text-blue-400 cursor-pointer transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <Element name="profile">
        <section className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6 overflow-hidden">
          {/* Background animated gradient blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl"
            />
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl shadow-blue-500/50 bg-white"
          >
            <Image
              src="/profile/akbar.png"
              alt="My Photo"
              fill
            />
            {/* Glow effect */}
            <motion.div
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20"
            />
          </motion.div>

          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative z-10 md:ml-12 mt-8 md:mt-0 max-w-xl"
          >
            <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hallo!
            </h2>
            <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              I'm Abar
            </h2>
            <h2 className="text-1xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Network Engineer | Cloud Engineer | Web Developer | Mobile Developer</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm Azzammil Akbar Ramadhan, a passionate Computer Engineering graduate from Padang State Polytechnic.
              With a strong specialization in web programming and mobile app development,
              I'm also proficient in networking and digital infrastructure, including cloud computing and network device configuration.
              This portfolio is a testament to my dedication and technical skills in realizing innovative and scalable digital solutions.
            </p>
          </motion.div>
        </section>

      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
          {/* Subtle background effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>

          {/* Grid Project Cards */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 mb-16 relative z-10">
            {/* Project 1 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg cursor-pointer"
            >
              <Image
                src="/project/project1.png"
                alt="Project 1"
                width={500}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-5">
                <h3 className="font-semibold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  PBL YOLOIS
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  PBL Yolois is a team project where this project was built to carry out attendance in class which is detected by a camera sensor,
                  then the data detected by the camera will be sent in the form of images to the Yolois Android application.
                </p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg cursor-pointer"
            >
              <Image
                src="/project/project2.png"
                alt="Project 2"
                width={500}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-5">
                <h3 className="font-semibold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Project 2
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  This website is a hotel admin website that was created during the final exam or final semester exam,
                  where this website was built using the Python programming language.
                </p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg cursor-pointer"
            >
              <Image
                src="/project/project3.png"
                alt="Project 3"
                width={500}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-5">
                <h3 className="font-semibold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Project 3
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  This project is a project that I did during my internship, where this process carried out big data analysis,
                  where the machine data was taken from Excel data and analyzed by the system using MongoDB and analyzed by Python coding.
                </p>
              </div>
            </motion.div>
          </div>


          {/* Timeline Project */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl font-bold text-center mb-8 relative z-10"
          >
            🚀 Project Timeline
          </motion.h2>

          <div className="max-w-4xl mx-auto px-6 pb-8 relative z-10">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </section>
      </Element>

      {/* Skills Section */}
      <Element name="skills">
        <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-center relative overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10"
          >
            Skills & Tools
          </motion.h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 mb-16 relative z-10">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400/50 hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {skill.category}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {skill.tools.map((tool, i) => (
                    <li key={i}>• {tool}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Internship Experience Section */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10"
          >
            Internship Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
            {/* Experience 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 hover:scale-[1.02] transition"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                <div className="flex items-center gap-4">
                  {/* Logo perusahaan persegi panjang */}
                  <div className="relative w-16 h-10 overflow-hidden border border-gray-600 shadow rounded-md bg-white flex-shrink-0">
                    <Image
                      src="/logos/citlogo.png"
                      alt="PT Carano Integrasi Teknologi"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-white">
                      Network Engineer
                    </h3>
                    <p className="text-blue-400">PT Carano Integrasi Teknologi</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">
                  Dec 2021 - Jan 2022
                </span>
              </div>

              <p className="text-gray-300 text-left">
                As an intern at PT Carano Integrasi Teknologi, I have the opportunity to delve into Mikrotik and Cisco components
                while actively participating in the installation of building networks and WiFi networks. In this role,
                I learn about network device configuration, troubleshooting, and the implementation of efficient technological solutions
                to meet client needs. This experience not only broadens my technical knowledge but also hones my teamwork and communication
                skills in a dynamic professional environment.
              </p>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 hover:scale-[1.02] transition"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                <div className="flex items-center gap-4">
                  {/* Logo perusahaan persegi panjang */}
                  <div className="relative w-16 h-10 overflow-hidden border border-gray-600 shadow rounded-md bg-white flex-shrink-0">
                    <Image
                      src="/logos/teselogo2.png"
                      alt="PT Tese Manufacturing Indonesia"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-white">
                      Digital Transformation Officer
                    </h3>
                    <p className="text-blue-400">PT Tese Manufacturing Indonesia</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">
                  Aug 2024 - Feb 2025
                </span>
              </div>

              <p className="text-gray-300 text-left">
                During my six-month internship, I gained a lot of experience while working in the Digital Transformation department.
                In this role, I was positioned as a programmer, focusing on the development of web applications using the Next.js framework and JavaScript for the backend on the Node-Red platform.
              </p>
            </motion.div>
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
          </div>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-8 relative z-10"
          >
            Email:{" "}
            <span className="text-blue-400 hover:text-purple-400 transition cursor-pointer">
              azzammilakbarramadhan@gmail.com
            </span>
          </motion.p>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 relative z-10 text-3xl">
            <motion.a
              href="https://github.com/AkbarRamadhan18"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/azzammil-akbar-ramadhan-821374290/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/zzmmilbar18_/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-pink-400 transition"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/azzammil.ramadhan"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebook />
            </motion.a>

            <motion.a
              href="https://wa.me/6281218365391"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </section>
      </Element>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-700/50 text-gray-400 text-sm bg-black">
        © {new Date().getFullYear()} Azzammil Akbar Ramadhan
      </footer>
    </main>
  );
}