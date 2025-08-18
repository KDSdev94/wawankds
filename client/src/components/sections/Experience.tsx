import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin } from "lucide-react";

export default function Experience() {
  const projects = [
    {
      title: "Proposal Submission System",
      description:
        "Proposal submission system for student activities with tracking and approval...",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
      tags: [
        {
          name: "Laravel",
          color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
        },
        {
          name: "Bootstrap",
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
        },
        {
          name: "MySQL",
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
        },
      ],
    },
    {
      title: "Kebab Atung",
      description:
        "Created a landing page for a kebab business using SvelteKit, highlighting products...",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
      tags: [
        {
          name: "SvelteKit",
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
        },
        {
          name: "Bootstrap",
          color:
            "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
        },
        {
          name: "SCSS",
          color:
            "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300",
        },
        {
          name: "Prisma",
          color:
            "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
        },
      ],
    },
    {
      title: "KISP Application",
      description:
        "Developed a government website using SvelteKit for the Directorate General of...",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&w=300&h=200&fit=crop",
      tags: [
        {
          name: "SvelteKit",
          color:
            "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
        },
        {
          name: "Tailwind",
          color:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Experience
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Every project tells a story, and here's where my professional journey
          unfolds. From crafting innovative solutions to tackling real-world
          challenges, these experiences have shaped me into the developer I am
          today.
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            <span className="text-gray-400 mr-2">•</span>
            Freelance
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-4">
              2022 - now
            </span>
          </h3>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border dark:border-gray-700"
              >
                <div className="p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className={`${tag.color} text-xs rounded-full font-medium`}
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured project */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=500&h=300&fit=crop"
                    alt="Educational website with colorful design"
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Web Developer - Iqralabs
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Feb 2023 - May 2024
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    In this project, I was responsible for developing a 5-page
                    website based on the design provided by the UI/UX team. My
                    focus of the project was optimizing the website's
                    performance, as it included numerous heavy elements such as
                    images and videos that could impact loading speed. Close
                    collaboration with the UI/UX team ensured seamless
                    integration of their designs while maintaining a balance
                    between aesthetics and functionality to deliver a visually
                    appealing and high-performing website.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Remote
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      South Tangerang, Indonesia
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 text-xs rounded-full font-medium">
                      Vue
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 text-xs rounded-full font-medium">
                      SCSS
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs rounded-full font-medium">
                      Bootstrap
                    </Badge>
                  </div>
                  <Button className="sidebar-dark text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-colors flex items-center gap-2">
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
