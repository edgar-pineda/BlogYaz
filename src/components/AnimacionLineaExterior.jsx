import { motion } from "motion/react";

const AnimacionLineaExterior = ({StrockeColor, hover, duration = 4, rx = 100}) => {
    return(
    <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
    >
        <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx={rx}
            animate={{ pathLength: hover ? 1 : 0 }}
            stroke={StrockeColor}
            strokeWidth="4"
            fill="none"
            strokeDasharray="8, 4"
            transition={{ duration: duration, ease: "easeInOut" }}
        />
    </svg>
    )
}

export default AnimacionLineaExterior;