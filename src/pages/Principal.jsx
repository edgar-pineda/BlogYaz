import { React, useEffect, useState, useRef } from "react"
import Particles from '../components/BGReactBits/Particles';
import Carrousel from "../components/Carrousel"
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"
import PageTransition from "../assets/animations/divTransition";
import { animate } from "framer-motion";
import NavItem from "../components/NavItem";

const Principal = () => {
    return(
        <PageTransition
            className='relative w-screen'>
            <Particles
            speed="0.1"
            className="absolute inset-0 bg-black flex min-w-screen min-h-screen justify-center items-center" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}  />

            <div className="relative z-10 flex h-screen w-screen flex-col-reverse items-center justify-between p-0 gap-5">
            </div>
        </PageTransition>
    )
}

export default Principal;