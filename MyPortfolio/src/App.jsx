import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Nav from "./components/NavBar.jsx";
import Perfil from './components/Perfil.jsx'
import Skills from './components/Skills.jsx';
import Works from "./components/Wordks.jsx";



function App() {
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <Perfil />
      <Skills />
      <Works />
      <About />
      <Contact />
    </div>

  );
}

export default App
