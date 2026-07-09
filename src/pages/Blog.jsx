import PageTransition from "../assets/animations/divTransition";
import Particles from "../components/BGReactBits/Particles";
import { motion, AnimatePresence, scale } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import AnimacionLineaExterior from "../components/AnimacionLineaExterior";
import TextType from "../components/TextType"
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Blog = () => {
    const [ Mensaje, setMensaje ] = useState(true);
    const [ Contador, setContador ] = useState(false);
    const [ hover, setHover ] = useState(false);
    const [ timeOutContador, setTimeOutContador ] = useState(500);
    const [ contadorNumber, setContadorNumber ] = useState(0);
    const [ blog, setBlog ] = useState(false);
    const [error, setError] = useState(null);
    const [mensajes, setMensajes] = useState([]);

    const ContadorSwitch = () => {
        setTimeout(() => {
            setContador(true);
            setMensaje(false);
        }, 3000);
    }

    const BlogSwitch = () => {
        setTimeout(() => {
            setContador(false);
            setBlog(true);
        }, 3000);
    }

    useEffect(() => {
        if(Contador){
            setHover(true);
            if(contadorNumber < mensajes.length){
                setTimeout(() => {
                    setContadorNumber(contadorNumber + 1 );
                    if(timeOutContador > 100){
                        setTimeOutContador(timeOutContador - 100);
                    }
                }, timeOutContador);
            }else{
                BlogSwitch();
            }
        }else{
            return;
        }
    }, [contadorNumber, Contador]);

    const traerMensajes = async () => {
        setError(null);

        try {
        const { data, error } = await supabase
            .from('mensajes')
            .select('*')
            .order('id', { ascending: false });

        if (error) throw error;

        setMensajes(data || []);
        } catch (err) {
        console.error('❌ Error:', err);
        setError(err.message);
        }
    };

    useEffect(() => {
        traerMensajes();
    }, []);

    return(
        <PageTransition className='relative max-h-screen'>
            <div className="absolute inset-0 z-0" style={{ height: '100%', minHeight: '100vh' }}>
                <Particles
                speed="0.1"
                className="w-full h-full"
                particleCount={200}
                particleSpread={8}
                />
            </div>
            
            <div className="relative z-10 flex items-center justify-center min-h-screen w-full text-white">
                <div className="flex flex-col px-10 items-center w-full">
                    { Mensaje ? (<TextType onComplete={() => ContadorSwitch()} className="text-center text-lg">En esta sección quiero que veas que hay varias personas a las que les importas. Reuní felicitaciones de todos los que te quieren y en quienes has dejado una huella significativa, por el cariño que todos te tienen ellos quisieron participar en este regalo especial. Quiero que veas que eres más importante en la vida de los démas de lo que crees...</TextType>) : null }
                    {Contador ? (
                        <div className="flex flex-col items-center justify-center gap-5">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0, rotate: 360 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="relative flex items-center justify-center h-35 w-35 rounded-full p-1 bg-blue-500/70"
                            >
                                <AnimacionLineaExterior StrockeColor="#ffffff" duration="10" hover={hover}/>
                                <h1 className="text-5xl text-white">{contadorNumber} </h1>
                            </motion.div>
                            <TextType className="px-5 text-center text-2xl">Calculando todas las felicitaciones...</TextType>
                        </div>
                        ) : null}
                    {blog ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col gap-10 w-full py-10"
                        >
                            <h1 className="text-2xl text-white text-center">Mensajes ({mensajes.length})</h1>
                            <div className="flex flex-col gap-3">
                                {mensajes.map((msg, index) => (
                                    <motion.div
                                        initial={{ x: 30 }}
                                        animate={{ x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        key={msg.id}
                                        className="bg-white/10 p-4 rounded-lg w-full gap-4 flex flex-col"
                                    >
                                        <strong className="text-pink-300 text-xl">{msg.nombre}</strong>
                                        <p className="text-white text-xl">{msg.mensaje}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : null}
                </div>
            </div>
        </PageTransition>
    )
}

export default Blog;