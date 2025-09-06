import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Carousel from "./sections/Carousel.jsx";
import Proyectos from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";


function App() {
  return (
    <div className="min-h-screen"
        style={{
          backgroundImage: "url('/img/fondo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}>
      <Header />
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 min-h-screen">
          
          <section id="hero" className="pt-20 md:pt-24">
          <Hero />
          </section>
          <div className="space-y-4 md:space-y-8">
            <section id="about">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <AboutMe />
            </div>
            </section>
            <section id="technologies">
              <Carousel />
            </section>
            <section id="projects">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <Proyectos />
            </div>
            </section>
          </div>  
          <section id="contact">      
            <Contact />      
          </section>
      </div>
    </div>
    
  );
}

export default App;



