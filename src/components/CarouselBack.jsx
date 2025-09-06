import { motion } from "framer-motion";

export default function CarouselBack(){

    const logosB = [
        "../img/java.png",
        "../img/mysql.png",
        "../img/postgresql.png",
        "../img/spring-boot.png",
        "../img/spring-security.png",
        "../img/jwt.png",
        "../img/git.svg",
        "../img/github.png"
        
    ];

    return (
        <div className="mb-6 flex flex- text-center">

            <div className="text-center lg:text-left">
                        <h3 className="text-lg md:text-xl font-semibold text-green-400 mb-2">
                            Backend
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Lógica del servidor
                        </p>
                    </div>
            

            <div className="overflow-hidden w-full py-6 relative">
                <motion.div
                className="flex gap-4 md:gap-6 lg:gap-8 w-max"
                animate={{
                    x: [0, -100 * logosB.length * 9]
                }}
                transition={{
                    repeat: Infinity,
                    duration:160,
                    ease:"linear",
                    repeatType: "loop"
                }}
                >
                    {Array.from({ length: 10}, (_, groupIndex) =>
                    logosB.map((logo, logoIndex) =>(
                        <img
                        key={`${groupIndex}-${logoIndex}`}
                        src={logo}
                        alt={`Logo ${logoIndex}`}
                        className="h-12 md:h-16 lg:h-20 w-auto object-contain flex-shrink-0 cursor-pointer"
                                style={{
                                    transition: 'transform 0.3s ease-out, filter 0.3s ease-out',
                                    position: 'relative',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.15) translateY(-8px)';
                                    e.target.style.filter = 'brightness(1.3) drop-shadow(0 8px 16px rgba(255,255,255,0.3))';
                                    e.target.style.zIndex = '10';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1) translateY(0px)';
                                    e.target.style.filter = 'brightness(1) drop-shadow(0 0 0 transparent)';
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