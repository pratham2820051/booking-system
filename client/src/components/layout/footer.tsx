import { Bus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center text-2xl font-bold mb-4">
              <Bus className="w-6 h-6 mr-2" />
              BusTravel
            </div>
            <p className="text-gray-300 text-sm">
              India's most trusted bus booking platform with over 10 million happy customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">T&C</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Bus Hire</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Global Sites</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">India</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Singapore</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Malaysia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Indonesia</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">&copy; 2024 BusTravel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
