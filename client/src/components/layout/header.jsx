import { motion } from "framer-motion";
import { FaBus, FaUser, FaHeadset, FaBars, FaTrain, FaHotel, FaCar } from "react-icons/fa";
import { Link } from "wouter";

export default function Header() {
  const navItems = [
   
  ];

  return (
    <motion.header 
      className="header-enhanced sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center text-2xl font-bold text-primary group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mr-3"
              >
                
              </motion.div>
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                Travel
              </span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className="nav-link flex items-center space-x-2 text-foreground hover:text-primary transition-colors group"
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              className="nav-link flex items-center space-x-2 text-foreground hover:text-primary transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-account"
            >
              <FaUser className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Account</span>
            </motion.button>
            
            <motion.button 
              className="nav-link flex items-center space-x-2 text-foreground hover:text-primary transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-help"
            >
              <FaHeadset className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Help</span>
            </motion.button>
            
            <motion.button 
              className="md:hidden text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-menu"
            >
              <FaBars className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
