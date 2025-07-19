import { ArrowRight, Github } from 'lucide-react'
import React from 'react'
const projects = [
    {
        id: 1,
        title: "Integrion Waitlist Website",
        description: "A Waitlist website for a  product that would automate backend testing using AI made with Next and Tailwind.",
        image: "/projects/integrion.png",
        tags: ["Next.js", "Typescript", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/IntegrionHQ/website-v1",
    },
     {
        id: 2,
        title: "Online Voting System",
        description: "An Online Voting System to modernize traditional voting using HTML/CSS, Tailwind and Django.",
        image: "/projects/online-voting-system.png",
        tags: ["HTML/CSS", "TailwindCSS", "Django"],
        demoUrl: "#",
        githubUrl: "https://github.com/Devika123098/smart-voting",
    },

    {
        id: 3,
        title: "College Tech Fest Website",
        description: "Contributed in developing a website for college Tech Fest using React and Tailwind.",
        image: "/projects/advyka.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/Devika123098/advyka2",
    },
]
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
     <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:">Featured <span className="text-primary md:text-4xl font-bold mb-4 text-center"> Projects </span></h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.  
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project,key)=>(
        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
          <div className="h-60 md:h-40 overflow-hidden">
              <img src={project.image} alt={project.title}className="w-full h-full 
              object-fit transition-transform duration-500 group-hover:scale-110"
              />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag)=>(
                  <span className="px-2 py-1 text-xs font-medium  border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                  </span>
                ))}
            </div>
          
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 mx-2">{project.description}</p>
          <div className='flex justify-between items-center'>
                <div className='flex space-x-3'>
                  <a href={project.githubUrl} 
                  target="_blank"
                  className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <Github size={20}/>
                  </a>
                  </div>
                </div>
          </div>
        </div>
      ))}
      </div>
        <div className="text-center mt-12">
            <a 
            href="https://github.com/Devika123098/"
            target='_blank'
            className='cosmic-button w-fit flex items-center mx-auto gap-2'>
              Check My Github <ArrowRight size={16}/> 
            </a>
        </div>
      </div> 
    </section>
  )
}
//2:12:53