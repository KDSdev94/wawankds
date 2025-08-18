import {
  Home,
  Briefcase,
  Star,
  Heart,
  Mail,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Twitter,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLocation } from "wouter";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const [, setLocation] = useLocation();

  const navItems = [
    { id: "introduction", label: "Introduction", icon: Home },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "testimonials", label: "Testimonials", icon: Star },
    { id: "contact", label: "Contact Me", icon: Mail },
    { id: "donation", label: "Donation", icon: Heart },
  ];

  const handleNavigation = (itemId: string) => {
    if (itemId === "portfolio") {
      setLocation("/portfolio");
    } else if (itemId === "testimonials") {
      setLocation("/testimonials");
    } else if (itemId === "introduction") {
      setLocation("/");
    } else if (itemId === "contact") {
      setLocation("/contact");
    } else if (itemId === "donation") {
      setLocation("/donation");
    } else {
      onNavigate(itemId);
    }
  };

  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Globe, href: "#" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full w-80 text-white z-50 lg:block hidden ${
        theme === "dark" ? "sidebar-dark" : "bg-white border-r border-gray-200"
      }`}
    >
      {/* Profile Section */}
      <div
        className={`p-4 border-b ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/public/assets/hero-image.jpg"
              alt="Muhammad Surya J"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3
                className={`font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Kurniawan Dwi Saputra
              </h3>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Fullstack Developer
              </p>
            </div>
          </div>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-4">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 transition-colors ${
                isActive
                  ? theme === "dark"
                    ? "text-white sidebar-hover border-r-2 border-blue-500"
                    : "text-blue-600 bg-blue-50 border-r-2 border-blue-500"
                  : theme === "dark"
                  ? "text-gray-300 hover:text-white hover:sidebar-hover"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Social Media Section */}
      <div className="absolute bottom-6 left-4 right-4">
        <p
          className={`text-xs mb-4 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          SOCIAL MEDIA
        </p>
        <div className="grid grid-cols-6 gap-3">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <IconComponent className="w-4 h-4" />
              </a>
            );
          })}
        </div>
        <p
          className={`text-xs mt-6 ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          © 2025 Muhammad Surya J
        </p>
      </div>
    </div>
  );
}
