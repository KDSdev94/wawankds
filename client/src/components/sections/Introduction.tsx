import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Introduction() {
  const handlePortfolioView = () => {
    const portfolioSection = document.getElementById("experience");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // Implement resume download functionality
    console.log("Download resume");
  };

  return (
    <section id="introduction" className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Introduction</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Full Stack Developer from Bandung, Indonesia, with solid experience in responsive systems, 
              e-commerce, and interactive websites. Achieved 98% design accuracy and 99.9% uptime. 
              Committed to innovation and user satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={handlePortfolioView}
                className="sidebar-dark text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors flex items-center justify-center gap-2"
              >
                See Portfolio
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={handleResumeDownload}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&w=400&h=400&fit=crop" 
              alt="Traveling and tea time anime character" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
            <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
              Traveling and tea time 🍵✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
