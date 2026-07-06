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
        setCarouselKey(prev => prev + 1); // Forzar recreación del carrusel
    };

    return (
        <PageTransition
            className='relative w-screen'>
            <Particles
            speed="0.1"
            className="absolute inset-0 bg-black flex min-w-screen min-h-screen justify-center items-center" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}  />

            <div className="relative z-10 flex h-screen w-screen flex-col-reverse items-center justify-between p-0 gap-5">
                <div className="p-4 w-full">
                    <ul className="flex flex-col gap-5">
                        {Images.map((image) => (
                            <NavItem key={image.id} image={image} goToSlide={goToSlide} />
                        ))}
                    </ul>
                </div>
                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center justify-between" style={{ height: '100%', position: 'relative' }} >
                    <Carrousel
                        key={carouselKey}
                        items={Images}
                        baseWidth={260}
                        round={true}
                        initialSlide={currentIndex}
                    />
                </motion.div>
            </div>
        </PageTransition>
    );
}

export default Home;