import { React, useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"
import { animate } from "framer-motion";

// Componente para cada ítem del menú
    const NavItem = ({ image, goToSlide }) => {
    const [isHovered, setIsHovered] = useState(false);

    function onMouseEnter() {
        goToSlide(image.id);
        setIsHovered(true);
    }

    return (
        <div className="relative">
        {/* Capa de adelante */}
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.8, x: 0 }}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => setIsHovered(false)}
            className="relative z-10 h-10 flex items-center justify-center w-70 bg-blue-600"
            style={{ clipPath: "polygon(100% 0%, 96% 48%, 100% 100%, 7% 100%, 0 49%, 6% 0)" }}
        >
            <Link to={image.to} className="w-full z-20 items-center justify-center h-full text-4xl flex">
                {image.navTitle}
            </Link>
            <motion.video
                src="https://res.cloudinary.com/dvtk6ky3t/video/upload/v1783312577/Energia_Maldita_zrzosm.mp4"
                autoPlay
                muted
                loop
                transition={{ duration: 0.3 }}
                className="absolute object-cover top-0 left-0 z-0 flex items-center justify-center w-full h-full"
            >
            </motion.video>
        </motion.div>
        </div>
    );
    };

    export default NavItem;