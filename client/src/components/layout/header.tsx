import { Bus, User, Headphones, Menu } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center text-2xl font-bold text-primary">
              <Bus className="w-6 h-6 mr-2" />
              BusTravel
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Bus Tickets
              </Link>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Train Tickets
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Hotels
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cab Rental
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-account"
            >
              <User className="w-4 h-4 mr-1 inline" />
              <span className="hidden sm:inline">Account</span>
            </button>
            <button 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-help"
            >
              <Headphones className="w-4 h-4 mr-1 inline" />
              <span className="hidden sm:inline">Help</span>
            </button>
            <button 
              className="md:hidden text-foreground"
              data-testid="button-menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
