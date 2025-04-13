import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import DockDemo from '../components/ui/dockDemo'; // Adjust the import path if necessary


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <DockDemo /> 
    </main>
  );
}
