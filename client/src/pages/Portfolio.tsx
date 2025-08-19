import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("portfolio");
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["portfolio"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "portfolio") {
      // Already on portfolio page
      return;
    }
    // Navigate back to home page
    window.location.href = "/";
  };

  const projects = [
    {
      title: "E-SkuulTime",
      description:
        "Create a schedule for students to attend classes at school.",
      image: "/assets/image/e-skuultime.png",
      technologies: ["Expo", "React Native"],
      github: "#",
      demo: "#",
    },
    {
      title: "Toko Amartha",
      description:
        "Create a desktop app for cashier transaction, made with Flutter and Dart.",
      image: "/assets/image/toko_amartha.png",
      technologies: ["Flutter", "Dart"],
      demo: "#",
    },
    {
      title: "MyLurah",
      description:
        "A digital application for managing letters and citizen reports for village administration.",
      image: "/assets/image/MyLurah.jpg",
      technologies: ["Expo", "React Native"],
      demo: "#",
    },
    {
      title: "Sampah Tuntas",
      description:
        "A digital application for managing waste collection and recycling.",
      image: "/assets/image/sampah_tuntas.png",
      technologies: ["Expo", "React Native"],
      github: "#",
      demo: "#",
    },
    {
      title: "Febri Store",
      description:
        "E-commerce application for selling products and managing store.",
      image: "/assets/image/febri_store.png",
      technologies: ["Expo", "React Native"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 font-inter transition-colors">
      <title>Kurniawan Dwi Saputra - {activeSection}</title>
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      <MobileHeader
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      <div className="lg:ml-80 pt-20 lg:pt-0">
        <section id="portfolio" className="bg-white dark:bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header Section */}
            <div className=" mb-12">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-800 dark:text-white">
                Portfolio
              </h1>
              <div className="mb-6 h-1 w-16 bg-slate-200 dark:bg-slate-700"></div>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-6xl leading-relaxed">
                As a fullstack web developer, I bring ideas to life by building
                responsive, visually stunning websites with seamless user
                experiences. Using the latest frameworks and technologies, I
                blend creativity with functionality to deliver designs that not
                only look great but also perform flawlessly.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border dark:border-gray-700 overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 text-xs rounded-full font-medium px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      )}
                      <Button
                        size="sm"
                        className="flex-1 sidebar-dark text-white hover:opacity-90"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Interested in working together? Let's discuss your project!
              </p>
              <Button
                onClick={() => setLocation("/contact")}
                className="sidebar-dark text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-colors"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
