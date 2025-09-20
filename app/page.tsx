"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { StarsBackgroundDemo } from "@/components/StarsBackgroundDemo"
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaJava,
  FaPython,
  FaVuejs,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaLinkedin,
} from "react-icons/fa"
import {
  SiSpring,
  SiVite,
  SiFlask,
  SiElasticsearch,
  SiFlutter,
  SiJsonwebtokens,
  SiRabbitmq,
  SiThymeleaf,
  SiNginx,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGithubactions,
  SiNestjs,
  SiReact,
  SiNextdotjs,
} from "react-icons/si"

const techStackData = [
  { name: "Spring", icon: SiSpring },
  { name: "Java", icon: FaJava },
  { name: "Vue.js", icon: FaVuejs },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Vite", icon: SiVite },
  { name: "Flask", icon: SiFlask },
  { name: "Python", icon: FaPython },
  { name: "Elasticsearch", icon: SiElasticsearch },
  { name: "Flutter", icon: SiFlutter },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "RabbitMQ", icon: SiRabbitmq },
  { name: "Thymeleaf", icon: SiThymeleaf },
  { name: "Nginx", icon: SiNginx },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "MySQL", icon: SiMysql },
  { name: "Postgres", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "GitHub", icon: FaGithub },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Docker", icon: FaDocker },
]

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }
      },
      delay + currentIndex * 50,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-[#00aaaa] ml-1"
      />
    </span>
  )
}

const TechStackMarquee = () => {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{ x: isPaused ? 0 : [-1000, 0] }}
        transition={{
          duration: isPaused ? 0 : 20,
          repeat: isPaused ? 0 : Infinity,
          ease: "linear",
        }}
        className="inline-flex space-x-6"
      >
        {[...techStackData, ...techStackData].map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex items-center space-x-2 tech-card px-6 py-3 rounded-full"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5
              }}
            >
              <IconComponent className="w-5 h-5 text-[#006494]" />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{tech.name}</span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold gradient-text"
            >
              Khuong
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#about" className="hover:text-[#00aaaa] transition-colors">About</a>
              <a href="#tech" className="hover:text-[#00aaaa] transition-colors">Tech Stack</a>
              <a href="#projects" className="hover:text-[#00aaaa] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#00aaaa] transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Stars Background */}
        <StarsBackgroundDemo />

        <div className="text-center max-w-6xl mx-auto relative z-10">
          {/* Main heading with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h3
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 gradient-text"
            >
              Hi, I'm Khuong
            </motion.h3>
           
          </motion.div>

          {/* Subtitle with enhanced typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4">
              <TypewriterText text="Full-Stack Developer" delay={20} />
            </div>
            <div className="text-lg md:text-xl text-gray-400">
              <TypewriterText text="& Automation Enthusiast" delay={20} />
            </div>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex hidden flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#00aaaa] to-[#0088aa] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#00aaaa] text-[#00aaaa] font-semibold rounded-full hover:bg-[#00aaaa] hover:text-white transition-all duration-300"
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* Social links with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://facebook.com/khuong2924"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-[#1877f2] hover:bg-[#1877f2]/20 transition-all duration-300 group"
            >
              <FaFacebook className="w-6 h-6 text-white group-hover:text-[#1877f2] transition-colors" />
            </motion.a>
            <motion.a
              href="https://instagram.com/tr.vinhkhuong"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-[#f5daf1] hover:bg-[#f5daf1]/20 transition-all duration-300 group"
            >
              <FaInstagram className="w-6 h-6 text-white group-hover:text-[#f25adb] transition-colors" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/khuong-truong-5b808a268"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-[#0077b5] hover:bg-[#0077b5]/20 transition-all duration-300 group"
            >
              <FaLinkedin className="w-6 h-6 text-white group-hover:text-[#0077b5] transition-colors" />
            </motion.a>

            <motion.a
              href="https://github.com/truongvinhkhuong"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-[#00aaaa] hover:bg-[#00aaaa]/20 transition-all duration-300 group"
            >
              <FaGithub className="w-6 h-6 text-white group-hover:text-[#00aaaa] transition-colors" />
            </motion.a>
          </motion.div>

          
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="text-[#00aaaa] font-semibold text-lg mb-4 block">About Me</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Passionate Developer
                  <span className="block text-[#00aaaa]">Building the Future</span>
            </h2>
              </motion.div>
              
            <motion.div 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-8"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full-stack developer with a deep love for creating innovative solutions and 
                  automating complex processes. With expertise in modern web technologies, I enjoy turning 
                  ideas into reality through clean, efficient code.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in continuous learning 
                  and staying up-to-date with the latest industry trends.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00aaaa] mb-2">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00aaaa] mb-2">15+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00aaaa] mb-2">10+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Visual elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Enhanced Floating cards */}
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, 2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  y: -30,
                  transition: { duration: 0.3 }
                }}
                className="absolute top-0 right-0 group cursor-pointer"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00aaaa] via-[#00cccc] to-[#00aaaa] rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Card content */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00aaaa]/20 via-transparent to-[#00cccc]/20 rounded-3xl opacity-50"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#00aaaa] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-3 w-1 h-1 bg-[#00cccc] rounded-full animate-ping"></div>
                    
                    <div className="relative text-white">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#00aaaa] to-[#00cccc] rounded-lg flex items-center justify-center mr-3">
                          <span className="text-sm">⚛️</span>
                        </div>
                        <div className="text-2xl font-bold">Frontend</div>
                      </div>
                      <div className="text-sm opacity-90 pl-11">React, Vue, Next.js</div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#00aaaa]/30 to-transparent rounded-tl-3xl"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 25, 0],
                  rotate: [0, -2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -5,
                  y: 30,
                  transition: { duration: 0.3 }
                }}
                className="absolute top-32 left-0 group cursor-pointer"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Card content */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 rounded-3xl opacity-50"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-2 right-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
                    
                    <div className="relative text-white">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-sm">⚙️</span>
                        </div>
                        <div className="text-2xl font-bold">Backend</div>
                      </div>
                      <div className="text-sm opacity-90 pl-11">Spring, Flask, Node.js</div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-500/30 to-transparent rounded-tl-3xl"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 1, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 3,
                  y: -25,
                  transition: { duration: 0.3 }
                }}
                className="absolute bottom-0 right-1/4 group cursor-pointer"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-teal-400 to-green-400 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Card content */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-teal-400/20 rounded-3xl opacity-50"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-4 left-3 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 right-2 w-1 h-1 bg-teal-400 rounded-full animate-bounce"></div>
                    
                    <div className="relative text-white">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-sm">🚀</span>
                        </div>
                        <div className="text-2xl font-bold">DevOps</div>
                      </div>
                      <div className="text-sm opacity-90 pl-11">Docker, CI/CD</div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-green-400/30 to-transparent rounded-tl-3xl"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Central profile image */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 mx-auto"
              >
                {/* Outer glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00aaaa]/30 via-transparent to-purple-500/30 rounded-full blur-xl"></div>
                
                {/* Profile container */}
                <div className="relative w-full h-full bg-gradient-to-br from-[#00aaaa]/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-xl border-2 border-white/20 shadow-2xl">
                  {/* Animated background circles */}
                  <div className="absolute inset-4 bg-gradient-to-br from-[#00aaaa]/10 to-purple-500/10 rounded-full animate-pulse"></div>
                  
                  {/* Floating mini icons around profile */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-lg">💻</div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-lg">⚡</div>
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg">🎯</div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-lg">🔥</div>
                  </motion.div>
                  
                  {/* Main profile emoji */}
                  <motion.div 
                    animate={{ 
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="text-6xl relative z-10"
                  >
                    👨‍💻
                  </motion.div>
                </div>
                
                {/* Floating connection lines */}
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 border border-[#00aaaa]/30 rounded-full"
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#00aaaa] font-semibold text-lg mb-4 block">Technologies</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tech Stack & Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Tech Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          >
            {techStackData.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-[#00aaaa]/50 transition-all duration-300 cursor-pointer">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#00aaaa]/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-white group-hover:text-[#00aaaa] transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-white group-hover:text-[#00aaaa] transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00aaaa] to-[#0088aa] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
                <p className="text-gray-400">
                  Creating beautiful, responsive user interfaces with modern frameworks and libraries.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Backend Development</h3>
                <p className="text-gray-400">
                  Building robust server-side applications and APIs with scalable architectures.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">DevOps & Automation</h3>
                <p className="text-gray-400">
                  Streamlining deployment processes and automating workflows for efficiency.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#00aaaa] font-semibold text-lg mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-[#00aaaa]/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[#00aaaa]/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl">🌐</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-400 mb-4">
                    Full-stack e-commerce solution built with React, Node.js, and MongoDB
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#00aaaa]/20 text-[#00aaaa] rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-[#00aaaa]/20 text-[#00aaaa] rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-[#00aaaa]/20 text-[#00aaaa] rounded-full text-sm">MongoDB</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#00aaaa] hover:text-white transition-colors">Live Demo</a>
                    <a href="#" className="text-[#00aaaa] hover:text-white transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
                <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-[#00aaaa]/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Task Management App</h3>
                  <p className="text-gray-400 mb-4">
                    Collaborative task management application with real-time updates
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#00aaaa]/20 text-[#00aaaa] rounded-full text-sm">Vue.js</span>
                    <span className="px-3 py-1 bg-[#00aaaa]/20 text-[#00aaaa] rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-[#00aaaa]/20 text-[#00aaaa] rounded-full text-sm">WebSocket</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#00aaaa] hover:text-white transition-colors">Live Demo</a>
                    <a href="#" className="text-[#00aaaa] hover:text-white transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-[#00aaaa]/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Automation Tool</h3>
                  <p className="text-gray-400 mb-4">
                    Python-based automation script for workflow optimization
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#00aaaa]/20 text-[#00aaaa] rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-[#00aaaa]/20 text-[#00aaaa] rounded-full text-sm">Selenium</span>
                    <span className="px-3 py-1 bg-[#00aaaa]/20 text-[#00aaaa] rounded-full text-sm">Flask</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#00aaaa] hover:text-white transition-colors">Live Demo</a>
                    <a href="#" className="text-[#00aaaa] hover:text-white transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#00aaaa] to-[#0088aa] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="text-[#00aaaa] font-semibold text-lg mb-4 block">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's Work Together
                </h2>
                <p className="text-xl text-gray-400">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can collaborate!
                </p>
              </motion.div>

              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00aaaa]/20 rounded-xl flex items-center justify-center">
                    <span className="text-[#00aaaa] text-xl">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">khuong@example.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00aaaa]/20 rounded-xl flex items-center justify-center">
                    <span className="text-[#00aaaa] text-xl">📱</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-400">+84 xxx xxx xxx</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00aaaa]/20 rounded-xl flex items-center justify-center">
                    <span className="text-[#00aaaa] text-xl">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-400">Vietnam</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00aaaa] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00aaaa] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00aaaa] transition-colors"
                      placeholder="Project discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00aaaa] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#00aaaa] to-[#0088aa] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black/20 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Khuong Truong</h3>
              <p className="text-gray-400 mb-6">
                Passionate full-stack developer creating innovative solutions and building the future through code.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://facebook.com/khuong2924"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1877f2]/20 transition-colors"
                >
                  <FaFacebook className="w-5 h-5 text-white hover:text-[#1877f2] transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/khuong-truong-5b808a268"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0077b5]/20 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5 text-white hover:text-[#0077b5] transition-colors" />
                </motion.a>
                <motion.a
                  href="https://github.com/truongvinhkhuong"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00aaaa]/20 transition-colors"
                >
                  <FaGithub className="w-5 h-5 text-white hover:text-[#00aaaa] transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-[#00aaaa] transition-colors">About</a></li>
                <li><a href="#tech" className="text-gray-400 hover:text-[#00aaaa] transition-colors">Tech Stack</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-[#00aaaa] transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#00aaaa] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>trvinhkhuong@gmail.com</li>
                <li>+84 867 084 729</li>
                <li>Ho Chi Minh City, Vietnam</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">
              © 2025 Khuong Truong.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
