
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar tamaño del header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar sección activa automáticamente con Intersection Observer
useEffect(() => {
  const sections = ['hero', 'about', 'technologies', 'projects', 'certificates', 'contact'];

  const handleScroll = () => {
    const scrollY = window.scrollY + 100; // Offset del header
    
    let currentSection = 'hero'; // Default

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        
        // Si estamos dentro de esta sección
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
        // O si pasamos por encima de la sección (para secciones pequeñas)
        else if (scrollY >= sectionTop) {
          currentSection = sectionId;
        }
      }
    });

    setActiveSection(currentSection);
    console.log('Sección activa:', currentSection, 'Scroll:', scrollY); // Debug
  };

  // Ejecutar inmediatamente
  handleScroll();
  
  // Ejecutar en cada scroll
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

    // Controlar scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

      // Cerrar menú móvil después de navegar
      setIsMobileMenuOpen(false);
      // No establecer manualmente activeSection, dejar que Intersection Observer lo maneje
    }
  };

    // Toggle del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Items del menú
  const menuItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'technologies', label: 'Tecnologías' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'certificates', label: 'Certificados' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <>
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
              Aldahir Galicia / 26 años
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
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors relative z-60"
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
            >
              <div className={`transition-all duration-300 ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`}>
                {!isMobileMenuOpen ? (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

     {/* Overlay del menú móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed left-0 right-0 z-50 md:hidden bg-black bg-opacity-90 border-b border-gray-700/50 ${
              isScrolled ? 'top-20' : 'top-24'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-6 py-4 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      activeSection === item.id ? 'bg-blue-400' : 'bg-gray-600'
                    }`} />
                    <span className="font-medium text-lg">{item.label}</span>
                  </div>
                </motion.button>
              ))}
              
              {/* Información adicional */}
              <div className="border-t border-gray-700/50 mt-6 pt-6">
                <div className="px-6 py-2">
                  <p className="text-gray-400 text-sm">Desarrollador Frontend</p>
                  <p className="text-blue-400 text-sm font-medium">Aldahir Galicia</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>  
  );
}