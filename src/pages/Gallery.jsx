import { React, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from "../assets/animations/divTransition"
import Particles from "../components/BGReactBits/Particles"
import MagicBento from "../components/MagicBento"
import fs from 'node:fs/promises';
import path from 'node:path';
const carpeta = 'blogYaz/src/assets/Photos';

const archivos = import.meta.glob('../assets/Photos/*.{png,jpg,jpeg,gif,mp4,webm}', {
  eager: true,
  import: 'default'
});
const FotosURL = Object.values(archivos);

const textosPersonalizados = [
  "Eres una persona increible que siempre me hace reir aunque me sienta mal o cansado",
  "No sabes como aprecio cada segundo juntos, porque siento que nos entendemos demasiado",
  "Quiero que cumplas todas tus metas y sueños y quiero que siempre soñes en grande porque eres capaz de muchas cosas",
  "Deseo llegar a ir a otros paises juntos, poder conocer japon, argentina y brasil",
  "Eres una gran amiga, nunca lo dudes, porque sé que lo haces, porque siempre te vere como la mejor amistad que jamas podre haber pedido",
  "Puede que peleemos, o discutamos, no debemos estar de acuerdo en todo, pero siempre quiero que respetemos la opinión del otro",
  "No quiero que tengas filtros, o temas decir algo, nunca te juzgare ni me alejare por algo que digas",
  "Puedes ser imprudente, graciosa, puedes ser tú misma. Yo a esa Yazmin quiero conocer mejor que a nadie",
  "Eres amable, empatica y gentil. Tratas a todas las personas por igual y nunca dejas a nadie fuera",
  "Nunca nos alejemos, nunca dejemos que una pelea nos aleje, quiero que siempre estemos juntos, no quiero que nunca nos distanciemos",
  "Sé que las amistades no deben tener contacto diario para durar, y no creo que nuestra amistad sea fragil o algo, pero no quiero que un día se haga normal que no hablemos, por eso me preocupo cuando no hablamos",
  "He visto como las amigas de mi hermana terminan criticandola y hablando mal de ellas a sus espaldas, y no quiero que nos pase lo mismo",
  "Somos los más fuertes y no quiero que acabemos como ellos. Quiero que estemos juntos y bien siempre"
];

const cardData = FotosURL.map((url, index) => ({
  url: url,
  text: textosPersonalizados[index] || "Sin descripción" // fallback por si falta alguno
}));

function Gallery() {
    const [modalHidden, setModalHidden] = useState(true);
    const [selectedCard, setSelectedCard] = useState(null);

    const ModalOpen = (index) => {
        setSelectedCard(cardData[index]);
        setModalHidden(false);
    }

    return(
        <PageTransition className='relative w-screen z-10 text-white'>
            <Particles
            speed="0.1"
            className="absolute inset-0 bg-black flex flex-row min-w-screen min-h-screen justify-center items-center" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}  />

            <div className="relative z-10 flex min-h-screen w-screen flex-col py-10 items-center justify-between"
            style={modalHidden ? {filter: "none"} : { filter: 'blur(3px)' }}>
                <h1 className="text-2xl">Coleccion de fotos</h1>
                <motion.h2
                    animate={{scale: [0, 1]}}
                    transition={{duration: 1, delay: 0.2}}
                >
                    Presiona cada foto para ver mas
                </motion.h2>
                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableBorderGlow={true}
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="25, 60, 184"
                    cardData={cardData}
                    onclick={ModalOpen}
                    disableAnimations={modalHidden? false : true}/>
            </div>

            <AnimatePresence>
                {!modalHidden && (
                    <motion.div
                        className="fixed top-1/2 left-1/2 z-60 h-9/10 w-9/10 flex flex-col bg-blue-950/80 rounded-2xl -translate-x-1/2 -translate-y-1/2 "
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="fixed z-20 right-3 top-3">
                            <motion.button
                                onClick={() => setModalHidden(true)}
                                className="w-12 h-12 bg-blue-600 Closepolygon"
                                whileHover={{ scale: 1.1 }}
                            >
                                Close
                            </motion.button>
                        </div>
                        <div className="w-full h-full flex flex-col gap-6 justify-between ">
                            <img src={selectedCard?.url} className="rounded-t-2xl w-full h-full object-cover max-h-2/3 object-top"/>
                            <div className="flex justify-end items-end text-xl px-4 pb-2 max-h-1/3">
                                <h2>{selectedCard?.text}</h2>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageTransition>
    )
}

export default Gallery;