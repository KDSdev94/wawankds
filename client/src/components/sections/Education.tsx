import { GraduationCap, Presentation, Trophy, Medal } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-white dark:bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Riwayat Pendidikan
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Pendidikan adalah fondasi dari pertumbuhan. Berikut adalah riwayat
          pendidikan saya, pengetahuan dan keterampilan yang telah memotivasi
          saya untuk berkembang dalam teknologi dan inovasi.
        </p>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Politeknik Pancasakti Global
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sistem Informasi Visual
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  IPK: 3.65
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-600 px-3 py-1 rounded-full">
              2022 - 2025
            </span>
          </div>
        </div>
        <div className="mb-6"></div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  SMKA Negeri 2 Brebes
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ilmu Pengetahuan Sosial
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-600 px-3 py-1 rounded-full">
              2019 - 2022
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
