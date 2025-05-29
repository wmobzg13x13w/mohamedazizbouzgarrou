import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#projects") {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const projects = [
    {
      id: 7,
      title: "Admin Dashboard for Document, Employee, and Expense Management",
      description:
        "A comprehensive admin dashboard designed to manage documents, employees, and expenses for an organization. Built with the MERN stack, this platform provides an easy-to-use interface for admins to organize documents, track employee details, and monitor company expenses in real-time.",
      tags: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Document Management",
        "Employee Management",
        "TailwindCss",
      ],
    },
    {
      id: 6,
      title: "Penetration Testing & Vulnerability Assessment Project",
      description:
        "A security assessment project utilizing Nmap, Dirb, Greenbone, and OpenVAS to identify vulnerabilities in a target network. The project focuses on network scanning, directory brute-forcing, and vulnerability management to enhance security posture.",
      tags: [
        "Nmap",
        "Dirb",
        "Greenbone",
        "OpenVAS",
        "Network Security",
        "Vulnerability Assessment",
      ],
    },
    {
      id: 1,
      title: "SNMP Monitoring Platform",
      description:
        "A comprehensive network monitoring solution integrating React, Express, and Zabbix for real-time SNMP data collection, visualization, and alerting. Features include device discovery, performance metrics tracking, and customizable dashboards for network administrators.",
      tags: [
        "React",
        "Express.js",
        "Node.js",
        "SNMP",
        "Zabbix",
        "Network Monitoring",
      ],
    },
    {
      id: 2,
      title: "Quiz Exam System",
      description:
        "A secure examination platform powered by Express.js where professors create quizzes, students use vouchers for randomized tests, and results are automatically scored and stored in MongoDB.",
      tags: ["Express.js", "MongoDB", "Authentication", "Node.js", "Testing"],
    },
    {
      id: 3,
      title: "Grocery Store Web App",
      description:
        "A full-featured MERN stack e-commerce platform featuring product management, shopping cart functionality, and an administrative panel for order processing and inventory control.",
      tags: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "E-commerce",
        "TailwindCss",
      ],
    },
    {
      id: 4,
      title: "Repair Service Job Management Dashboard",
      description:
        "A web-based dashboard built with MERN stack that streamlines repair service operations, featuring appointment scheduling, job tracking, role-based access control, and real-time status updates for technicians and administrators.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Authentication"],
    },
    {
      id: 5,
      title: "Car Rental Web App",
      description:
        "A modern car rental platform built with the MERN stack, featuring real-time vehicle availability, booking management, user authentication, and an intuitive admin dashboard for fleet management and reservation tracking.",
      tags: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Authentication",
        "TailwindCss",
      ],
    },
    {
      id: 7,
      title: "Call Center Contact Scraper",
      description:
        "A Python-based web scraping project to extract contact information (names, emails, phone numbers) from multiple websites for call center databases. Utilizes BeautifulSoup4, Requests, and Pandas for data parsing, cleansing, and CSV export.",
      tags: [
        "Python",
        "Web Scraping",
        "BeautifulSoup4",
        "Pandas",
        "Requests",
        "Data Collection",
      ],
    },
  ];

  return (
    <section className='py-16' id='projects'>
      <h2 className='section-title'>Featured Projects</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <div key={project.id} className='card'>
            <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
            <p className='text-text-secondary mb-4'>{project.description}</p>
            <div className='flex flex-wrap gap-2'>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className='bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full text-sm'>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
