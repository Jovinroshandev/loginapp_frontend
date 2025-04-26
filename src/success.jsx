import { motion } from "framer-motion";

export default function Success() {
    return (
        <div className="bg-[#278bb0] h-screen">
            <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-4 bg-green-100 text-center rounded-b-xl"
            >
                <p className="font-bold md:text-2xl text-green-800">Login Successfully</p>
                <h1 className="text-green-700 mt-2 font-medium">Welcome Back to Our Summer Camp</h1>
            </motion.div>

        </div>
    );
}
