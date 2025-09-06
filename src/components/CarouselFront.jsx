import { motion, scale } from "framer-motion";
import { filter } from "framer-motion/m";

export default function CarouselFront(){
    const logos = [
        "../img/react.png",
        "../img/tailwind.png",
        "../img/framer-motion.svg",
        "../img/javascript.png",
        "../img/html5.png",
        "../img/css.png"
    ];

    return (
        <div className="mb-6 flex text-center">
            
           {/* Lado izquierdo: Títulos en desktop, arriba en móvil */}
                
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-2">
                            Frontend
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Interfaces de usuario
                        </p>
                    </div>
                    
                    
                
            <div className="overflow-hidden w-full py-4 relative">
                <motion.div
                className="flex gap-4 md:gap-6 lg:gap-8 w-max"
                animate={{
                    x: [0, -100 * logos.length * 7]
                }}
                transition={{
                    repeat: Infinity,
                    duration:100,
                    ease:"linear",
                    repeatType: "loop"
                }}
                >
                    {Array.from({ length: 10}, (_, groupIndex) =>
                    logos.map((logo, logoIndex) =>(
                        <img
                        key={`${groupIndex}-${logoIndex}`}
                        src={logo}
                        alt={`Logo ${logoIndex}`}
                        className="h-12 md:h-16 lg:h-20 w-auto object-contain flex-shrink-0 cursor-pointer"
                        style={{
                            transition: 'transform 0.3s ease-out, filter 0.3s ease-out',
                            position: 'relative',
                        }}
                        onMouseEnter={(e) =>{
                            e.target.style.transform = 'scale(1.15) translateY(-8px)';
                            e.target.style.filter = 'brightness(1.3) drop-shadow(0 8px 16px rgba(255,255,255,0.3))';
                            e.target.style.zIndex = '10';

                        }}

                        onMouseLeave={(e) =>{
                            e.target.style.transform = 'scale(1) translateY(0px)';
                            e.target.style.filter = 'brightness(1) drop-shadow(0 0 0 transparent';
                            e.target.style.zIndex = '1';
                        }}
                                
                                             
                        
                        />
                    ))
                    )}
                </motion.div>
             </div>       
        </div>

    );
}