import { useState, useEffect } from 'react';
import {
  FaJs, FaReact, FaHtml5, FaCss3Alt, FaPython, FaGitAlt,
  FaGithub, FaLinkedin, FaEnvelope
} from 'react-icons/fa';
import './App.css';
import Navbar from './Navbar';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-card">
        {/* Replace with a real profile image if available */}
        <div className="profile-photo" style={{backgroundImage: 'url(https://randomuser.me/api/portraits/men/32.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <h1>Jane Doe</h1>
        <h2>Software Developer & Student</h2>
        <p className="profile-intro">
          Aspiring engineer with a passion for crafting efficient backend systems and scalable data pipelines. Currently exploring the intersection of software development and data engineering.
        </p>
        <a href="#contact" className="profile-contact-btn">Contact</a>
      </div>
      <div className="about-card">
        <h3>About Me</h3>
        <p>
          I'm a student and intern passionate about Software Development and Data Engineering. I enjoy solving real-world problems through code and exploring scalable data solutions. With a strong drive to learn and grow, I’m actively building skills across backend systems, data pipelines, and modern development tools.
        </p>
      </div>
      <div className="skills-card">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill-icon" title="JavaScript" style={{ color: '#f7df1e', background: '#232323' }}><FaJs /></div>
          <div className="skill-icon" title="React" style={{ color: '#61dafb', background: '#232323' }}><FaReact /></div>
          <div className="skill-icon" title="HTML5" style={{ color: '#e34c26', background: '#232323' }}><FaHtml5 /></div>
          <div className="skill-icon" title="CSS3" style={{ color: '#1572b6', background: '#232323' }}><FaCss3Alt /></div>
          <div className="skill-icon" title="Python" style={{ color: '#ffd43b', background: '#232323' }}><FaPython /></div>
          <div className="skill-icon" title="Git" style={{ color: '#f14e32', background: '#232323' }}><FaGitAlt /></div>
        </div>
      </div>
      <div className="sidebar-socials">
        <a href="https://github.com/khardik07" className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="" className="social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="mailto:karumanchihardik@gmail.com" className="social-icon" title="Email"><FaEnvelope /></a>
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
          <a href="https://github.com/khardik07" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>
    </main>
  );
}

function App() {
  // Remove darkMode state and logic
  // Always render in dark mode
  return (
    <div className="App dark-mode">
      <Navbar />
      <div className="layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
