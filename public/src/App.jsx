import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'AFR Network Compliance Platform',
      description: 'Data-driven web prototype with ETL pipelines for real-time compliance tracking',
      tech: ['Python', 'Apache Airflow', 'Docker', 'Data Warehouse', 'KPI Dashboards'],
      highlights: ['Built & orchestrated ETL pipelines', 'Containerized with Docker', 'Real-time compliance monitoring'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Car Wash Management System',
      description: 'Java-based web application with role-based access and activity tracking',
      tech: ['Java', 'Spring Boot', 'MySQL', 'RESTful API', 'Dashboard'],
      highlights: ['Service & pricing management', 'Secure role-based access', 'Activity tracking & statistics'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Billing Management Platform',
      description: 'Web application for commercial billing with payment tracking & forecasts',
      tech: ['JavaScript', 'React', 'Laravel', 'MySQL', 'Power BI'],
      highlights: ['Invoice management system', 'Automated payment reminders', 'Revenue dashboards'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'E-Commerce Application',
      description: 'Full-featured e-commerce platform with modern UI/UX',
      tech: ['JavaScript', 'React.js', 'Firebase', 'Payment Integration'],
      highlights: ['Optimized user interface', 'Smooth navigation', 'Mobile-responsive design'],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const skills = {
    'Languages': ['Python', 'Java', 'PHP', 'JavaScript'],
    'Frameworks': ['React.js', 'Laravel', 'Spring Boot', 'Angular'],
    'Databases': ['MySQL', 'Firebase', 'Data Warehouse'],
    'Tools & DevOps': ['Docker', 'Apache Airflow', 'Git', 'SCRUM', 'Power BI', 'RESTful APIs'],
    'Specializations': ['ETL Pipelines', 'Software Architecture', 'Dashboard Design', 'Mobile Development']
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            FEUDJIO BRAND
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-all duration-300 ${
                  activeSection === item
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-300 hover:text-cyan-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cyan-400"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-cyan-500/10">
            <div className="flex flex-col gap-4 p-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  FEUDJIO BRAND
                </h1>
                <p className="text-2xl text-cyan-400 font-light">Full Stack Developer</p>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Passionate about crafting exceptional digital experiences. I design and optimize web and mobile applications—from architecture to deployment. Creative, detail-oriented, driven to deliver solutions that fuel company growth.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#contact"
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Download CV
                </a>
              </div>

              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/brand-feudjio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/BrandFeud" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:brandonfeudjio8@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center backdrop-blur-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>
                <code className="relative z-10 text-cyan-400 text-sm md:text-base p-8 font-mono whitespace-pre-wrap break-words">
{`const developer = {
  name: "Feudjio Brand",
  title: "Full Stack Dev",
  expertise: [
    "web apps",
    "ETL pipelines",
    "architectures",
    "dashboards"
  ],
  passion: "innovation",
  location: "Mauritius"
}`}
                </code>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce">
            <ChevronDown className="text-cyan-400" size={28} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a software engineer with a passion for building scalable, user-centric applications. With roots in Cameroon and based in Mauritius, I bring diverse perspectives to technical problem-solving.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My expertise spans full-stack development, ETL pipeline orchestration, and system architecture design. I'm committed to continuous learning and staying ahead of emerging technologies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me playing basketball, enjoying cinema, or capturing moments through photography.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-6 rounded-lg border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Education</h3>
                <p className="text-gray-300">Professional Bachelor's in Application Development & Design</p>
                <p className="text-sm text-gray-400">Institut Saint Jean, Yaoundé, Cameroon (2020-2023)</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Current Role</h3>
                <p className="text-gray-300">Software Engineer at MQR Contracting Co Ltd</p>
                <p className="text-sm text-gray-400">Remote • Since Nov 2024</p>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 p-6 rounded-lg border border-orange-500/20">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">Languages</h3>
                <p className="text-gray-300">French (Native) • English (C1 Proficient)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-8 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 hover:text-cyan-300 transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
            <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-4">Hard Skills</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Web & mobile application development</li>
                  <li>• Software architecture design</li>
                  <li>• ETL pipeline orchestration</li>
                  <li>• Database design & optimization</li>
                  <li>• Dashboard & analytics development</li>
                  <li>• API design & integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-4">Soft Skills</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Analytical & problem-solving mindset</li>
                  <li>• Proactive & self-motivated</li>
                  <li>• Strong communication abilities</li>
                  <li>• Team collaboration & leadership</li>
                  <li>• Attention to detail & quality focus</li>
                  <li>• Continuous learning orientation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className={`h-32 bg-gradient-to-r ${project.color} opacity-10 group-hover:opacity-20 transition-all duration-300`}></div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3 font-semibold">Key Highlights</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-cyan-400 mt-1">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Let's Work Together</h2>
          <p className="text-center text-gray-400 text-lg mb-12">
            Got a project in mind? Let's create something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:brandonfeudjio8@gmail.com"
              className="group bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Email</h3>
                  <p className="text-gray-300 break-all">brandonfeudjio8@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+23057429458"
              className="group bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <Phone className="text-purple-400 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Phone</h3>
                  <p className="text-gray-300">+230 5742 9458</p>
                </div>
              </div>
            </a>
          </div>

          <form className="space-y-6 bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-8 rounded-xl border border-slate-700/50">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600/50 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © 2026 Feudjio Brand. All rights reserved.
          </div>
          
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/brand-feudjio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/BrandFeud" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href="mailto:brandonfeudjio8@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
