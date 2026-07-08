import PageTransition from "../assets/animations/divTransition";
import Particles from "../components/BGReactBits/Particles";
import { motion, AnimatePresence, scale } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import AnimacionLineaExterior from "../components/AnimacionLineaExterior";

const Blog = () => {
    return(
        <PageTransition className='relative max-h-screen'>
            <div className="absolute inset-0 z-0">
                <Particles
                    speed="0.1"
                    className="w-full h-full bg-black"
                />
            </div>
            
            <div className="font-sans relative z-10 flex items-center justify-center min-h-screen">
            </div>
        </PageTransition>
    )
}

export default Blog;