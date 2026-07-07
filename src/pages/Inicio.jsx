import PageTransition from "../assets/animations/divTransition";
import Particles from "../components/BGReactBits/Particles";
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimacionLineaExterior from "../components/AnimacionLineaExterior";
import { useForm } from "react-hook-form";

const Inicio = () => {
    const navigate = useNavigate();
    const [isPressing, setIsPressing] = useState(false);
    const [ modal, setModal ] = useState(false)
;    const [progress, setProgress] = useState(0);
    const timerRef = useRef(null);
    const progressIntervalRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm({
        defaultValues: {
            nombre: "",
            contraseña: "",
        },
    });

    const onSubmit = async (data) => {
        if (data.nombre.trim() !== "Andrea Yazmin Montepeque Juarez") {
            setError("nombre", {
                type: "manual",
                message: "Nombre incorrecto"
            });
            return;
        }
        
        if (data.contraseña !== "12345") {
            setError("contraseña", {
                type: "manual",
                message: "Contraseña incorrecta"
            });
            return;
        }
        
        setModal(false);
        navigate("/nav");
        localStorage.setItem("isLoggedIn", true)
        console.log("¡Login exitoso!");
    };

    const startPress = (e) => {
        e.preventDefault();
        setIsPressing(true);
        setProgress(0);

        timerRef.current = setTimeout(() => {
            setModal(true);
            clearInterval(progressIntervalRef.current);
            setIsPressing(false);
            setProgress(0);
        }, 4000);
    };

    const endPress = (e) => {
        e.preventDefault();
        setIsPressing(false);
        setProgress(0);
        
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
    };

    return(
        <PageTransition className='relative max-h-screen'>
            <div className="absolute inset-0 z-0">
                <Particles
                    speed="0.1"
                    className="w-full h-full bg-black"
                />
            </div>
            
            <div onClick={() => setModal(false)} className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center gap-10">
                    <h2 className="text-white text-5xl w-2/3 text-center">¡Feliz cumpleaños, Yazmin!</h2>
                    <motion.button
                        onTouchStart={startPress}
                        onTouchEnd={endPress}
                        onTouchCancel={endPress}
                        whileTap={{ scale: 0.92 }}
                        className="h-30 w-30 bg-blue-400 relative rounded-full text-3xl text-black"
                    >
                        <AnimacionLineaExterior StrockeColor="#ffffff" hover={isPressing}/>
                        Mantener
                    </motion.button>
                </div>
            </div>
            <AnimatePresence>
                {modal && (
                    <motion.div
                        className="fixed top-1/2 left-1/2 z-60 h-5/10 w-9/10 flex flex-col bg-blue-950/80 rounded-2xl -translate-x-1/2 -translate-y-1/2 justify-center items-center px-5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <form 
                            autoComplete="off" 
                            onSubmit={handleSubmit(onSubmit)} 
                            className="transicion transicion flex flex-col gap-3 items-center w-full lg:w-3/4"
                        >
                            <div className="transicion transicion w-full flex flex-col">
                                <label htmlFor="nombre" className="transicion transicion px-3 text-white">
                                    Nombre completo:
                                </label>
                                <input 
                                    id="nombre" 
                                    type="text" 
                                    className={`transicion transicion w-full h-9 md:h-10 lg:h-11 px-3 text-sm lg:text-xl rounded-xl lg:rounded-xl bg-white/60 shadow-lg ${
                                        errors.nombre ? "border-2 border-blue-500" : ""
                                    }`}
                                    {...register("nombre", {
                                        required: "El nombre es obligatorio"
                                    })}
                                />
                                {errors.nombre && (
                                    <span className="text-blue-300 text-xs px-3 mt-1">
                                        {errors.nombre.message}
                                    </span>
                                )}
                            </div>

                            <div className="transicion transicion w-full flex flex-col">
                                <label htmlFor="contraseña" className="transicion transicion px-3 text-white">
                                    Contraseña
                                </label>
                                <input 
                                    id="contraseña" 
                                    type="password" 
                                    className={`transicion transicion w-full h-9 md:h-10 lg:h-11 px-3 text-sm lg:text-xl rounded-xl lg:rounded-xl bg-white/60 shadow-lg ${
                                        errors.contraseña ? "border-2 border-blue-500" : ""
                                    }`}
                                    {...register("contraseña", {
                                        required: "La contraseña es obligatoria"
                                    })}
                                />
                                {errors.contraseña && (
                                    <span className="text-blue-300 text-xs px-3 mt-1">
                                        {errors.contraseña.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="transicion w-full h-fit flex py-2 items-center justify-center rounded-lg shadow-lg bg-white text-blue-500 text-sm lg:text-lg hover:shadow-2xs hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Verificando..." : "Iniciar Sesión"}
                            </button>
                        </form>                       
                    </motion.div>
                )}
            </AnimatePresence>
        </PageTransition>
    )
}

export default Inicio;