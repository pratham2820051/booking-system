import { motion } from "framer-motion";
import { FaStar, FaWifi, FaSnowflake, FaBolt, FaBed, FaUtensils, FaMapMarkerAlt, FaClock, FaRoute } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function BusCard({ bus, onSelectSeats }) {
  const rating = bus.rating || 4.0; // Default rating if not provided

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
      case 'live tracking':
        return <FaWifi className="w-3 h-3 mr-1" />;
      case 'ac':
        return <FaSnowflake className="w-3 h-3 mr-1" />;
      case 'charging point':
        return <FaBolt className="w-3 h-3 mr-1" />;
      case 'sleeper':
        return <FaBed className="w-3 h-3 mr-1" />;
      case 'meals':
        return <FaUtensils className="w-3 h-3 mr-1" />;
      default:
        return <FaMapMarkerAlt className="w-3 h-3 mr-1" />;
    }
  };

  const getAmenityColor = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
      case 'live tracking':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'ac':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'charging point':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'sleeper':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'meals':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <motion.div 
      className="bus-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      layout
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex-1">
          {/* Header with operator and rating */}
          <div className="flex items-center justify-between mb-6">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center">
                <FaRoute className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground" data-testid={`text-operator-${bus.id}`}>
                  {bus.operator}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-bustype-${bus.id}`}>
                  {bus.busType}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-right"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-full border border-yellow-200">
                <FaStar className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-bold text-card-foreground ml-2" data-testid={`text-rating-${bus.id}`}>
                  {rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted-foreground ml-2">
                  ({bus.totalRatings || 100})
                </span>
              </div>
            </motion.div>
          </div>
          
          {/* Route and timing */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <FaClock className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-lg font-bold text-card-foreground" data-testid={`text-departure-${bus.id}`}>
                {bus.departure}
              </p>
              <p className="text-sm text-muted-foreground">Source</p>
            </motion.div>
            
            <div className="text-center relative">
              <motion.div 
                className="text-sm text-muted-foreground mb-3" 
                data-testid={`text-duration-${bus.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {bus.duration}
              </motion.div>
              <div className="flex items-center justify-center my-2">
                <div className="w-12 border-t-2 border-dashed border-gray-300"></div>
                <motion.div
                  className="w-8 h-8 bg-gradient-to-r from-primary to-red-600 rounded-full flex items-center justify-center mx-3"
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(220, 38, 38, 0.4)", "0 0 0 10px rgba(220, 38, 38, 0)"]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaMapMarkerAlt className="w-4 h-4 text-white" />
                </motion.div>
                <div className="w-12 border-t-2 border-dashed border-gray-300"></div>
              </div>
            </div>
            
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <FaClock className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-lg font-bold text-card-foreground" data-testid={`text-arrival-${bus.id}`}>
                {bus.arrival}
              </p>
              <p className="text-sm text-muted-foreground">Destination</p>
            </motion.div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-3 mb-6">
            {bus.amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span
                  className={`badge-enhanced inline-flex items-center px-3 py-2 rounded-full text-xs border ${getAmenityColor(amenity)}`}
                  data-testid={`badge-amenity-${index}-${bus.id}`}
                >
                  {getAmenityIcon(amenity)}
                  {amenity}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Price and booking section */}
        <div className="lg:ml-8 text-center lg:text-right">
          <motion.div 
            className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-3">
              <p className="text-3xl font-bold text-card-foreground" data-testid={`text-price-${bus.id}`}>
                ₹{bus.price.toLocaleString()}
              </p>
              {bus.originalPrice && bus.originalPrice > bus.price && (
                <p className="text-sm text-muted-foreground line-through">
                  ₹{bus.originalPrice.toLocaleString()}
                </p>
              )}
            </div>
            
            <motion.div 
              className="text-sm text-green-600 font-semibold mb-4" 
              data-testid={`text-seats-${bus.id}`}
              animate={{ 
                color: ["#059669", "#10b981", "#059669"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {bus.availableSeats} seats available
            </motion.div>
            
            <motion.div className="space-y-3">
              <Button 
                onClick={() => onSelectSeats?.(bus.id)}
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid={`button-select-seats-${bus.id}`}
              >
                Select Seats
              </Button>
              
              <div className="text-xs text-muted-foreground">
                Free cancellation • Instant confirmation
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
