import { Home, Briefcase, Star, Play, Edit, Heart, Github, Linkedin, Youtube, Instagram, Twitter, Globe } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const navItems = [
    { id: "introduction", label: "Introduction", icon: Home },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "testimonials", label: "Testimonials", icon: Star },
    { id: "videos", label: "Videos", icon: Play },
    { id: "posts", label: "Posts", icon: Edit },
    { id: "donation", label: "Donation", icon: Heart },
  ];

  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Globe, href: "#" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-60 sidebar-dark text-white z-50 lg:block hidden">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=50&h=50&fit=crop&crop=face" 
            alt="Muhammad Surya J" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-white">Muhammad Surya J</h3>
            <p className="text-sm text-gray-300">Fullstack Developer</p>
          </div>
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
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 transition-colors ${
                isActive
                  ? "text-white sidebar-hover border-r-2 border-blue-500"
                  : "text-gray-300 hover:text-white hover:sidebar-hover"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Social Media Section */}
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-xs text-gray-400 mb-4">SOCIAL MEDIA</p>
        <div className="grid grid-cols-6 gap-3">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IconComponent className="w-4 h-4" />
              </a>
            );
          })}
        </div>
        <p className="text-xs text-gray-500 mt-6">© 2025 Muhammad Surya J</p>
      </div>
    </div>
  );
}
