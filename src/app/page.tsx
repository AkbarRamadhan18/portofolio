"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
      date: "20/08/2024",
      title: "IDEA Bank Website",
      category: "WebsiteApp",
      description:
        "During my internship at PT Tese Manufacturing Indonesia, I helped develop the Idea Bank Apps, a web-based platform that centralizes project ideas and continuous improvement initiatives. It replaces manual Excel tracking, provides clear visibility of project progress and savings, and allows project owners to manage their projects while maintaining control at key stages, improving overall project management efficiency.",
      image: "/project/project4.png",
    },
    {
      date: "15/11/2023",
      title: "Movie Listing Website",
      category: "WebsiteApp",
      description:
        "This project is BarMovie, a movie recommendation website I developed as a college assignment. It displays popular and latest movies with ratings, posters, and quick access to trailers and details. The project allowed me to practice front-end development, UI design, and dynamic movie data presentation.",
      image: "/project/project5.jpg",
    },
    {
      date: "05/08/2024",
      title: "Website Security Cloud Project from DDoS, SQLi, XSS Attacks Using AWS cloud",
      category: "CloudSecurity",
      description:
        "This AWS project is a secure cloud architecture designed to protect and monitor web applications from threats like DDoS, XSS, and SQL Injection. It integrates AWS WAF, Elastic Load Balancer, Auto Scaling, EC2 web servers, Amazon RDS, and Snort IDS with Telegram notifications. Traffic is routed through Route 53 and encrypted via AWS Certificate Manager before being filtered by WAF and distributed by the ELB to the appropriate EC2 instance. Snort monitors mirrored traffic for intrusions, while RDS is securely placed in a private subnet. Each web server has its own domain, enabling better isolation and management. This setup provides a scalable, secure, and real-time monitored cloud environment.",
      image: "/project/project6.jpg",
    },
  ];

  const certificateItems = [
    {
      title: "CCNA - Cisco Certified Network Associate",
      issuer: "Cisco",
      date: "2024",
      logo: "/logos/ciscologo.png",
      link: "https://drive.google.com/file/d/1zXnddjC6AZDpVjXK-xqCGuhCIf7zZI4e/view?usp=sharing",
    },
    {
      title: "MTCNA - MikroTik Certified Network Associate",
      issuer: "MikroTik",
      date: "2024",
      logo: "/logos/mikrotiklogo.png",
      link: "https://drive.google.com/file/d/1rxvM9aSt3XGEWIhjwp8UDFQfkIUwnBsx/view?usp=sharing",
    },
    {
      title: "Junior Network Administrator",
      issuer: "Kominfo",
      date: "2023",
      logo: "/logos/bnsplogo.png",
      link: "https://drive.google.com/file/d/1MKqfymzycVv2NSQYloIKpyvEyGcRT_-G/view?usp=sharing",
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
            <Link to="certificate" smooth duration={600} className="hover:text-blue-400 cursor-pointer transition">
              Certificates
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
          <div className="relative z-10 w-72 h-72">
            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl shadow-blue-500/50 bg-white"
            >
              <Image
                src="/profile/akbar.png"
                alt="My Photo"
                fill
              />

              {/* Glow */}
              <motion.div
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20"
              />
            </motion.div>

            {/* Setengah lingkaran bergerak */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute w-[330px] h-[330px]">
                <div
                  className="absolute inset-0 border-[6px] border-transparent border-t-blue-500 border-r-blue-500 rounded-full"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "rotate(45deg)",
                  }}
                />
              </div>
            </motion.div>
          </div>


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

            {/* Typing Animation - Role */}
            <motion.h2
              className="text-xl font-extrabold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.025,
                    },
                  },
                }}
              >
                {"Network Engineer | Cloud Engineer | Web Developer | Mobile Developer"
                  .split("")
                  .map((char, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.04 }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </motion.span>
            </motion.h2>

            {/* Typing Animation - Full Profile Description */}
            <motion.p
              className="text-gray-300 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.015,
                    },
                  },
                }}
              >
                {"I'm Azzammil Akbar Ramadhan, a passionate Computer Engineering graduate from Padang State Polytechnic. With a strong specialization in web programming and mobile app development, I'm also proficient in networking and digital infrastructure, including cloud computing and network device configuration. This portfolio is a testament to my dedication and technical skills in realizing innovative and scalable digital solutions."
                  .split("")
                  .map((char, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 5 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.03 }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </motion.span>
            </motion.p>
            <motion.a
              href="https://drive.google.com/file/d/134I2RYThyNsA_46_lIIGWonZVDg6qOx-/view?usp=sharing"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition"
            >
              📄 Resume
            </motion.a>
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
              <div className="rounded-xl overflow-hidden bg-gray-800 shadow-lg border border-gray-700">
                <Image
                  src="/project/project1.png"
                  alt="PBL YOLOIS"
                  width={500}
                  height={300}
                  className="object-cover w-full h-60"
                />

                <div className="p-5">
                  {/* Title */}
                  <h3 className="font-semibold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    PBL YOLOIS
                  </h3>
                  {/* Category */}
                  <p className="text-sm text-blue-400 font-medium mb-1">
                    #MobileApp
                  </p>
                  {/* Description */}
                  <p className="text-gray-400 text-sm mt-2">
                    PBL Yolois is a team project where this project was built to carry out attendance in class which is detected by a camera sensor,
                    then the data detected by the camera will be sent in the form of images to the Yolois Android application.
                  </p>

                  {/* Date */}
                  <p className="text-gray-500 text-xs mt-3">16/08/2024</p>
                </div>
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
                  Hotel Reservation Website Application
                </h3>
                {/* Category */}
                <p className="text-sm text-blue-400 font-medium mb-1">
                  #WebsiteApp
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  This website is a hotel admin website that was created during the final exam or final semester exam,
                  where this website was built using the Python programming language.
                </p>
                {/* Date */}
                <p className="text-gray-500 text-xs mt-3">19/07/2023</p>
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
                  Analyst Data
                </h3>
                <p className="text-sm text-blue-400 font-medium mb-1">
                  #DataScience
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  This project is a project that I did during my internship, where this process carried out big data analysis,
                  where the machine data was taken from Excel data and analyzed by the system using MongoDB and analyzed by Python coding.
                </p>
                {/* Date */}
                <p className="text-gray-500 text-xs mt-3">11/12/2024</p>
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


      {/* Certificate Section */}
      <Element name="certificate">
        <section className="py-20 bg-gray-800 text-center relative overflow-hidden">

          {/* Background effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10"
          >
            🎓 Certificates
          </motion.h2>

          {/* Certificate List */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-6 relative z-10">
            {certificateItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="
            p-4 rounded-xl 
            bg-gradient-to-br from-purple-600/20 to-blue-600/20 
            shadow-lg border border-purple-500/30 
            hover:border-blue-400/50 hover:shadow-blue-500/20 
            hover:scale-[1.04] transition
          "
              >
                <div className="flex flex-col items-center">

                  {/* CLICKABLE LOGO */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="certificate-logo drop-shadow-xl cursor-pointer"
                    />
                  </a>

                  <h3 className="text-lg font-semibold text-blue-300 mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">{item.issuer}</p>
                  <p className="text-gray-400 text-sm">{item.date}</p>

                </div>
              </motion.div>
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
                    <h3 className="text-xl font-bold text-white">Network Engineer</h3>
                    <p className="text-blue-400">PT Carano Integrasi Teknologi</p>
                  </div>
                </div>

                <span className="text-sm text-gray-400 mt-2 md:mt-0">
                  Dec 2021 - Jan 2022
                </span>
              </div>

              {/* Paragraph utama */}
              <p className="text-gray-300 text-justify mb-4">
                As an intern at PT Carano Integrasi Teknologi, I had the opportunity to explore Mikrotik and Cisco
                components while actively participating in the installation of building and WiFi networks. This role
                allowed me to practice network configuration, troubleshooting, and the implementation of efficient
                technology solutions to meet client needs. The experience also helped improve my teamwork and
                communication skills within a dynamic professional environment.
              </p>

              {/* Tambahan penjelasan kerja */}
              <ul className="text-gray-300 text-justify list-disc ml-6 space-y-2">
                <li>
                  Worked as a Network & Wireless Engineer responsible for installing, configuring, and maintaining
                  wireless networks and Mikrotik/Cisco devices, resulting in a 95% increase in performance and
                  operational efficiency.
                </li>
                <li>
                  Actively participated in building and Wi-Fi network installations, including troubleshooting processes
                  that ensured optimal connectivity with a 90% success rate.
                </li>
                <li>
                  Involved in introducing and utilizing fiber optic devices, as well as conducting network system testing
                  to support company and client infrastructure needs.
                </li>
              </ul>
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

              {/* Deskripsi Utama */}
              <p className="text-gray-300 text-justify">
                During my six-month internship, I gained a lot of experience while working in the Digital Transformation department.
                In this role, I was positioned as a programmer, focusing on the development of web applications using the Next.js framework and JavaScript for the backend on the Node-Red platform.
              </p>

              {/* Bullet Point Tambahan */}
              <ul className="text-gray-300 text-justify mt-3 list-disc pl-5 space-y-1">
                <li>
                  Worked as a programmer in the Digital Transformation Department, responsible for developing web applications using Next.js and Node-RED.
                </li>
                <li>
                  Conducted web application testing prior to release, identifying bugs, and ensuring all system functionalities operated smoothly.
                </li>
              </ul>
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

          {/* Social Icons */}
          <div className="flex justify-center gap-8 relative z-10 text-3xl">
            <motion.a
              href="mailto:azzammilakbarramadhan@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-red-400 transition cursor-pointer"
            >
              <MdEmail />
            </motion.a>

            <motion.a
              href="https://github.com/AkbarRamadhan18"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-gray-400 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/akbar18"
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