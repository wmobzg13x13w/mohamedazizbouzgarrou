import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center'>
      {/* Hero Section */}
      <section className='py-20 text-center'>
        <h1 className='text-3xl md:text-5xl font-bold mb-6'>
          Cybersecurity Engineering Student & MERN Stack Developer
        </h1>
        <p className='text-text-secondary text-xl mb-8'>
          Securing the digital world, one line of code at a time
        </p>
        <Link to='/contact' className='btn-primary'>
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
