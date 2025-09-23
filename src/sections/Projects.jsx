import { motion } from 'framer-motion';
import { image } from 'framer-motion/client';

export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "Amigo secreto",
            description: "Aplicación para sortear y seleccionar un nombre de los que el usuario introduzca.",
            image: "/proyectos/amigoSecreto.jpg",
            url: "https://alda-0822.github.io/reto-amigo-secreto/",
            github: "https://github.com/Alda-0822/reto-amigo-secreto",
            technologies: [
                { name: "HTML5", logo:"/img/htmlcorto.png"},
                { name: "CSS3", logo:"/img/csscorto.png"},
                { name: "JavaScript", logo:"/img/javascript.png"}
            ]
        },
        {
            id:2,
            title: "Número secreto",
            description: "Juego donde el usuario intentará advinar el número generado aleatoriamente.",
            image: "/proyectos/numeroSecreto.jpg",
            url: "https://alda-0822.github.io/juego-Secreto/",
            github: "https://github.com/Alda-0822/juego-Secreto",
            technologies: [
                { name: "HTML5", logo:"/img/htmlcorto.png"},
                { name: "CSS3", logo:"/img/csscorto.png"},
                { name: "JavaScript", logo:"/img/javascript.png"}
            ]
        }
    ]
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
          🚀 Mis Proyectos
        </motion.h2>
       {/*} <motion.p 
          className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Una colección de proyectos que he desarrollado, desde aplicaciones web 
          hasta soluciones completas de software.
        </motion.p>*/}
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            onClick={() => window.open(project.url, '_blank')}
          >
            {/* Tarjeta del proyecto */}
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-blue-400/80 transition-all duration-300 h-full">
              
              {/* Imagen de vista previa */}
              <div className="relative overflow-hidden bg-gray-800"
              style={{
                width: '100%',
                height: '200px'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { 
                    // Imagen de respaldo con color basado en el index
                    const colors = ['3b82f6', '10b981', 'f59e0b', 'ef4444', '8b5cf6', '06b6d4'];
                    const color = colors[index % colors.length];
                    e.target.src = `https://via.placeholder.com/400x225/${color}/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Botones de acción (aparecen en hover) */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                      className="p-2 bg-black/70 hover:bg-black/90 rounded-full text-white transition-colors"
                      title="Ver código"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </button>
                  )}
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.url, '_blank');
                    }}
                    className="p-2 bg-blue-600/70 hover:bg-blue-600/90 rounded-full text-white transition-colors"
                    title="Ver proyecto"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tecnologías usadas - Esquina inferior derecha */}
              <div className="absolute bottom-4 right-4 flex gap-2 flex-wrap justify-end max-w-[60%]">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="relative group/tech"
                    title={tech.name}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-8 h-8 object-contain bg-white/10 rounded-full p-1 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-colors"
                      onError={(e) => {
                        // Fallback a un icono genérico
                        e.target.src = `https://via.placeholder.com/32x32/6b7280/ffffff?text=${tech.name[0]}`;
                      }}
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                ))}
                
                {/* Indicador de más tecnologías */}
                {project.technologies.length > 4 && (
                  <div className="w-8 h-8 bg-gray-600/80 rounded-full p-1 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">
                      +{project.technologies.length - 4}
                    </span>
                  </div>
                )}
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 blur-sm"></div>
                <div className="absolute inset-[1px] rounded-xl bg-gray-800/50 backdrop-blur-sm"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mensaje para futuros proyectos */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-gray-400 text-sm">
          🔨 Más proyectos en desarrollo... ¡Mantente atento!
        </p>
      </motion.div>
    </section>
  );
}