import PageTransition from "../assets/animations/divTransition";
import Particles from "../components/BGReactBits/Particles";
import { motion, AnimatePresence, scale } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import AnimacionLineaExterior from "../components/AnimacionLineaExterior";
import { useForm } from "react-hook-form";
import { createClient } from '@supabase/supabase-js';

// Configurar Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Form = ({setTab, tab}) => {
    const [enviando, setEnviando] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm({
        defaultValues: {
            nombre: "",
            mensaje: "",
        },
    });

    const onSubmit = async (data) => {
        // Validar que los campos no estén vacíos
        if (!data.nombre.trim()) {
        setError("nombre", {
            type: "manual",
            message: "Por favor ingresa tu nombre"
        });
        return;
        }

        if (!data.mensaje.trim()) {
        setError("mensaje", {
            type: "manual",
            message: "Por favor escribe un mensaje"
        });
        return;
        }

        setEnviando(true);

        try {
        // Guardar en Supabase
        const { error } = await supabase
            .from('mensajes')
            .insert([
            { 
                nombre: data.nombre.trim(), 
                mensaje: data.mensaje.trim() 
            }
            ]);

        if (error) {
            console.error('Error de Supabase:', error);
            setError("mensaje", {
            type: "manual",
            message: "Error al enviar mensaje. Intenta de nuevo."
            });
        } else {
            setTab("modal")
        }
    } catch (error) {
        console.error('Error:', error);
        setError("mensaje", {
            type: "manual",
            message: "Error al enviar mensaje. Intenta de nuevo."
        });
    } finally {
      setEnviando(false);
    }
  };

    return(
        <motion.div
            className="fixed top-1/2 left-1/2 z-60 py-10 w-9/10 flex flex-col bg-blue-950/80 rounded-2xl -translate-x-1/2 -translate-y-1/2 justify-center items-center px-5 gap-10"
            initial={{ x: -90 }}
            animate={{ x: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-center text-xl text-white">Agrega un mensaje para Yazmin. Deseandole un feliz cumpleaños </h1>
            <form 
                autoComplete="off" 
                onSubmit={handleSubmit(onSubmit)} 
                className="transicion transicion flex flex-col gap-5 items-center w-full lg:w-3/4"
            >
                <div className="transicion transicion w-full flex flex-col">
                    <label htmlFor="nombre" className="transicion transicion px-3 text-white">
                        Tu nombre:
                    </label>
                    <input 
                        id="nombre" 
                        type="text" 
                        className={`transicion transicion w-full h-9 md:h-10 lg:h-11 px-3 text-sm rounded-lg bg-white/60 shadow-lg ${
                            errors.nombre ? "border-2 border-blue-500" : ""
                        }`}
                        {...register("nombre", {
                            required: "Tu nombre es obligatorio"
                        })}
                    />
                    {errors.nombre && (
                        <span className="text-blue-300 text-xs px-3 mt-1">
                            {errors.nombre.message}
                        </span>
                    )}
                </div>

                <div className="transicion transicion w-full flex flex-col">
                    <label htmlFor="mensaje" className="transicion transicion px-3 text-white">
                        Mensaje:
                    </label>
                    <textarea 
                        id="mensaje" 
                        className={`transicion transicion w-full min-h-25 p-3 text-sm rounded-lg bg-white/60 shadow-lg overflow-hidden ${
                            errors.mensaje ? "border-2 border-blue-500" : ""
                        }`}
                        {...register("mensaje", {
                            required: "El mensaje es obligatoria"
                        })}
                    ></textarea>
                    {errors.mensaje && (
                        <span className="text-blue-300 text-xs px-3 mt-1">
                            {errors.mensaje.message}
                        </span>
                    )}
                </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.95 }}
                    className="transicion w-full h-fit flex py-2 items-center justify-center rounded-lg shadow-lg bg-white text-blue-500 text-sm lg:text-lg hover:shadow-2xs hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </motion.button>
            </form> 
        </motion.div>
    )
}

const Modal = ({setTab}) => {
    const [ hover, setHover ] = useState(false)
    
    return(
        <div className="relative w-8/10 aspect-square">
            <AnimacionLineaExterior StrockeColor="#ffffff" duration="4" hover={hover} rx="12"/>
            <motion.div
                whileInView={() => setHover(true)}
                className="fixed top-1/2 left-1/2 z-60 w-8/10 aspect-square flex flex-col bg-blue-950/80 rounded-2xl -translate-x-1/2 -translate-y-1/2 justify-center items-center px-5 gap-7 text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ x: -90 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className="w-1/3 aspect-square rounded-full bg-blue-900 flex items-center justify-center border border-white p-5"
                >
                    <motion.svg
                        whileInView={{ scale: [0, 1], color: ["#1c398e", "#ffffff"] }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></motion.svg>
                </div>
                <div className="flex flex-col gap-2 items-center w-full">
                    <h1>Ya se añadio la felicitación.</h1>
                    <h1 className="text-4xl">¡Gracias!</h1>
                </div>
                <p className="text-xs px-4 py-3 rounded-3xl relative bg-blue-200 text-black" onClick={() => setTab("form")}>
                    <AnimacionLineaExterior StrockeColor="#1c398e" duration="4" hover={hover} rx="16"/>
                    ¿Agregar otra invitación?
                </p>
            </motion.div>
        </div>
    )
}

const AgregarBlog = () => {
    const [ tab, setTab ] = useState("form");

    // Prevenir scroll en toda la página
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'unset';
            document.body.style.margin = 'unset';
            document.body.style.padding = 'unset';
        };
    }, []);

    return(
        <PageTransition className='relative h-screen overflow-hidden'>
            <div className="absolute inset-0 z-0">
                <Particles
                    speed="0.1"
                    className="w-full h-full bg-black"
                />
            </div>
            
            <div className="font-sans relative z-10 flex items-center justify-center h-screen overflow-hidden">
                <AnimatePresence>
                    { tab === "form" ? (<Form setTab={setTab} tab={tab}/>) : (<Modal setTab={setTab}/>) }
                </AnimatePresence>
            </div>
        </PageTransition>
    )
}

export default AgregarBlog;