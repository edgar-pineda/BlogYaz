import { React, useEffect, useState, useRef } from "react"
import Particles from '../components/BGReactBits/Particles';
import Carrousel from "../components/Carrousel"
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"
import PageTransition from "../assets/animations/divTransition";
import { animate } from "framer-motion";
import NavItem from "../components/NavItem";

const Images = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dvtk6ky3t/image/upload/v1778727528/ni0yypfkuwjtoajwj4c6.jpg",
        navTitle: 'Start',
        to:"/start"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dvtk6ky3t/image/upload/v1778737853/descargar_j5iimx.jpg",
        navTitle: 'Gallery',
        to:"/gallery"
    }
]

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carouselKey, setCarouselKey] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setCarouselKey(prev => prev + 1);
    };

    return (
        <PageTransition className='relative w-screen min-h-screen'>
            {/* Partículas de fondo */}
            <Particles
                speed="0.1"
                className="absolute inset-0 bg-black w-full h-full"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            />

            {/* Contenido principal centrado */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full p-4">
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                    {/* Carrusel */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center justify-center w-full"
                    >
                        <Carrousel
                            key={carouselKey}
                            items={Images}
                            baseWidth={260}
                            round={true}
                            initialSlide={currentIndex}
                        />
                    </motion.div>

                    {/* Navegación */}
                    <div className="w-full">
                        <ul className="flex flex-col gap-4 items-center">
                            {Images.map((image) => (
                                <NavItem 
                                    key={image.id} 
                                    image={image} 
                                    goToSlide={goToSlide} 
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

export default Home;