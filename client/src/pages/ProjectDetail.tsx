import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Project } from "@shared/schema";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "0");

  const { data: project, isLoading } = useQuery<Project>({
    queryKey: [`/api/projects/${projectId}`],
    enabled: !!projectId,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#003300]"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-6">The project you are looking for does not exist or has been removed.</p>
        <Link href="/projects">
          <a className="inline-block bg-[#003300] hover:bg-[#005500] text-white font-medium py-2 px-6 rounded transition">
            Back to Projects
          </a>
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-10 pb-20">
      {/* Hero Section with Project Image */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-xl text-white mb-2 drop-shadow-lg">
                {project.location}
              </p>
              {project.postedBy && (
                <p className="text-gray-200 text-lg drop-shadow-lg">
                  Posted by: {project.postedBy}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#f6f4f3] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/">
              <a className="text-gray-500 hover:text-[#003300]">Home</a>
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/projects">
              <a className="text-gray-500 hover:text-[#003300]">Projects</a>
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#003300]">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Executive Summary */}
              {project.executiveSummary && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-heading font-semibold text-[#003300] mb-4">
                    Executive Summary
                  </h2>
                  <p className="text-gray-700 italic">{project.executiveSummary}</p>
                </div>
              )}

              {/* Project Description */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-heading font-semibold text-[#003300] mb-4">
                  Project Details
                </h2>
                <p className="text-gray-700 mb-6">{project.description}</p>

                {/* Additional Images */}
                {project.additionalImages && project.additionalImages.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    {project.additionalImages.map((img, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <img
                          src={img}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Video Embed */}
                {project.videoUrl && (
                  <div className="mt-8">
                    <h3 className="text-xl font-heading font-semibold text-[#003300] mb-4">
                      Project Video
                    </h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                      <iframe
                        src={project.videoUrl}
                        title={`Video for ${project.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-96"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Details Card */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-heading font-semibold text-[#003300] mb-4">
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-600 font-medium mb-1">Location</h4>
                    <p className="text-gray-800">{project.location}</p>
                  </div>
                  <div>
                    <h4 className="text-gray-600 font-medium mb-1">Category</h4>
                    <p className="text-gray-800 capitalize">{project.category}</p>
                  </div>
                  {project.rating && (
                    <div>
                      <h4 className="text-gray-600 font-medium mb-1">Client Satisfaction</h4>
                      <div className="flex items-center">
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
                        <span className="ml-2 text-gray-600">{project.rating}/5</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-[#003300] text-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-heading font-semibold mb-4">
                  Interested in a Similar Project?
                </h3>
                <p className="mb-6">
                  Our team of experts is ready to discuss how we can implement a similar solution for your needs.
                </p>
                <Link href="/contact">
                  <a className="block bg-[#889982] hover:bg-[#663300] text-white text-center font-medium py-3 px-4 rounded-md transition">
                    Contact Us Today
                  </a>
                </Link>
              </div>

              {/* Related Projects */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-heading font-semibold text-[#003300] mb-4">
                  More Projects
                </h3>
                <Link href="/projects">
                  <a className="inline-block text-[#003300] font-medium hover:text-[#005500] transition">
                    Browse All Projects <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
