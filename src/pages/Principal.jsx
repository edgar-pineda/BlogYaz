import { React, useEffect, useState, useRef } from "react"
import Particles from '../components/BGReactBits/Particles';
import Carrousel from "../components/Carrousel"
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import PageTransition from "../assets/animations/divTransition";
import { animate } from "framer-motion";
import NavItem from "../components/NavItem";
import TextType from "../components/TextType"

const Principal = () => {
    const [secuencia, setSecuencia] = useState(0);
    
    return(
        <PageTransition className='relative min-h-screen w-screen'>
            <Particles
                speed="0.1"
                className="absolute inset-0 bg-black flex min-w-screen min-h-screen justify-center items-center" 
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} 
            />

            <div className="relative z-10 flex min-h-screen w-screen flex-col items-center px-6 py-10 gap-3">
                
                {secuencia >= 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-2xl text-center text-white"
                    >
                        <TextType 
                            onComplete={() => setSecuencia(1)} 
                            className="text-2xl text-center text-white"
                        >
                            Feliz Cumpleaños, Negrita
                        </TextType>
                    </motion.div>
                )}

                {secuencia >= 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="min-w-screen min-h-screen relative z-10"
                    >
                        <svg
                            className="absolute top-0 left-0 w-full min-h-full pointer-events-none z-0 px-10"
                            viewBox="0 0 441 4320"
                            preserveAspectRatio="none"
                            fill="none"
                        >
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                strokeDasharray="8, 4"
                                transition={{ duration: 10, ease: "easeInOut" }}
                                d="M0.5 0 L0.5 245.0 C0.5 275.0 15.5 275.0 15.5 275.0 L425.5 275 C440.5 275 440.5 275 440.5 290.0 L440.5 535.0 C440.5 565.0 425.5 565.0 425.5 565.0 L15.5 565 C0.5 565 0.5 565 0.5 580.0 L0.5 825.0 C0.5 855.0 15.5 855.0 15.5 855.0 L425.5 855 C440.5 855 440.5 855 440.5 870.0 L440.5 1115.0 C440.5 1145.0 425.5 1145.0 425.5 1145.0 L15.5 1145 C0.5 1145 0.5 1145 0.5 1160.0 L0.5 1405.0 C0.5 1435.0 15.5 1435.0 15.5 1435.0 L425.5 1435 C440.5 1435 440.5 1435 440.5 1450.0 L440.5 1695.0 C440.5 1725.0 425.5 1725.0 425.5 1725.0 L15.5 1725 C0.5 1725 0.5 1725 0.5 1740.0 L0.5 1985.0 C0.5 2015.0 15.5 2015.0 15.5 2015.0 L425.5 2015 C440.5 2015 440.5 2015 440.5 2030.0 L440.5 2275.0 C440.5 2305.0 425.5 2305.0 425.5 2305.0 L15.5 2305 C0.5 2305 0.5 2305 0.5 2320.0 L0.5 2565.0 C0.5 2595.0 15.5 2595.0 15.5 2595.0 L425.5 2595 C440.5 2595 440.5 2595 440.5 2610.0 L440.5 2855.0 C440.5 2885.0 425.5 2885.0 425.5 2885.0 L15.5 2885 C0.5 2885 0.5 2885 0.5 2900.0 L0.5 3145.0 C0.5 3175.0 15.5 3175.0 15.5 3175.0 L425.5 3175 C440.5 3175 440.5 3175 440.5 3190.0 L440.5 3435.0 C440.5 3465.0 425.5 3465.0 425.5 3465.0 L15.5 3465 C0.5 3465 0.5 3465 0.5 3480.0 L0.5 3725.0 C0.5 3755.0 15.5 3755.0 15.5 3755.0 L425.5 3755 C440.5 3755 440.5 3755 440.5 3770.0 L440.5 4015.0 C440.5 4045.0 425.5 4045.0 425.5 4045.0 L15.5 4045 C0.5 4045 0.5 4045 0.5 4060.0 L0.5 4320.0"
                                stroke="white"
                                strokeWidth="4"
                            />
                        </svg>

                        {/*Div con las tarjetas de los mensajes*/}
                        <div className="relative z-10 px-5 py-15 flex flex-col gap-10">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
                                className="w-2/3 bg-blue-500/90 flex flex-col rounded-xl text-white"
                            >
                                <img src="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1784132632/ItadoriYuuji_Happy_birthday_t2okzh.jpg" className="aspect-square h-full rounded-t-xl border-0" />
                                <TextType speedTyping={50} className="h-full w-full flex items-center justify-center p-3 text-sm">
                                    Espero que te guste este regalo, no pude agregarle más cosas debido a expo, pero quería dejarte un pequeño obsequio especial que no se compra.
                                </TextType>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 2.1 }}
                                className="w-2/3 bg-blue-500/90 flex flex-col rounded-xl text-white self-end"
                            >
                                <img src="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1784322470/215258057236336430_tzalwp.jpg" className="aspect-square h-full rounded-t-xl border-0 object-cover" />
                                <TextType speedTyping={50} className="h-full w-full flex items-center justify-center p-3 text-sm">
                                    Eres la persona más importante en mi vida, con quien más me divierto. Quien más me entiende y conoce.
                                </TextType>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 3.3 }}
                                className="w-full bg-blue-500/90 flex flex-col rounded-xl text-white self-center"
                            >
                                <TextType speedTyping={50} className="h-full w-full flex items-center justify-center p-3 text-sm">
                                    Ultimas obsesiones:
                                </TextType>
                                <div className="w-full px-5 flex flex-col py-3 gap-2">
                                    <motion.iframe
                                        initial={{ opacity: 0, x: -90 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                                        data-testid="embed-iframe" className="rounded-2xl" src="https://open.spotify.com/embed/track/6fl4Gu0lJm5hc8FM5JzCZD?utm_source=generator&theme=0&si=2c4a3c5ebc8048af" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                                    ></motion.iframe>
                                    <motion.iframe
                                        initial={{ opacity: 0, x: -90 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                                        data-testid="embed-iframe" className="rounded-2xl" src="https://open.spotify.com/embed/track/2KQIWXg1oWdkbE04CqcE4E?utm_source=generator&si=e2f5249bc0c34455" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                                    ></motion.iframe>
                                    <motion.iframe
                                        initial={{ opacity: 0, x: -90 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
                                        data-testid="embed-iframe" className="rounded-2xl" src="https://open.spotify.com/embed/track/3UIEaJs7OfXpcFSoQhqNC0?utm_source=generator&si=6bc26f6ec5fb43ae" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                                    ></motion.iframe>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 5 }}
                                className="w-full bg-blue-500/90 flex flex-row rounded-xl text-white self-center"
                            >
                                <TextType speedTyping={50} className="h-full w-full flex items-center justify-center p-3 text-sm">
                                    Ya te he dicho mil veces y de mil formas diferentes lo mucho que te quiero, pero quiero contarte algo que he estado pensando. Ultimamente me he puesto a pensar en como una roca, un animal, cualquier cosa, por más pequeña que sea, puede alterar el rumbo de todo y de todos
                                </TextType>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 6.5 }}
                                className="w-2/3 bg-blue-500/90 flex flex-col rounded-xl text-white self-end"
                            >
                                <img src="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1784323065/Gojo_Satoru_Geto_Suguru_y2wwvt.jpg" className="aspect-square h-full rounded-t-xl border-0 object-cover" />
                                <TextType speedTyping={50} className="h-full w-full flex items-center justify-center p-3 text-sm">
                                    El hecho de haberte encontrado entre ese mar de probabilidades y de caos es algo que no puedo explicar y que agradezco a diario. No creo que sea coincidencia, que la persona que más me entiende, con quien más coincido, solo haya aparecido por suerte o casualidad.
                                </TextType>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 7 }}
                                className="w-2/3 bg-blue-500/90 flex flex-col rounded-xl text-white self-start"
                            >
                                <img src="https://res.cloudinary.com/dvtk6ky3t/image/upload/v1784323614/42080577764816279_od74le.jpg" className="aspect-square h-full rounded-t-xl border-0 object-cover" />
                                <TextType speedTyping={50} className="h-full w-full flex items-center justify-center p-3 text-sm">
                                    Hemos hablado de ir a Japon juntos, de viajar y de en 10, 20, 30, 50 años, seguir siendo amigos. Pero quiero que sepas que ese plan o comentario sin significado, es algo que de verdad atesoro. Quiero seguir a tu lado y reir más, llorar más y no volver a sentirme solo porque sé que tú estás ahi.
                                </TextType>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 9.5 }}
                                className="w-full bg-blue-500/90 flex flex-row rounded-xl text-white self-center"
                            >
                                <TextType speedTyping={50} className="h-full w-full flex items-center justify-center p-3 text-sm">
                                    Lo unico que quiero decir es que quiero celebrar más cumpleaños contigo, no quiero que nos alejemos, aunque pase cualquier cosa. Disfruta tu día, espero que haya empezado con una gran sonrisa y que siga con muchas más. TE QUIERO MUCHO
                                </TextType>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                )}
            </div>
        </PageTransition>
    )
}

export default Principal;