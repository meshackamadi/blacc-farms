import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface PrimaryButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    icon?: ReactNode;
}

export const PrimaryButton = ({ children, icon, ...props }: PrimaryButtonProps) => {
    return (
        <motion.button
            type="button"
            whileHover={{ scale: 1.05, backgroundColor: "#1f5233" }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-800 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 cursor-pointer"
            {...props}
        >
            {children}
            {icon && <span className="text-sm">{icon}</span>}
        </motion.button>
    );
};