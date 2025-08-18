import { GraduationCap, Presentation, Trophy, Medal } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-white dark:bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Learning is the foundation of growth. Here's a glimpse into my educational background—the 
          knowledge and skills that have fueled my passion for technology and innovation.
        </p>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Trilogy University</h3>
                <p className="text-gray-600 dark:text-gray-300">Information Engineering</p>
              </div>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-600 px-3 py-1 rounded-full">2018 - 2022</span>
          </div>

          {/* Academic Experience */}
          <h4 className="font-semibold text-gray-900 dark:text-white mb-6">Academic Experience</h4>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mt-1">
                <Presentation className="text-green-600 dark:text-green-400 w-4 h-4" />
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white">Teaching Assistant</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Web programming and object-based programming practicum</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mt-1">
                <div className="text-purple-600 dark:text-purple-400 text-sm">🥽</div>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white">AR Tutor</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Teaching Augmented Reality with Spark AR for SMA and SMK</p>
              </div>
            </div>
          </div>

          {/* Awards */}
          <h4 className="font-semibold text-gray-900 dark:text-white mb-6">Awards</h4>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mt-1">
                <Trophy className="text-yellow-600 dark:text-yellow-400 w-4 h-4" />
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white">Web Design Competition Finalist</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Atma Jaya Yogyakarta (2021)</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mt-1">
                <Medal className="text-blue-600 dark:text-blue-400 w-4 h-4" />
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white">IoT Finalist</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">State University of Malang (2021)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}