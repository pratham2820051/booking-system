import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter, FaBus, FaClock, FaRupeeSign, FaTimes, FaCheck } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function FiltersPanel({ onFiltersChange }) {
  const [filters, setFilters] = useState({
    busTypes: [],
    departureTimes: [],
    priceRanges: [],
  });

  const busTypeOptions = [
    { id: "ac", label: "AC", count: 78, icon: FaBus, color: "from-blue-400 to-blue-600" },
    { id: "non-ac", label: "Non-AC", count: 45, icon: FaBus, color: "from-gray-400 to-gray-600" },
    { id: "sleeper", label: "Sleeper", count: 92, icon: FaBus, color: "from-purple-400 to-purple-600" },
    { id: "semi-sleeper", label: "Semi-Sleeper", count: 67, icon: FaBus, color: "from-green-400 to-green-600" },
  ];

  const departureTimeOptions = [
    { id: "before-6", label: "Before 6 AM", count: 12, icon: FaClock, color: "from-yellow-400 to-yellow-600" },
    { id: "6-to-12", label: "6 AM to 12 PM", count: 34, icon: FaClock, color: "from-orange-400 to-orange-600" },
    { id: "12-to-6", label: "12 PM to 6 PM", count: 28, icon: FaClock, color: "from-red-400 to-red-600" },
    { id: "after-6", label: "After 6 PM", count: 45, icon: FaClock, color: "from-indigo-400 to-indigo-600" },
  ];

  const priceRangeOptions = [
    { id: "500-1000", label: "₹500 - ₹1000", count: 23, icon: FaRupeeSign, color: "from-green-400 to-green-600" },
    { id: "1000-1500", label: "₹1000 - ₹1500", count: 67, icon: FaRupeeSign, color: "from-blue-400 to-blue-600" },
    { id: "1500-plus", label: "₹1500+", count: 34, icon: FaRupeeSign, color: "from-purple-400 to-purple-600" },
  ];

  const handleFilterChange = (category, value, checked) => {
    const newFilters = {
      ...filters,
      [category]: checked 
        ? [...filters[category], value]
        : filters[category].filter(item => item !== value)
    };
    
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      busTypes: [],
      departureTimes: [],
      priceRanges: [],
    };
    setFilters(clearedFilters);
    onFiltersChange?.(clearedFilters);
  };

  const getActiveFiltersCount = () => {
    return filters.busTypes.length + filters.departureTimes.length + filters.priceRanges.length;
  };

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between"
        variants={itemVariants}
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center">
            <FaFilter className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        </div>
        
        {getActiveFiltersCount() > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-6 h-6 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold"
          >
            {getActiveFiltersCount()}
          </motion.div>
        )}
      </motion.div>
      
      {/* Bus Type Filter */}
      <motion.div variants={itemVariants} className="space-y-3">
        <div className="flex items-center space-x-2">
          <FaBus className="w-4 h-4 text-primary" />
          <h4 className="font-semibold text-gray-800">Type</h4>
        </div>
        <div className="space-y-3">
          {busTypeOptions.map((option) => (
            <motion.div 
              key={option.id} 
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Checkbox
                id={`bus-type-${option.id}`}
                checked={filters.busTypes.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleFilterChange('busTypes', option.id, !!checked)
                }
                data-testid={`checkbox-bustype-${option.id}`}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <div className="flex items-center space-x-2 flex-1">
                <div className={`w-3 h-3 bg-gradient-to-r ${option.color} rounded-full`}></div>
                <Label 
                  htmlFor={`bus-type-${option.id}`}
                  className="text-sm text-gray-700 cursor-pointer font-medium"
                >
                  {option.label}
                </Label>
              </div>
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                {option.count}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Departure Time Filter */}
      <motion.div variants={itemVariants} className="space-y-3">
        <div className="flex items-center space-x-2">
          <FaClock className="w-4 h-4 text-primary" />
          <h4 className="font-semibold text-gray-800">Departure Time</h4>
        </div>
        <div className="space-y-3">
          {departureTimeOptions.map((option) => (
            <motion.div 
              key={option.id} 
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Checkbox
                id={`departure-${option.id}`}
                checked={filters.departureTimes.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleFilterChange('departureTimes', option.id, !!checked)
                }
                data-testid={`checkbox-departure-${option.id}`}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <div className="flex items-center space-x-2 flex-1">
                <div className={`w-3 h-3 bg-gradient-to-r ${option.color} rounded-full`}></div>
                <Label 
                  htmlFor={`departure-${option.id}`}
                  className="text-sm text-gray-700 cursor-pointer font-medium"
                >
                  {option.label}
                </Label>
              </div>
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                {option.count}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Price Range Filter */}
      <motion.div variants={itemVariants} className="space-y-3">
        <div className="flex items-center space-x-2">
          <FaRupeeSign className="w-4 h-4 text-primary" />
          <h4 className="font-semibold text-gray-800">Price Range</h4>
        </div>
        <div className="space-y-3">
          {priceRangeOptions.map((option) => (
            <motion.div 
              key={option.id} 
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Checkbox
                id={`price-${option.id}`}
                checked={filters.priceRanges.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleFilterChange('priceRanges', option.id, !!checked)
                }
                data-testid={`checkbox-price-${option.id}`}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <div className="flex items-center space-x-2 flex-1">
                <div className={`w-3 h-3 bg-gradient-to-r ${option.color} rounded-full`}></div>
                <Label 
                  htmlFor={`price-${option.id}`}
                  className="text-sm text-gray-700 cursor-pointer font-medium"
                >
                  {option.label}
                </Label>
              </div>
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                {option.count}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Clear Filters Button */}
      <motion.div variants={itemVariants}>
        <Button 
          onClick={clearAllFilters}
          className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          data-testid="button-clear-filters"
          disabled={getActiveFiltersCount() === 0}
        >
          <FaTimes className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      </motion.div>

      {/* Active Filters Summary */}
      <AnimatePresence>
        {getActiveFiltersCount() > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-4"
          >
            <div className="flex items-center space-x-2 mb-2">
              <FaCheck className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                {getActiveFiltersCount()} filter{getActiveFiltersCount() > 1 ? 's' : ''} applied
              </span>
            </div>
            <p className="text-xs text-green-600">
              Your search results are being filtered based on your selections
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
