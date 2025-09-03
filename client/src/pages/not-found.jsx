import { motion } from "framer-motion";
import { FaBus, FaHome, FaSearch, FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="text-9xl font-black text-gray-200 select-none">404</div>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <FaBus className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          Oops! Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl text-gray-600 mb-8 leading-relaxed"
        >
          The route you're looking for seems to have taken a detour. 
          Don't worry, we'll help you get back on track!
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <Button className="btn-primary px-8 py-3 text-lg">
                <FaHome className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <Button variant="outline" className="px-8 py-3 text-lg border-2 border-gray-300 hover:border-primary">
                <FaSearch className="w-5 h-5 mr-2" />
                Search 
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <FaBus className="w-4 h-4 text-primary" />
              <span>Check our routes</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaSearch className="w-4 h-4 text-primary" />
              <span>Use the search bar</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaArrowLeft className="w-4 h-4 text-primary" />
              <span>Go back to previous page</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-red-500 rounded-full opacity-20"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-32 w-3 h-3 bg-yellow-500 rounded-full opacity-20"
          animate={{ 
            x: [0, 10, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
