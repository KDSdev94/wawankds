import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileHeaderProps {
  onNavigate: (section: string) => void;
}

export default function MobileHeader({ onNavigate }: MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
    { id: "videos", label: "Videos" },
    { id: "posts", label: "Posts" },
    { id: "donation", label: "Donation" },
  ];

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="lg:hidden bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=40&h=40&fit=crop&crop=face" 
            alt="Muhammad Surya J" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Muhammad Surya J</h3>
            <p className="text-sm text-gray-500">Fullstack Developer</p>
          </div>
        </div>
        <button 
          className="text-gray-700 hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="bg-white border-t">
          <nav className="py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
