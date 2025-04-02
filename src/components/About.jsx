import { Link } from "react-router-dom";

function About() {
  return (
    <div className='max-w-7xl mx-auto py-16 px-6'>
      <h1 className='section-title text-center'>About Me</h1>
      <h2 className='text-2xl text-accent text-center mb-8'>
        Mohamed Aziz Bouzgarrou
        <br />
        <span className='text-lg text-text-secondary'>
          Cybersecurity Engineer Student & MERN Stack Developer
        </span>
      </h2>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div className='relative'>
          <div className='aspect-square overflow-hidden rounded-lg shadow-xl'>
            <img
              src='/img/profile.jpg'
              alt='Profile'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-accent opacity-20 rounded-full blur-xl'></div>
        </div>

        <div className='space-y-6'>
          <p className='text-lg text-text-secondary leading-relaxed'>
            As a passionate Cybersecurity Engineer and MERN Stack Developer, I
            blend the art of secure coding with modern web development. My
            journey in tech has been driven by a deep fascination with both
            protecting digital assets and creating seamless web experiences.
          </p>

          <p className='text-lg text-text-secondary leading-relaxed'>
            With expertise in penetration testing, network security, and
            full-stack development, I bring a unique perspective to every
            project. I believe in building applications that are not only
            functional and beautiful but also inherently secure.
          </p>

          <div className='flex gap-4'>
            <Link to='/#projects' className='btn-primary'>
              View Projects
            </Link>
            <Link
              to='/contact'
              className='btn-primary bg-secondary hover:bg-accent/20'>
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className='mt-6 flex gap-4'>
            <a
              href='https://github.com/wmobzg13x13w'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-secondary hover:text-accent transition-colors'>
              <svg
                className='w-8 h-8'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <a
              href='mailto:bouzgarrouaziz14@gmail.com'
              className='text-text-secondary hover:text-accent transition-colors'>
              <svg
                className='w-8 h-8'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'
                  clipRule='evenodd'
                />
                <path
                  fillRule='evenodd'
                  d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/mohamed-aziz-bouzgarrou-750818235/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-secondary hover:text-accent transition-colors'>
              <svg
                className='w-8 h-8'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Studies and Certifications Section */}
      <div className='mt-16'>
        <h2 className='section-title text-center mb-12'>
          Studies & Certifications
        </h2>
        <div className='space-y-8'>
          <div className='card'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
              <h3 className='text-xl font-bold text-accent'>
                Cybersecurity Engineering
              </h3>
              <span className='text-text-secondary'>Present</span>
            </div>
            <p className='text-text-secondary'>
              EPI - International Multidisciplinary School - Specializing in
              Cybersecurity Engineering
            </p>
          </div>

          <div className='card'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
              <h3 className='text-xl font-bold text-accent'>
                MERN Stack Development
              </h3>
              <span className='text-text-secondary'>2023 - Present</span>
            </div>
            <p className='text-text-secondary'>
              Practical experience in full-stack development using MongoDB,
              Express, React, and Node.js. Built multiple web applications and
              RESTful APIs.
            </p>
          </div>

          <div className='card'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
              <h3 className='text-xl font-bold text-accent'>
                CCNA 1 & 2 Certification
              </h3>
              <span className='text-text-secondary'>2024</span>
            </div>
            <p className='text-text-secondary'>
              Cisco Networking Academy - Comprehensive training in network
              fundamentals, routing, switching, and network security
            </p>
          </div>

          <div className='card'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
              <h3 className='text-xl font-bold text-accent'>
                Fortinet Network Security Expert
              </h3>
              <span className='text-text-secondary'>2025</span>
            </div>
            <p className='text-text-secondary'>
              FCA (Fortinet Certified Associate) & FCP (Fortinet Certified
              Professional) - Advanced expertise in Fortinet security solutions
              and network protection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
