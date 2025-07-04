import { useState } from 'react';
import {
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaPython, FaGitAlt,
  FaGithub, FaLinkedin, FaEnvelope
} from 'react-icons/fa';
import './App.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-card">
        {/* Replace with a real profile image if available */}
        <div className="profile-photo" style={{backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <h1>Jane Doe</h1>
        <h2>Software Developer & Student</h2>
        <p className="profile-intro">Aspiring developer with a passion for building scalable web applications and elegant user experiences.</p>
        <a href="#contact" className="profile-contact-btn">Contact</a>
      </div>
      <div className="about-card">
        <h3>About</h3>
        <p>Computer Science undergraduate with experience in modern JavaScript frameworks, backend APIs, and UI/UX design. Always eager to learn and contribute to impactful projects.</p>
      </div>
      <div className="skills-card">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill-icon" title="JavaScript"><FaJs /></div>
          <div className="skill-icon" title="React"><FaReact /></div>
          <div className="skill-icon" title="HTML5"><FaHtml5 /></div>
          <div className="skill-icon" title="CSS3"><FaCss3Alt /></div>
          <div className="skill-icon" title="Python"><FaPython /></div>
          <div className="skill-icon" title="Git"><FaGitAlt /></div>
        </div>
      </div>
      <div className="sidebar-socials">
        <a href="https://github.com/janedoe" className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/in/janedoe" className="social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="mailto:janedoe@email.com" className="social-icon" title="Email"><FaEnvelope /></a>
      </div>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>Full-stack web application for managing tasks and productivity, built with React and Node.js.</p>
          </div>
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio to showcase projects and skills, designed with a focus on UX and accessibility.</p>
          </div>
        </div>
      </section>
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-card">
          <h4>Software Engineering Intern</h4>
          <p>Contributed to frontend and backend development for a SaaS platform. (Summer 2023)</p>
        </div>
        <div className="experience-card">
          <h4>Student Developer</h4>
          <p>Developed web projects and participated in coding competitions. (2022-2023)</p>
        </div>
      </section>
      <section className="testimonial-section">
        <h2>Testimonial</h2>
        <div className="testimonial-card">
          <p>"Jane is a dedicated developer who consistently delivers high-quality work and collaborates effectively with the team."</p>
          <span>- Mentor</span>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:janedoe@email.com">janedoe@email.com</a></p>
        <p>
          <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>
    </main>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <div className={`App${darkMode ? ' dark-mode' : ''}`}>
      <button className="theme-toggle" onClick={handleToggle}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <div className="layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
