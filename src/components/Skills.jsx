const Skills = () => {
  return (
    <section className='py-16'>
      <h2 className='section-title'>Technical Expertise</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='card'>
          <h3 className='text-xl font-bold mb-4'>Cybersecurity</h3>
          <ul className='space-y-2 text-text-secondary'>
            <li>Penetration Testing</li>
            <li>Network Security</li>
            <li>Security Auditing</li>
            <li>System Administration</li>
            <li>Cryptography</li>
          </ul>
        </div>
        <div className='card'>
          <h3 className='text-xl font-bold mb-4'>MERN Stack</h3>
          <ul className='space-y-2 text-text-secondary'>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
