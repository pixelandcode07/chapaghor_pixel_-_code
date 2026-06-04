import { motion } from "framer-motion"

export default function BlurBackdrop() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[50px] w-screen h-screen bg-black/10 backdrop-blur-md z-40 pointer-events-none"
        />
    )
}
