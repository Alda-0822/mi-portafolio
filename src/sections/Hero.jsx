import { motion, useScroll, useTransform } from "framer-motion"; 

export default function Hero(){
  const { scrollY } = useScroll(); 

  const scale = useTransform(scrollY, [0,200], [1, 0.7]);
  const opacity = useTransform(scrollY, [0,200], [1, 0.3]);

    return(
        <section className="relative h-screen flex flex-col items-center justify-center min-h  py-8 md:py-16 lg:py-20">
              <div className="text-center px-4">  
                  <motion.h1
                    style={{ scale, opacity}}
                    className="text-6xl font-bold"
                  >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                          Bienvenido a mi Portafolio
                        </h1>
                  </motion.h1>
                  <motion.p
                  style={{ opacity }}
                  className="mt-4 text-lg text-gray-300"
                  >
                     <p className="text-base md:text-lg lg:text-xl text-gray-200">
                    Este es mi Portafolio, desarrollado con React + Tailwind + Framer Motion
                    </p>
        
                  </motion.p>
              </div>
                
        </section>


    );

}