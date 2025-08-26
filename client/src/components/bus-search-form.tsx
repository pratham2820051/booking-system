import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { MapPin, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { busSearchSchema, type BusSearchParams } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

interface BusSearchFormProps {
  onSearch?: (params: BusSearchParams) => void;
}

export default function BusSearchForm({ onSearch }: BusSearchFormProps) {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const form = useForm<BusSearchParams>({
    resolver: zodResolver(busSearchSchema),
    defaultValues: {
      source: "",
      destination: "",
      travelDate: new Date().toISOString().split('T')[0],
      passengers: 1,
    },
  });

  const handleSubmit = (data: BusSearchParams) => {
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
      passengers: data.passengers.toString(),
    });

    setLocation(`/search?${searchParams.toString()}`);
    
    if (onSearch) {
      onSearch(data);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">From</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter source city"
                        {...field}
                        className="pr-10"
                        data-testid="input-source"
                      />
                      <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">To</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter destination city"
                        {...field}
                        className="pr-10"
                        data-testid="input-destination"
                      />
                      <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="travelDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Date</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="date"
                        {...field}
                        min={new Date().toISOString().split('T')[0]}
                        className="pr-10"
                        data-testid="input-date"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-end">
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-red-700 text-primary-foreground font-semibold py-3 px-6"
                data-testid="button-search"
              >
                <Search className="w-4 h-4 mr-2" />
                Search Buses
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
