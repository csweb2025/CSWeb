"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { AiOutlineHome, AiOutlineCode } from "react-icons/ai";
import { Analytics } from "@vercel/analytics/next"
import { BiStore } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { RiContactsLine, RiPagesLine } from "react-icons/ri";
import { BsPersonVcard } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, 
  SiTypescript, SiNodedotjs, SiMongodb 
} from "react-icons/si";
import { RiSparklingLine } from 'react-icons/ri';

export default function Home() {
  const [activeTab, setActiveTab] = useState("discover");
  const [activeSideItem, setActiveSideItem] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (tab: string, sideItem: string) => {
    setActiveTab(tab);
    setActiveSideItem(sideItem);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const featuredProjects = [
    {
      id: 1,
      title: "Website-uri pentru afacerea ta",
      image: "/projects/featured/cover3.jpg",
    },
    {
      id: 2,
      title: "Tehnologii moderne și diverse",
      image: "/projects/featured/cover2.jpg",
    },
    {
      id: 3,
      title: "Portofolii digitale care prind viață",
      image: "/projects/featured/cover1.jpg",
    },
  ];

  const projectGallery = [
    {
      id: 1,
      title: "Aplicație web de gestiune cu aplicație mobilă",
      description: "Node.js, React Native și MongoDB",
      image: "/projects/gallery/project1.png",
    },
    {
      id: 2,
      title: "Aplicație web pentru catering cu aplicație mobilă pentru comenzi",
      description: "Node.js și React Native",
      image: "/projects/gallery/project2.jpg",
    },
    {
      id: 3,
      title: "Aplicație web pentru gestiunea bazelor de date",
      description: "React Native și MongoDB",
      image: "/projects/gallery/project3.png",
    },
    {
      id: 4,
      title: "Joc singleplayer 2D",
      description: "Java",
      image: "/projects/gallery/project4.jpg",
    },
    {
      id: 5,
      title: "Joc mobil pentru Android",
      description: "Unity și C#",
      image: "/projects/gallery/project5.jpg",
    },
    {
      id: 6,
      title: "Joc multiplayer de carti",
      description: "Three.js și Socket.io",
      image: "/projects/gallery/project6.jpg",
    },
  ];

  const techStack = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiMongodb, name: "MongoDB" },
  ];

  const stats = [
    { number: 10, label: "Proiecte Realizate", symbol: "+" },
    { number: 3, label: "Ani Experiență", symbol: "" },
    { number: 2, label: "Țări cu Clienți", symbol: "" },
  ];

  const contactInfo = [
    {
      id: 1,
      type: "email",
      label: "Email",
      value: "sergiuceica@yahoo.com",
      icon: MdEmail,
      link: "mailto:sergiuceica@yahoo.com",
      color: "#00a6ff"
    },
    {
      id: 2,
      type: "phone",
      label: "Telefon",
      value: "Indisponibil momentan",
      icon: MdPhone,
      color: "#00d4aa"
    },
    {
      id: 3,
      type: "location",
      label: "Locație",
      value: "Iași, România",
      icon: MdLocationOn,
      link: "#",
      color: "#ff6b6b"
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sergiu-ceica-82498318a/",
      icon: FaLinkedin,
      color: "#0077b5"
    },
    {
      id: 2,
      name: "GitHub",
      url: "Indisponibil momentan",
      icon: FaGithub,
      color: "#333"
    },
    {
      id: 3,
      name: "Twitter",
      url: "Indisponibil momentan",
      icon: FaTwitter,
      color: "#1da1f2"
    },
    {
      id: 4,
      name: "Instagram",
      url: "@sergiutzuusdevlab",
      icon: FaInstagram,
      color: "#e4405f"
    }
  ];

  const [techRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.container}>
      {/* Buton hamburger pentru mobile */}
      <button 
        className={styles.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Meniul vertical din stânga */}
      <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.logoApp}>C.S.</span>
            <span className={styles.logoSpark}>Web</span>
          </div>
        </div>
        <nav className={styles.sideNav}>
          <a 
            href="#" 
            className={`${styles.navItem} ${activeSideItem === "home" ? styles.active : ""}`}
            onClick={() => handleNavigation("discover", "home")}
          >
            <AiOutlineHome size={24} />
            <span>Acasă</span>
          </a>
          <a 
            href="#" 
            className={`${styles.navItem} ${activeSideItem === "store" ? styles.active : ""}`}
          >
            <BiStore size={24} />
            <span>Magazin</span>
          </a>
          <a 
            href="#" 
            className={`${styles.navItem} ${activeSideItem === "library" ? styles.active : ""}`}
            onClick={() => handleNavigation("browse", "library")}
          >
            <VscLibrary size={24} />
            <span>Bibliotecă</span>
          </a>
          <a 
            href="#" 
            className={`${styles.navItem} ${activeSideItem === "contact" ? styles.active : ""}`}
            onClick={() => handleNavigation("contact", "contact")}
          >
            <RiContactsLine size={24} />
            <span>Contact</span>
          </a>
        </nav>
      </aside>

      {/* Conținutul principal */}
      <main className={styles.mainContent}>
        <div className={styles.topNav}>
          <div className={styles.navButtons}>
            <button 
              className={`${styles.navButton} ${activeTab === "discover" ? styles.active : ""}`}
              onClick={() => handleNavigation("discover", "home")}
            >
              Descoperă
            </button>
            <button 
              className={`${styles.navButton} ${activeTab === "browse" ? styles.active : ""}`}
              onClick={() => handleNavigation("browse", activeSideItem === "home" ? "library" : activeSideItem)}
            >
              Răsfoiește
            </button>
            <button 
              className={`${styles.navButton} ${activeTab === "contact" ? styles.active : ""}`}
              onClick={() => handleNavigation("contact", "contact")}
            >
              Contact
            </button>
          </div>
        </div>
        
        {activeTab === "discover" && (
          <div className={styles.discoverContent}>
            <div className={styles.gradientBg}></div>
            <h1>Soluții Web <span className={styles.highlight}>Personalizate</span></h1>
            <p className={styles.introText}>
              Specializat în dezvoltarea de soluții web moderne și eficiente, 
              ofer servicii complete de creare și implementare pentru platforme digitale de ultimă generație.
            </p>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <AiOutlineCode />
                </div>
                <h3>Aplicații Web</h3>
                <p>Simple și intuitive, construite cu tehnologii moderne</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <BsPersonVcard />
                </div>
                <h3>Portofolii Digitale</h3>
                <p>Design profesional pentru prezentarea proiectelor tale</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <RiPagesLine />
                </div>
                <h3>Site-uri de Prezentare</h3>
                <p>Soluții elegante pentru afacerea ta</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <TbTargetArrow />
                </div>
                <h3>Landing Pages</h3>
                <p>Optimizate pentru conversie și rezultate</p>
              </div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.contactButton} onClick={() => handleNavigation("contact", "contact")}> 
                Contactează-mă
              </button>
              <button 
                className={styles.portfolioButton}
                onClick={() => handleNavigation("browse", activeSideItem === "home" ? "library" : activeSideItem)}
              >
                Portofoliu
              </button>
            </div>

            <motion.div 
              ref={techRef}
              initial={{ opacity: 0, y: 20 }}
              animate={techInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={styles.techSection}
            >
              <h2>Tehnologii</h2>
              <p className={styles.techIntro}>Tehnologiile mele principale</p>
              <div className={styles.techGrid}>
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={techInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={styles.techItem}
                  >
                    <div className={styles.techIcon}>
                      <tech.icon size={32} />
                    </div>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={styles.statsSection}
            >
              <h2>Cifre & Impact</h2>
              <div className={`${styles.statsGrid} ${statsInView ? styles.visible : ''}`}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={styles.statItem}
                  >
                    <div className={styles.statNumber}>
                      {statsInView && (
                        <CountUp 
                          end={stat.number} 
                          duration={2.5} 
                          suffix={stat.symbol}
                          start={0}
                        />
                      )}
                    </div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              ref={ctaRef}
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={styles.ctaSection}
            >
              <h2>Hai să colaborăm!</h2>
              <p>Dacă ai ajuns până aici, înseamnă că ești interesat. Hai să lucrăm împreună!</p>
              <motion.button 
                className={styles.ctaButton}
                onClick={() => handleNavigation("contact", "contact")}
              >
                Contactează-mă
              </motion.button>
            </motion.div>
          </div>
        )}

        {activeTab === "browse" && (
          <div className={styles.browseContent}>
            <div className={styles.featuredSlider}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className={styles.swiper}
              >
                {featuredProjects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className={styles.featuredSlide}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className={styles.slideImage}
                      />
                      <div className={styles.slideContent}>
                        <h2>{project.title}</h2>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className={styles.projectsGrid}>
              {projectGallery.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      className={styles.projectImg}
                    />
                  </div>
                  <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
              {/* Rectangle for more projects */}
              <div className={styles.moreProjectsBox}>
                <p>Inspirația nu se oprește aici. Fiecare idee are propria poveste în spate – hai să o construim împreună pe a ta.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className={styles.contactContent}>
            <div className={styles.gradientBg}></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.contactHeader}
            >
              <h1>Hai să <span className={styles.highlight}>Colaborăm</span></h1>
              <p className={styles.contactIntro}>
                Sunt aici să transformăm ideile tale în realitate digitală. 
                Contactează-mă pentru orice întrebare sau proiect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.contactContainer}
            >
              <div className={styles.contactInfoSection}>
                <h2>Informații de Contact</h2>
                <p className={styles.socialIntro}>
                  Pentru orice întrebare sau colaborare, mă poți contacta direct folosind datele de mai jos.
                </p>
                <div className={styles.contactCards}>
                  {contactInfo.map((contact) => (
                    <a key={contact.id} href={contact.link} className={styles.contactCard}>
                      <div className={styles.contactIcon} style={{ backgroundColor: contact.color }}>
                        <contact.icon size={24} />
                      </div>
                      <div className={styles.contactDetails}>
                        <h3>{contact.label}</h3>
                        <p>{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.socialSection}>
                <h2>Social Media</h2>
                <p className={styles.socialIntro}>
                  Urmărește-mă pe rețelele sociale pentru a vedea ultimele proiecte și actualizări.
                </p>
                <div className={styles.contactCards}>
                  {socialLinks.map((social) => (
                    <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                      <div className={styles.contactIcon} style={{ backgroundColor: social.color }}>
                        <social.icon size={24} />
                      </div>
                      <div className={styles.contactDetails}>
                        <h3>{social.name}</h3>
                        <p>{social.url.replace('https://', '')}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={styles.contactCTA}
            >
              <h2>Gata să începem?</h2>
              <p>
                Dacă ai un proiect în minte sau vrei să discutăm despre colaborări, 
                nu ezita să mă contactezi. Răspund în maxim 24 de ore!
              </p>
              <button 
                className={styles.ctaButton}
                onClick={() => window.location.href = 'mailto:contact@csweb.ro'}
              >
                Trimite un mesaj
              </button>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}
