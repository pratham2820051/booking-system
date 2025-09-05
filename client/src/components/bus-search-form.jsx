import { useState } from "react";
import { useForm } from "react-hook-form";

import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaExchangeAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

export default function BusSearchForm({ onSearch }) {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      source: "",
      destination: "",
      travelDate: new Date().toISOString().split('T')[0],
    },
  });

  const handleSubmit = (data) => {
    if (data.source.toLowerCase() === data.destination.toLowerCase()) {
      toast({
        title: "Invalid Search",
        description: "Source and destination cities cannot be the same",
        variant: "destructive",
      });
      return;
    }

    const searchParams = new URLSearchParams({
      source: data.source,
      destination: data.destination,
      date: data.travelDate,
      passengers: "1", 
    });

    setLocation(`/search?${searchParams.toString()}`);
    
    if (onSearch) {
      onSearch(data);
    }
  };

  const swapCities = () => {
    const source = form.getValues("source");
    const destination = form.getValues("destination");
    form.setValue("source", destination);
    form.setValue("destination", source);
  };

  return (
    <motion.div 
      className="search-form-container max-w-5xl mx-auto rounded-2xl p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Find Your Perfect Travel Place</h2>
        <p className="text-gray-600">Book tickets with ease and comfort</p>
      </motion.div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* From Field */}
            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-gray-700 font-semibold flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                    <span>From</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter source city"
                        {...field}
                        className="h-12 text-lg text-black border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl placeholder:text-gray-400"
                        data-testid="input-source"
                      />
                      <FaMapMarkerAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Swap Button */}
            <div className="flex items-end justify-center">
              <motion.button
                type="button"
                onClick={swapCities}
                className="w-10 h-10 bg-gradient-to-r from-primary to-red-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110 shadow-md"
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                title="Swap cities"
              >
                <FaExchangeAlt className="w-3 h-3" />
              </motion.button>
            </div>

            {/* To Field */}
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-gray-700 font-semibold flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                    <span>To</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter destination city"
                        {...field}
                        className="h-12 text-lg text-black border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl placeholder:text-gray-400"
                        data-testid="input-destination"
                      />
                      <FaMapMarkerAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Empty column for spacing */}
            <div></div>

            {/* Date Field */}
            <FormField
              control={form.control}
              name="travelDate"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-gray-700 font-semibold flex items-center space-x-2">
                    <FaCalendarAlt className="w-4 h-4 text-primary" />
                    <span>Date</span>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                                             <Input
                         type="date"
                         {...field}
                         min={new Date().toISOString().split('T')[0]}
                         className="h-12 text-lg text-black border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 rounded-xl placeholder:text-gray-400"
                         data-testid="input-date"
                       />
                      <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Search Button Row */}
          <div className="flex items-center justify-center pt-2">
            <motion.div>
              <Button 
                type="submit" 
                className="h-12 px-6 text-lg font-semibold bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="button-search"
              >
                <FaSearch className="w-5 h-5 mr-2" />
                Search
              </Button>
            </motion.div>
          </div>

          {/* Quick Tips */}
          <motion.div 
            className="mt-6 pt-4 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instant Booking</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Best Prices</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}
