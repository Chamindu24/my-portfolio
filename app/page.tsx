import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import DockDemo from '../components/ui/dockDemo'; // Adjust the import path if necessary


export default function Home() {
  return (
    <main className='bg-black'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact />
      
      <DockDemo /> 
    </main>
  );
}
