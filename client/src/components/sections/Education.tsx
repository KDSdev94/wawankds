import { GraduationCap, Presentation, Trophy, Medal } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
        <p className="text-lg text-gray-600 mb-12">
          Learning is the foundation of growth. Here's a glimpse into my educational background—the 
          knowledge and skills that have fueled my passion for technology and innovation.
        </p>

        <div className="bg-gray-50 rounded-xl p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Trilogy University</h3>
                <p className="text-gray-600">Information Engineering</p>
              </div>
            </div>
            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">2018 - 2022</span>
          </div>

          {/* Academic Experience */}
          <h4 className="font-semibold text-gray-900 mb-6">Academic Experience</h4>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                <Presentation className="text-green-600 w-4 h-4" />
              </div>
              <div>
                <h5 className="font-medium text-gray-900">Teaching Assistant</h5>
                <p className="text-gray-600 text-sm">Web programming and object-based programming practicum</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                <div className="text-purple-600 text-sm">🥽</div>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">AR Tutor</h5>
                <p className="text-gray-600 text-sm">Teaching Augmented Reality with Spark AR for SMA and SMK</p>
              </div>
            </div>
          </div>

          {/* Awards */}
          <h4 className="font-semibold text-gray-900 mb-6">Awards</h4>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mt-1">
                <Trophy className="text-yellow-600 w-4 h-4" />
              </div>
              <div>
                <h5 className="font-medium text-gray-900">Web Design Competition Finalist</h5>
                <p className="text-gray-600 text-sm">Atma Jaya Yogyakarta (2021)</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                <Medal className="text-blue-600 w-4 h-4" />
              </div>
              <div>
                <h5 className="font-medium text-gray-900">IoT Finalist</h5>
                <p className="text-gray-600 text-sm">State University of Malang (2021)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
