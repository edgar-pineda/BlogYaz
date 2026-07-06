import { React, useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"
import { animate } from "framer-motion";

const LinkHome = () => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <motion.div
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, x: 10 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-4 left-4 z-40 h-15 w-15 flex items-center justify-center"
        >
            <motion.div
                animate={{
                    rotate: isHovered ? 360 : 0,
                    backgroundColor: isHovered ? "#193cb8" : "#162456",
                }}
                transition={{ duration: 1 }}
            className="Returnpolygon w-14 absolute z-1"
            ></motion.div>
            <Link
            className="flex justify-center text-center items-center text-2xl relative z-10 text-amber-50 h-28 w-28"
            to="/">
                Return
            </Link>
        </motion.div>
    )
}

export default LinkHome