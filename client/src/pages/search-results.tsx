import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import BusCard from "@/components/bus-card";
import FiltersPanel from "@/components/filters-panel";
import { useToast } from "@/hooks/use-toast";
import type { Bus } from "@shared/schema";

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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setSearchParams({
      source: urlParams.get('source') || '',
      destination: urlParams.get('destination') || '',
      date: urlParams.get('date') || '',
      passengers: urlParams.get('passengers') || '1',
    });
  }, []);

  const { data: buses = [], isLoading, error } = useQuery({
    queryKey: ['/api/buses/search', searchParams],
    enabled: !!(searchParams.source && searchParams.destination && searchParams.date),
  });

  const handleSelectSeats = (busId: string) => {
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
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Invalid Search</h2>
          <p className="text-muted-foreground mb-4">Please provide valid search parameters</p>
          <Button onClick={handleBackToHome} data-testid="button-back-home">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Search Error</h2>
          <p className="text-muted-foreground mb-4">
            Sorry, we couldn't find any buses for your search. Please try again.
          </p>
          <Button onClick={handleBackToHome} data-testid="button-back-home-error">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <div>
      {/* Search Header */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={handleBackToHome}
              className="text-primary-foreground hover:bg-white hover:bg-opacity-20"
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="text-center">
              <h1 className="text-xl font-semibold" data-testid="text-route">
                {searchParams.source} → {searchParams.destination}
              </h1>
              <p className="text-sm opacity-90" data-testid="text-search-details">
                {searchParams.date ? formatDate(searchParams.date) : ''} • {searchParams.passengers} Passenger{parseInt(searchParams.passengers) > 1 ? 's' : ''}
              </p>
            </div>
            <Button 
              onClick={handleModifySearch}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-primary-foreground"
              data-testid="button-modify-search"
            >
              Modify Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <FiltersPanel onFiltersChange={setFilters} />
          </div>

          {/* Bus Results */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground" data-testid="text-results-count">
                  {isLoading ? 'Searching...' : `${buses.length} buses found`}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Sorted by: {sortBy === 'departure' ? 'Departure time' : 
                           sortBy === 'duration' ? 'Duration' :
                           sortBy === 'price-low' ? 'Price (Low to High)' :
                           sortBy === 'price-high' ? 'Price (High to Low)' :
                           'Rating'}
                </p>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48" data-testid="select-sort">
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

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card rounded-lg shadow-sm border border-border p-6 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : buses.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-foreground mb-2">No buses found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className="space-y-4">
                {buses.map((bus: Bus) => (
                  <BusCard
                    key={bus.id}
                    bus={bus}
                    onSelectSeats={handleSelectSeats}
                  />
                ))}
              </div>
            )}

            {/* Load More */}
            {buses.length > 0 && (
              <div className="text-center mt-8">
                <Button 
                  variant="outline"
                  className="bg-secondary hover:bg-gray-200 text-secondary-foreground"
                  data-testid="button-load-more"
                >
                  Load More Results
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
