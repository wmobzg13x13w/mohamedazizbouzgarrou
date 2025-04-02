import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className='min-h-screen bg-primary text-text-primary'>
        {/* Navigation */}
        <nav className='bg-secondary py-4 px-6 fixed w-full top-0 z-50'>
          <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <Link to='/' className='flex items-center'>
              <img src='/img/logo3.png' alt='Logo' className='h-12 w-auto' />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden'>
              {isMenuOpen ? (
                <XMarkIcon className='h-6 w-6' />
              ) : (
                <Bars3Icon className='h-6 w-6' />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-4'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
              <Link to='/about' className='nav-link'>
                About
              </Link>
              <Link to='/#projects' className='nav-link'>
                Projects
              </Link>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className='md:hidden mt-4'>
              <div className='flex flex-col space-y-2'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
                <Link to='/#projects' className='nav-link'>
                  Projects
                </Link>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className='container mx-auto pt-20 px-6'>
          <Routes>
            <Route
              path='/'
              element={
                <div className='max-w-7xl mx-auto flex flex-col items-center'>
                  <Home />
                  <Skills />
                  <Projects />
                </div>
              }
            />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
