export default function Skills() {
  const skills = [
    { name: "Javascript", icon: "🟨", color: "bg-yellow-100 text-yellow-600" },
    { name: "PHP", icon: "🟣", color: "bg-purple-100 text-purple-600" },
    { name: "Typescript", icon: "🔵", color: "bg-blue-100 text-blue-600" },
    { name: "Node.js", icon: "🟢", color: "bg-green-100 text-green-600" },
    { name: "MySQL", icon: "🔵", color: "bg-blue-100 text-blue-600" },
    { name: "Git", icon: "⚫", color: "bg-gray-100 text-gray-600" },
    { name: "Svelte", icon: "🟠", color: "bg-orange-100 text-orange-600" },
    { name: "Laravel", icon: "🔴", color: "bg-red-100 text-red-600" },
    { name: "Tailwind CSS", icon: "🔵", color: "bg-cyan-100 text-cyan-600" },
    { name: "Figma", icon: "🟣", color: "bg-purple-100 text-purple-600" },
    { name: "SASS", icon: "🩷", color: "bg-pink-100 text-pink-600" },
    { name: "Bootstrap", icon: "🟣", color: "bg-indigo-100 text-indigo-600" },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
        <p className="text-lg text-gray-600 mb-12">
          Great projects are built with great tools. Below is a curated list of the technologies and frameworks 
          I've mastered to deliver high-quality, cutting-edge solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <h4 className="font-medium text-gray-900">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
