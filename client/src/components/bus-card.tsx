import { Star, Wifi, Snowflake, Zap, Bed, Utensils, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Bus } from "@shared/schema";

interface BusCardProps {
  bus: Bus;
  onSelectSeats?: (busId: string) => void;
}

export default function BusCard({ bus, onSelectSeats }: BusCardProps) {
  const rating = bus.rating / 10; // Convert from stored format (42) to display format (4.2)

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
      case 'live tracking':
        return <Wifi className="w-3 h-3 mr-1" />;
      case 'ac':
        return <Snowflake className="w-3 h-3 mr-1" />;
      case 'charging point':
        return <Zap className="w-3 h-3 mr-1" />;
      case 'sleeper':
        return <Bed className="w-3 h-3 mr-1" />;
      case 'meals':
        return <Utensils className="w-3 h-3 mr-1" />;
      default:
        return <MapPin className="w-3 h-3 mr-1" />;
    }
  };

  const getAmenityColor = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
      case 'live tracking':
        return 'bg-green-100 text-green-800';
      case 'ac':
        return 'bg-blue-100 text-blue-800';
      case 'charging point':
        return 'bg-purple-100 text-purple-800';
      case 'sleeper':
        return 'bg-orange-100 text-orange-800';
      case 'meals':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 hover:shadow-md transition-shadow bus-card">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground" data-testid={`text-operator-${bus.id}`}>
                {bus.operator}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-bustype-${bus.id}`}>
                {bus.busType}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span className="text-sm font-medium text-card-foreground ml-1" data-testid={`text-rating-${bus.id}`}>
                  {rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted-foreground ml-1">
                  ({bus.totalRatings} ratings)
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-card-foreground" data-testid={`text-departure-${bus.id}`}>
                {bus.departureTime}
              </p>
              <p className="text-sm text-muted-foreground">{bus.source}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground" data-testid={`text-duration-${bus.id}`}>
                {bus.duration}
              </p>
              <div className="flex items-center justify-center my-1">
                <div className="w-8 border-t border-border"></div>
                <MapPin className="w-4 h-4 text-primary mx-2" />
                <div className="w-8 border-t border-border"></div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-card-foreground" data-testid={`text-arrival-${bus.id}`}>
                {bus.arrivalTime}
              </p>
              <p className="text-sm text-muted-foreground">{bus.destination}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {bus.amenities.map((amenity, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getAmenityColor(amenity)}`}
                data-testid={`badge-amenity-${index}-${bus.id}`}
              >
                {getAmenityIcon(amenity)}
                {amenity}
              </Badge>
            ))}
          </div>
        </div>

        <div className="lg:ml-6 text-center lg:text-right">
          <div className="mb-4">
            <p className="text-2xl font-bold text-card-foreground" data-testid={`text-price-${bus.id}`}>
              ₹{bus.price.toLocaleString()}
            </p>
            {bus.originalPrice && bus.originalPrice > bus.price && (
              <p className="text-sm text-muted-foreground line-through">
                ₹{bus.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-sm text-green-600 font-medium" data-testid={`text-seats-${bus.id}`}>
              {bus.availableSeats} seats available
            </p>
            <Button 
              onClick={() => onSelectSeats?.(bus.id)}
              className="w-full bg-primary hover:bg-red-700 text-primary-foreground"
              data-testid={`button-select-seats-${bus.id}`}
            >
              Select Seats
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
