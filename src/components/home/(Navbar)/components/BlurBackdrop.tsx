import { motion } from "framer-motion"

export default function BlurBackdrop() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[69px] 3xl:top-[86px] w-screen h-screen bg-black/10 backdrop-blur-md z-40 pointer-events-none"
        />
    )
}
