import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Download, Github, Linkedin, Mail, Menu, Moon, MoveUpRight, Sparkles, Sun, X } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './styles.css';

const experiences = [
  { dates: 'MAR 2026 — PRESENT', title: 'Software Developer', company: 'ESPITA · Sousse', text: 'Development and delivery of three institutional web applications for ESPITA, ESEAC Sfax, and EMP Sousse.', detail: 'AI-powered assistants, clean architecture, and scalable delivery across educational platforms.' },
  { dates: 'FEB 2025 — JUL 2025', title: 'React Native Developer', company: 'Mobelite · Monastir', text: 'Delivery of JourneyBuddy, an AI-assisted travel application used by over 50K users.', detail: 'Maps, personalized recommendations, modular architecture, and APK/AAB publishing workflows.' },
  { dates: 'OCT 2024 — MAY 2025', title: 'Software Engineering Student', company: 'ESPRIM · Monastir', text: 'Development of Ktabinet, a full-stack e-commerce platform for online book sales.', detail: 'Inventory and payment workflows with Symfony 6 and MySQL.' },
  { dates: 'JUL 2024 — SEP 2024', title: 'Software Engineering Intern', company: 'Nexans · Monastir', text: 'Development of ECTRH, an HR mobile application for employee data and team management.', detail: 'Workflow automation for daily HR operations.' },
];

const projects = [
  { number: '01', year: '2026', name: 'Eseac', type: 'FULL-STACK WEB APP', description: 'A content and admin experience that helps students, applicants, and visitors find their way through ESEAC.', tags: ['Chatbot', 'Admin dashboard', 'Full-stack'], link: 'https://github.com/amiraboubaker/eseac/', color: 'mint' },
  { number: '02', year: '2025', name: 'JourneyBuddy', type: 'AI-ASSISTED TRAVEL', description: 'A travel planning app with personalized recommendations for agencies and travelers.', tags: ['React Native', 'Node.js', 'MongoDB'], link: 'https://github.com/dghama/journeyBuddy-INT2', color: 'orange' },
  { number: '03', year: '2025', name: 'HealthTracker', type: 'WELLNESS + AI', description: 'A supportive wellness app for tracking sleep, nutrition, and hydration with AI assistance.', tags: ['React Native', 'Firebase', 'AI chatbot'], link: 'https://github.com/amiraboubaker/HealthTracker', color: 'yellow' },
];

const skills = [
  ['Frontend', 'React Native', 'ReactJS', 'TypeScript', 'JavaScript', 'Dart'],
  ['Backend', 'Node.js', 'Express.js', 'Symfony 6', '.NET', 'REST APIs'],
  ['Data & cloud', 'Firebase', 'MySQL', 'MongoDB', 'Oracle', 'SQL Server'],
  ['Workflow', 'Git', 'Figma', 'Agile/Scrum', 'UML', 'Xcode', 'VS Code'],
];

function Reveal({ children, className = '', delay = 0, once = true }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once, amount: 0.16 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function PhotoFrame() {
  const [hasPhoto, setHasPhoto] = useState(true);
  return <div className="photo-frame" aria-label="Portrait of Amira Boubaker">
    {hasPhoto && <img src="/assets/images/amira-photo.jpg" alt="Amira Boubaker" onError={() => setHasPhoto(false)} />}
    {!hasPhoto && <div className="photo-fallback"><span>AB</span><small>Add amira-photo.jpg</small></div>}
    <div className="photo-stamp">AMIRA<br /><span>DEV / 26</span></div>
  </div>;
}

function WorkspaceScene() {
  return <div className="workspace-scene" aria-hidden="true">
    <div className="scene-stars"><i>✦</i><i>✧</i><i>✦</i><i>+</i><i>✧</i></div>
    <div className="success-orbit"><span>↗</span></div>
    <div className="desk-shadow" />
    <div className="desk-top"><div className="keyboard"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="mouse" /></div>
    <div className="monitor"><div className="monitor-screen"><div className="terminal-bar"><b /><b /><b /></div><div className="terminal-code"><span>01</span> <em>const</em> future = <strong>build</strong>();<br /><span>02</span> <em>while</em> (ideas) &#123;<br /><span>03</span>&nbsp;&nbsp;ship(<strong>impact</strong>);<br /><span>04</span> &#125;</div><div className="screen-glow" /></div><div className="monitor-neck" /><div className="monitor-base" /></div>
    <div className="coffee-cup"><span /></div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('amira-theme') === 'dark');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -150]);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('amira-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll('main section, header');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-38% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
    let frame = 0;
    const moveSpotlight = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        document.body.style.setProperty('--pointer-x', `${(event.clientX / window.innerWidth) * 100}%`);
        document.body.style.setProperty('--pointer-y', `${(event.clientY / window.innerHeight) * 100}%`);
        document.body.style.setProperty('--scene-x', `${((event.clientX / window.innerWidth) - 0.5) * 18}px`);
        document.body.style.setProperty('--scene-y', `${((event.clientY / window.innerHeight) - 0.5) * 12}px`);
        frame = 0;
      });
    };
    window.addEventListener('pointermove', moveSpotlight, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('pointermove', moveSpotlight); if (frame) cancelAnimationFrame(frame); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return <>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="site-nav">
      <div className="nav-inner"><a className="brand" href="#home" onClick={closeMenu}>AB<span>.</span></a>
        <button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['about', 'experience', 'projects', 'contact'].map((id) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'true' : undefined} onClick={closeMenu}>{id}</a>)}
          <a className="nav-cv" href="/assets/docs/Amira_Boubaker_CV.pdf" download onClick={closeMenu}>CV <Download size={13} /></a>
          <button className="theme-toggle" type="button" aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`} onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun size={15} /> : <Moon size={15} />}<span>{darkMode ? 'Light' : 'Dark'}</span></button>
        </div>
      </div>
    </nav>

    <main id="main-content">
      <header className="hero" id="home">
        <div className="hero-grid noise">
          <motion.div className="hero-copy" style={{ y: heroY }}>
            <Reveal><p className="eyebrow"><Sparkles size={14} /> Software developer · Monastir, Tunisia</p></Reveal>
            <Reveal delay={0.08}><h1>Digital products<br /><em>with a pulse.</em></h1></Reveal>
            <Reveal delay={0.16}><p className="hero-lede">I build modern web and mobile experiences where thoughtful interfaces meet reliable systems and useful AI.</p></Reveal>
            <Reveal delay={0.23}><div className="hero-actions"><a className="button primary" href="#projects">See the work <ArrowDownRight size={17} /></a><a className="text-link" href="#contact">Let's talk <ArrowUpRight size={16} /></a></div></Reveal>
          </motion.div>
          <motion.div className="hero-visual" style={{ y: heroY }}><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="code-orb"><span>const</span> ideas = <b>shipped</b>();</div><WorkspaceScene /><PhotoFrame /><div className="hero-index">SCROLL TO EXPLORE <ArrowDownRight size={14} /></div></motion.div>
        </div>
        <div className="hero-marquee"><span>REACT NATIVE</span><span>AI PRODUCTS</span><span>SCALABLE APIS</span><span>GOOD DETAILS</span><span>REACT NATIVE</span></div>
      </header>

      <section className="section about-section" id="about"><div className="section-top"><span className="section-kicker">01 / Profile</span><span className="section-line" /></div><div className="about-layout"><Reveal><h2>Making complexity<br /><span>feel simple.</span></h2></Reveal><Reveal delay={0.1}><div className="about-copy"><p className="lead">Software and Full-Stack Developer focused on developing modern web and mobile applications, with practical experience in creating AI-integrated products and scalable APIs.</p><p>Strong in end-to-end delivery, clean architecture, and user-centered solutions. My favorite part is turning an unclear brief into something people can use without thinking twice.</p><div className="mini-stats"><div><strong>50K+</strong><span>users reached</span></div><div><strong>04</strong><span>roles so far</span></div><div><strong>∞</strong><span>curiosity</span></div></div></div></Reveal></div></section>

      <section className="section skills-section" id="skills"><div className="section-top"><span className="section-kicker">02 / Toolkit</span><span className="section-line" /></div><Reveal><div className="skills-heading"><h2>The stack<br /><span>behind the work.</span></h2><p>Hands-on across product surfaces, server logic, data, and the rituals that keep teams moving.</p></div></Reveal><div className="skill-grid">{skills.map(([title, ...items], index) => <Reveal key={title} delay={index * 0.06}><article className="skill-card"><span className="skill-number">0{index + 1}</span><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article></Reveal>)}</div></section>

      <section className="section experience-section" id="experience"><div className="section-top"><span className="section-kicker">03 / Experience</span><span className="section-line" /></div><Reveal><h2>Built in the<br /><span>real world.</span></h2></Reveal><div className="timeline">{experiences.map((item, index) => <Reveal key={item.company} delay={index * 0.05}><article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">{item.dates}</div><div><h3>{item.title}</h3><p className="company"><BriefcaseBusiness size={15} /> {item.company}</p><p>{item.text}</p><p className="timeline-detail">{item.detail}</p></div></article></Reveal>)}</div></section>

      <section className="section projects-section" id="projects"><div className="section-top"><span className="section-kicker">04 / Selected work</span><span className="section-line" /></div><div className="projects-heading"><Reveal><h2>Small selection.<br /><span>Big intent.</span></h2></Reveal><Reveal delay={0.1}><p>Products made to be useful, not merely impressive in a screenshot.</p></Reveal></div><div className="project-grid">{projects.map((project, index) => <ProjectCard project={project} key={project.name} index={index} />)}</div></section>

      <section className="section education-section" id="education"><div className="section-top"><span className="section-kicker">05 / Education</span><span className="section-line" /></div><Reveal><div className="education-intro"><h2>Still learning.<br /><span>Always building.</span></h2><div><p>Software Engineer Degree</p><strong>Esprim, Monastir</strong><small>Sep 2022 — Jul 2025</small><p className="cert">CI/CD Concepts · le bon développeur, Tunisie</p><small>11 Jul 2026 — 10 Sep 2026</small></div></div></Reveal></section>

      <section className="section contact-section" id="contact"><div className="contact-card noise"><Reveal><span className="section-kicker">06 / Contact</span><h2>Let’s make<br /><em>something useful.</em></h2><p>Have a product, problem, or promising idea? I’d love to hear where it could go.</p><div className="contact-actions"><a className="button primary" href="mailto:amiraboubakeresprims@gmail.com">Send an email <Mail size={16} /></a><a href="/Amira_Boubaker_CV.pdf" download className="button light">Get my CV <Download size={16} /></a></div></Reveal><div className="contact-aside"><span>Based in Tunisia</span><span>Open to good problems</span><div className="socials"><a href="https://github.com/amiraboubaker" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a><a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a></div></div></div></section>
    </main>
    <footer><span>© 2026 Amira Boubaker</span><span>Designed + built with care</span><a href="#home">Back to top <MoveUpRight size={13} /></a></footer>
  </>;
}

function ProjectCard({ project, index }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const handleMove = (event) => { const box = event.currentTarget.getBoundingClientRect(); setRotate({ x: ((event.clientY - box.top) / box.height - 0.5) * -7, y: ((event.clientX - box.left) / box.width - 0.5) * 7 }); };
  return <motion.article className={`project-card ${project.color}`} onMouseMove={handleMove} onMouseLeave={() => setRotate({ x: 0, y: 0 })} animate={{ rotateX: rotate.x, rotateY: rotate.y }} transition={{ type: 'spring', stiffness: 280, damping: 22 }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 35 }} viewport={{ once: true, amount: 0.2 }}><div className="project-top"><span>{project.number}</span><span>{project.year}</span></div><div className="project-body"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-bottom"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} repository`}><ArrowUpRight size={20} /></a></div>{index === 1 && <div className="project-spark">✦</div>}</motion.article>;
}

createRoot(document.getElementById('root')).render(<App />);