export default function Skills() {
  const skills = [
    { name: "Javascript", icon: "🟨", color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300" },
    { name: "PHP", icon: "🟣", color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300" },
    { name: "Typescript", icon: "🔵", color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300" },
    { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300" },
    { name: "MySQL", icon: "🔵", color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300" },
    { name: "Git", icon: "⚫", color: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300" },
    { name: "Svelte", icon: "🟠", color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300" },
    { name: "Laravel", icon: "🔴", color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300" },
    { name: "Tailwind CSS", icon: "🔵", color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300" },
    { name: "Figma", icon: "🟣", color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300" },
    { name: "SASS", icon: "🩷", color: "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300" },
    { name: "Bootstrap", icon: "🟣", color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300" },
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Great projects are built with great tools. Below is a curated list of the technologies and frameworks 
          I've mastered to deliver high-quality, cutting-edge solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border dark:border-gray-700"
            >
              <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}