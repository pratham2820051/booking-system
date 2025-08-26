import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface FiltersState {
  busTypes: string[];
  departureTimes: string[];
  priceRanges: string[];
}

interface FiltersPanelProps {
  onFiltersChange?: (filters: FiltersState) => void;
}

export default function FiltersPanel({ onFiltersChange }: FiltersPanelProps) {
  const [filters, setFilters] = useState<FiltersState>({
    busTypes: [],
    departureTimes: [],
    priceRanges: [],
  });

  const busTypeOptions = [
    { id: "ac", label: "AC", count: 78 },
    { id: "non-ac", label: "Non-AC", count: 45 },
    { id: "sleeper", label: "Sleeper", count: 92 },
    { id: "semi-sleeper", label: "Semi-Sleeper", count: 67 },
  ];

  const departureTimeOptions = [
    { id: "before-6", label: "Before 6 AM", count: 12 },
    { id: "6-to-12", label: "6 AM to 12 PM", count: 34 },
    { id: "12-to-6", label: "12 PM to 6 PM", count: 28 },
    { id: "after-6", label: "After 6 PM", count: 45 },
  ];

  const priceRangeOptions = [
    { id: "500-1000", label: "₹500 - ₹1000", count: 23 },
    { id: "1000-1500", label: "₹1000 - ₹1500", count: 67 },
    { id: "1500-plus", label: "₹1500+", count: 34 },
  ];

  const handleFilterChange = (category: keyof FiltersState, value: string, checked: boolean) => {
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

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Filters</h3>
      
      {/* Bus Type Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-card-foreground mb-3">Bus Type</h4>
        <div className="space-y-2">
          {busTypeOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={`bus-type-${option.id}`}
                checked={filters.busTypes.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleFilterChange('busTypes', option.id, !!checked)
                }
                data-testid={`checkbox-bustype-${option.id}`}
              />
              <Label 
                htmlFor={`bus-type-${option.id}`}
                className="text-sm text-card-foreground cursor-pointer"
              >
                {option.label} ({option.count})
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Departure Time Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-card-foreground mb-3">Departure Time</h4>
        <div className="space-y-2">
          {departureTimeOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={`departure-${option.id}`}
                checked={filters.departureTimes.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleFilterChange('departureTimes', option.id, !!checked)
                }
                data-testid={`checkbox-departure-${option.id}`}
              />
              <Label 
                htmlFor={`departure-${option.id}`}
                className="text-sm text-card-foreground cursor-pointer"
              >
                {option.label} ({option.count})
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-card-foreground mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRangeOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={`price-${option.id}`}
                checked={filters.priceRanges.includes(option.id)}
                onCheckedChange={(checked) => 
                  handleFilterChange('priceRanges', option.id, !!checked)
                }
                data-testid={`checkbox-price-${option.id}`}
              />
              <Label 
                htmlFor={`price-${option.id}`}
                className="text-sm text-card-foreground cursor-pointer"
              >
                {option.label} ({option.count})
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button 
        onClick={clearAllFilters}
        className="w-full bg-primary hover:bg-red-700 text-primary-foreground"
        data-testid="button-clear-filters"
      >
        Clear All Filters
      </Button>
    </div>
  );
}
