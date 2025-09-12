import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Certificates(){
    const [selectedCertificate , setSelectedCertificate] = useState(null);

    const certificados = [
        {
            id: 1,
            title: "Programación con JavaScript",
            institucion: "ALURA Latam / Oracle" ,
            date: "2025", 
            image: "/certificates/javascript.jpg",
            description: "Certificado de programación con JavaScipt",
            skills: []
        },
        {
            id: 2,
            title: "Curso de HTML y CSS",
            institucion: "ALURA Latam / Oracle" ,
            date: "2025", 
            image: "/certificates/html-css.jpg",
            description: "HTML y CSS: Clases, flexbox y tags",
            skills: []
        },
        {
            id: 3,
            title: "GIT y GITHUB",
            institucion: "ALURA Latam / Oracle" ,
            date: "2025", 
            image: "/certificates/git-github.jpg",
            description: "Repositorio, commit y control de versiones",
            skills: []
        },
        {
            id: 4,
            title: "Programa Back-end",
            institucion: "ALURA Latam / Oracle" ,
            date: "2025", 
            image: "/certificates/back-end.jpg",
            description: "",
            skills: []
        },
        {
            id: 5,
            title: "Java POO",
            institucion: "ALURA Latam / Oracle" ,
            date: "2025", 
            image: "/certificates/java-poo.jpg",
            description: "Curso Java orientado a objetos",
            skills: []
        },
        {
            id: 6,
            title: "API Java",
            institucion: "ALURA Latam / Oracle" ,
            date: "2025", 
            image: "/certificates/api.jpg",
            description: "Desarrollo de API Rest en Java",
            skills: []
        },
        {
            id: 7,
            title: "Framework Spring",
            institucion: "ALURA Latam / Oracle" ,
            date: "2025", 
            image: "/certificates/spring.jpg",
            description: "Curso de Spring Framework",
            skills: []
        }
    ];
     //desactivar scroll al abrir imagen
    const openModal = (certificate) => {
        setSelectedCertificate(certificate);

        document.body.style.overflow = 'hidden';
    };
    //activar scroll al cerrar imagen
    const closeModal = () => {
        setSelectedCertificate(null);
        document.body.style.overflow ='unset'
    };
    //cerrar imagen con 'esc'
    useState(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-10">
      {/* Título principal */}
      <div className="text-center mb-8 lg:mb-12">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🏆 Certificados y Logros
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Estas certificaciones representan mi compromiso continuo con el aprendizaje 
          y la mejora de mis habilidades técnicas.
        </motion.p>
      </div>

      {/* Cuadrícula de certificados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {certificados.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden hover:bg-white/15 cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02, 
                        transition: { duration: 0.2, ease: 'easeOut'} }}
            onClick={() => openModal(certificate)}
            style={{
              transition: 'background-color 0.1s ease-out'
            }}
          >
            {/* Imagen del certificado */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
               
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Botón de ampliar */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  
                </div>
              </div>
            </div>

            {/* Información del certificado */}
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {certificate.title}
              </h3>
              
              <div className="flex items-center text-gray-300 text-sm mb-3">
                <span className="font-medium">{certificate.institution}</span>
                <span className="mx-2">•</span>
                <span>{certificate.date}</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {certificate.description}
              </p>
              
              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2">
                {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
                {certificate.skills.length > 3 && (
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">
                    +{certificate.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal para mostrar certificado en grande */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Cerrar al hacer click en el fondo
          >
            {/* Fondo oscuro */}
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            
            {/* Contenido del modal */}
            <motion.div
              className="relative z-10 max-w-4xl max-h-[90vh] overflow-hidden rounded-xl bg-gray-900 border border-white/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevenir cierre al hacer click en la imagen
            >
              {/* Botón de cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Imagen grande */}
                <div className="md:w-2/3">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-64 md:h-96 lg:h-[500px] object-contain bg-white/5"
                  />
                </div>

                {/* Información detallada */}
                <div className="md:w-1/3 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {selectedCertificate.title}
                  </h3>
                  
                  <div className="mb-6">
                    <p className="text-blue-400 font-semibold text-lg mb-1">
                      {selectedCertificate.institution}
                    </p>
                    <p className="text-gray-400">
                      {selectedCertificate.date}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedCertificate.description}
                  </p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Habilidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}