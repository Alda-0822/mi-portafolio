import { motion } from "framer-motion";
import CarouselFront from "../components/CarouselFront.jsx";
import CarouselBack from "../components/CarouselBack.jsx";


export default function Carousel(){
    return(

        <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-10">
            <div className="text-center mb-8 lg:mb-12">
                <h2 className="ttext-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Tecnologías</h2>
                <div className="flex flex-col gap-8">
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                
                    <div className="lg:w-full space-y-8">
                        <CarouselFront />
                    
                        <CarouselBack />
                    </div>

            </div>    
                </div>

        </section>

    );
}