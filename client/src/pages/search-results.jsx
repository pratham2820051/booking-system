import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaSearch, FaFilter, FaSort, FaBus, FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BusCard from "@/components/bus-card";
import FiltersPanel from "@/components/filters-panel";
import { useToast } from "@/hooks/use-toast";

// Mock data for frontend demo
const mockBuses = [
  {
    id: 1,
    operator: "RedBus Express",
    busType: "AC Sleeper",
    departure: "22:00",
    arrival: "06:00",
    duration: "8h",
    price: 1200,
    rating: 4.2,
    availableSeats: 15,
    amenities: ["WiFi", "USB Charging", "Water Bottle", "Blanket"]
  },
  {
    id: 2,
    operator: "Travel Express",
    busType: "AC Seater",
    departure: "23:30",
    arrival: "07:30",
    duration: "8h",
    price: 900,
    rating: 4.0,
    availableSeats: 8,
    amenities: ["WiFi", "USB Charging", "Water Bottle"]
  },
  {
    id: 3,
    operator: "City Connect",
    busType: "Non-AC Seater",
    departure: "21:00",
    arrival: "05:00",
    duration: "8h",
    price: 600,
    rating: 3.8,
    availableSeats: 25,
    amenities: ["Water Bottle"]
  }
];

export default function SearchResults() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useState({
    source: "",
    destination: "", 
    date: "",
    passengers: "1"
  });
  const [sortBy, setSortBy] = useState("departure");
  const [filters, setFilters] = useState({
    busTypes: [],
    departureTimes: [],
    priceRanges: [],
  });
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setSearchParams({
      source: urlParams.get('source') || '',
      destination: urlParams.get('destination') || '',
      date: urlParams.get('date') || '',
      passengers: urlParams.get('passengers') || '1',
    });
  }, []);

  useEffect(() => {
    if (searchParams.source && searchParams.destination && searchParams.date) {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        setBuses(mockBuses);
        setIsLoading(false);
      }, 1000);
    }
  }, [searchParams.source, searchParams.destination, searchParams.date]);

  const handleSelectSeats = (busId) => {
    toast({
      title: "Seat Selection",
      description: "Seat selection functionality would open here",
    });
  };

  const handleBackToHome = () => {
    setLocation('/');
  };

  const handleModifySearch = () => {
    setLocation('/');
  };

  if (!searchParams.source || !searchParams.destination) {
    return (
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaBus className="w-10 h-10 text-red-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Invalid Search</h2>
          <p className="text-muted-foreground mb-6 text-lg">Please provide valid search parameters</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={handleBackToHome} data-testid="button-back-home" className="btn-primary">
              <FaArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (isLoading && buses.length === 0) {
    return (
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaSearch className="w-10 h-10 text-red-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Searching...</h2>
          <p className="text-muted-foreground mb-6 text-lg">Please wait while we find buses for your search.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={handleBackToHome} data-testid="button-back-home" className="btn-primary">
              <FaArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (buses.length === 0) {
    return (
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaSearch className="w-10 h-10 text-red-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-4">No buses found</h2>
          <p className="text-muted-foreground mb-6 text-lg">Try adjusting your search criteria or filters</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={handleModifySearch} className="btn-primary">
              <FaSearch className="w-4 h-4 mr-2" />
              Modify Search
            </Button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Enhanced Search Header */}
      <motion.div 
        className="bg-gradient-to-r from-primary via-red-600 to-red-700 text-white py-8 relative overflow-hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                variant="ghost" 
                onClick={handleBackToHome}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full px-4 py-2"
                data-testid="button-back"
              >
                <FaArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-2">
                <FaMapMarkerAlt className="w-6 h-6 text-yellow-300" />
                <h1 className="text-3xl font-bold" data-testid="text-route">
                  {searchParams.source} → {searchParams.destination}
                </h1>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm opacity-90">
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span data-testid="text-search-details">
                    {searchParams.date ? formatDate(searchParams.date) : ''}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUsers className="w-4 h-4" />
                  <span>{searchParams.passengers} Passenger{parseInt(searchParams.passengers) > 1 ? 's' : ''}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                onClick={handleModifySearch}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white border-opacity-30 rounded-full px-6 py-2"
                data-testid="button-modify-search"
              >
                <FaSearch className="w-4 h-4 mr-2" />
                Modify Search
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Filters Sidebar */}
          <motion.div 
            className="lg:w-1/4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FaFilter className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
                </div>
                <FiltersPanel onFiltersChange={setFilters} />
              </div>
            </div>
          </motion.div>

          {/* Enhanced Bus Results */}
          <motion.div 
            className="lg:w-3/4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2" data-testid="text-results-count">
                    {isLoading ? 'Searching...' : `${buses.length} buses found`}
                  </h2>
                  <p className="text-gray-600">
                    Sorted by: {sortBy === 'departure' ? 'Departure time' : 
                               sortBy === 'duration' ? 'Duration' :
                               sortBy === 'price-low' ? 'Price (Low to High)' :
                               sortBy === 'price-high' ? 'Price (High to Low)' :
                               'Rating'}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaSort className="w-4 h-4 text-gray-500" />
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48 bg-gray-50 border-gray-200" data-testid="select-sort">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="departure">Sort by: Departure time</SelectItem>
                      <SelectItem value="duration">Sort by: Duration</SelectItem>
                      <SelectItem value="price-low">Sort by: Price (Low to High)</SelectItem>
                      <SelectItem value="price-high">Sort by: Price (High to Low)</SelectItem>
                      <SelectItem value="rating">Sort by: Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {isLoading ? (
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i} 
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                    variants={itemVariants}
                  >
                    <div className="animate-pulse">
                      <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence>
                  {buses.map((bus, index) => (
                    <motion.div
                      key={bus.id}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BusCard
                        bus={bus}
                        onSelectSeats={handleSelectSeats}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Enhanced Load More */}
            {buses.length > 0 && (
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button 
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-primary px-8 py-3 rounded-full text-lg font-semibold"
                  data-testid="button-load-more"
                >
                  <FaBus className="w-5 h-5 mr-2" />
                  Load More Results
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
