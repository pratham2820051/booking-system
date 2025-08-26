import { Shield, Clock, IndianRupee } from "lucide-react";
import BusSearchForm from "@/components/bus-search-form";

export default function Home() {
  const popularRoutes = [
    {
      route: "Delhi → Mumbai",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      startingPrice: "₹800",
      busCount: "156 buses available"
    },
    {
      route: "Bangalore → Chennai", 
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      startingPrice: "₹450",
      busCount: "89 buses available"
    },
    {
      route: "Pune → Goa",
      image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200", 
      startingPrice: "₹650",
      busCount: "67 buses available"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative hero-gradient text-primary-foreground">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              India's No. 1 Online Bus Booking Platform
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Fast, Safe & Reliable Bus Booking Experience
            </p>
          </div>

          <BusSearchForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose BusTravel?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm" data-testid="feature-security">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">100% Safe & Secure</h3>
              <p className="text-muted-foreground">Your personal information and payment details are completely secure with us.</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-sm" data-testid="feature-support">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">24/7 Customer Support</h3>
              <p className="text-muted-foreground">Round-the-clock assistance for all your travel needs and queries.</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-sm" data-testid="feature-price">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Best Price Guarantee</h3>
              <p className="text-muted-foreground">Get the best deals and offers on your bus tickets with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Popular Bus Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow p-6"
                data-testid={`route-card-${index}`}
              >
                <img 
                  src={route.image}
                  alt={`${route.route} route`} 
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{route.route}</h3>
                <p className="text-muted-foreground text-sm">Starting from {route.startingPrice}</p>
                <p className="text-accent font-medium">{route.busCount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
