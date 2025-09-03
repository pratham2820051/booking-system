import { useLocation } from "wouter";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function SearchResults() {
  const [, setLocation] = useLocation();

  const handleBackToHome = () => {
    setLocation('/');
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-700">Coming Soon</h1>
      <Button 
        onClick={handleBackToHome}
        className="btn-primary"
        data-testid="button-back-home"
      >
        <FaArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>
    </div>
  );
}

