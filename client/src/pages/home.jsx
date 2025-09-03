import { motion } from "framer-motion";
import { FaShieldAlt, FaClock, FaRupeeSign, FaStar, FaMapMarkerAlt, FaBus } from "react-icons/fa";
import BusSearchForm from "@/components/bus-search-form";

export default function Home() {
  const popularRoutes = [
    {
      route: "Delhi → Mumbai",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    },

    {
      route: "Bangalore → Chennai", 
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    },
    {
      route: "Pune → Goa",
      image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200", 
    }
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: "100% Safe & Secure",
      description: "Your personal information and payment details are completely secure with us.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: FaClock,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your travel needs and queries.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: FaRupeeSign,
      title: "Best Price Guarantee",
      description: "Get the best deals and offers on your bus tickets with us.",
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "center"
            }}
          >
            <source src="https://www.pexels.com/download/video/18869377/" type="video/mp4" />
            <source src="https://cdn.pixabay.com/vimeo/3287147/travel-23827.mp4?width=1280" type="video/mp4" />
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <motion.div 
          className="relative container mx-auto px-4 py-16 lg:py-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Online Booking Platform
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Fast, Safe & Reliable Booking Experience
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <BusSearchForm />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-primary">Us</span>?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card text-center group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                data-testid={`feature-${index === 0 ? 'security' : index === 1 ? 'support' : 'price'}`}
              >
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Popular <span className="text-primary">City</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {popularRoutes.map((route, index) => (
              <motion.div 
                key={index}
                className="route-card group"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                data-testid={`route-card-${index}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={route.image}
                    alt={`${route.route} route`} 
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <FaMapMarkerAlt className="w-5 h-5 mb-2" />
                    <h3 className="text-lg font-semibold">{route.route}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <FaStar className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-muted-foreground">Popular Route</span>
                    </div>
                  </div>
                                    
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold">2M+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm opacity-90">Cities Covered</div>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-sm opacity-90">Daily Bookings</div>
            </motion.div>
            
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold">99%</div>
              <div className="text-sm opacity-90">Satisfaction Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
