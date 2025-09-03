import { motion } from "framer-motion";
import { FaBus, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaHeart, FaShieldAlt, FaHeadset, FaAward } from "react-icons/fa";

export default function Footer() {
  const footerSections = [
    {
      title: "About",
      links: [
        { label: "About Us", href: "#" },
        { label: "Investor Relations", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact Us", href: "#" }
      ]
    },
    {
      title: "Info",
      links: [
        { label: "T&C", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Hire", href: "#" },
        { label: "Refund Policy", href: "#" }
      ]
    },
    {
      title: "Global Sites",
      links: [
        { label: "India", href: "#" },
        { label: "Singapore", href: "#" },
        { label: "Malaysia", href: "#" },
        { label: "Indonesia", href: "#" },
        { label: "Thailand", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div 
              className="flex items-center text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              
              <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
              Travel
              </span>
            </motion.div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              India's most trusted booking platform with over 10 million happy customers. 
              We're committed to providing safe, reliable, and affordable travel solutions.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 pt-2">
              <motion.div 
                className="flex items-center space-x-2 text-xs text-gray-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaShieldAlt className="w-3 h-3 text-green-400" />
                <span>Secure</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-xs text-gray-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaHeadset className="w-3 h-3 text-blue-400" />
                <span>24/7 Support</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-xs text-gray-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaAward className="w-3 h-3 text-yellow-400" />
                <span>Awarded</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm hover:underline"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links & Newsletter */}
        <motion.div 
          className="border-t border-gray-700 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <motion.button
                className="px-6 py-2 bg-primary hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-gray-300 text-sm">
              &copy; 2025 Travel. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="w-3 h-3 text-red-500" />
              </motion.div>
              <span>in India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
