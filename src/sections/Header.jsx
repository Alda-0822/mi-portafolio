
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Detectar scroll para cambiar tamaño del header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar sección activa automáticamente con Intersection Observer
  useEffect(() => {
    const sections = ['hero', 'about', 'technologies', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -70% 0px', // Se activa cuando la sección está en el 20% superior
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas las secciones
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = isScrolled ? 80 : 120;
      const offsetTop = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      // No establecer manualmente activeSection, dejar que Intersection Observer lo maneje
    }
  };

  // Items del menú
  const menuItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'technologies', label: 'Tecnologías' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6 md:py-8'
        }`}>
          
          {/* Logo/Nombre */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className={`transition-all duration-300 ${
              isScrolled ? 'w-8 h-8' : 'w-10 h-10 md:w-12 md:h-12'
            } bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center`}>
              <span className={`font-bold text-white transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base md:text-lg'
              }`}>
                AG
              </span>
            </div>
            <h1 className={`font-bold text-white transition-all duration-300 ${
              isScrolled ? 'text-lg' : 'text-xl md:text-2xl'
            }`}>
              Aldahir Galicia
            </h1>
          </motion.div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                } ${isScrolled ? 'text-sm' : 'text-base'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Botón de menú móvil */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Toggle mobile menu (implementar si necesitas)
              console.log('Toggle mobile menu');
            }}
          >
            <svg className={`transition-all duration-300 ${
              isScrolled ? 'w-5 h-5' : 'w-6 h-6'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>

     
    </motion.header>
  );
}