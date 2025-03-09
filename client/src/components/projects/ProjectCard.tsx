import { Link } from "wouter";
import { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  isCompact?: boolean;
}

const ProjectCard = ({ project, isCompact = false }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transition transform hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-[#003300] mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{project.location}</p>
        <p className="text-gray-600 mb-4">
          {isCompact
            ? project.shortDescription
            : project.description}
        </p>
        {project.rating && (
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fas ${
                    i < Math.floor(project.rating)
                      ? "fa-star"
                      : i < project.rating
                      ? "fa-star-half-alt"
                      : "fa-star text-gray-300"
                  }`}
                ></i>
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">Client Satisfaction</span>
          </div>
        )}
        <Link href={`/projects/${project.id}`}>
          <a className="inline-block text-[#005500] font-medium hover:text-[#003300] transition">
            {isCompact ? "Read full case study" : "View project details"}{" "}
            <i className="fas fa-arrow-right ml-1"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
