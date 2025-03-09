import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Project } from '@shared/schema';
import ProjectCard from '@/components/projects/ProjectCard';

type ProjectCategory = 'all' | 'municipal' | 'commercial' | 'humanitarian' | 'industrial';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  const filterProjects = (projects: Project[] | undefined, category: ProjectCategory, query: string) => {
    if (!projects) return [];
    
    let filtered = projects;
    
    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(project => project.category === category);
    }
    
    // Filter by search query
    if (query.trim() !== '') {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(lowerQuery) || 
        project.description.toLowerCase().includes(lowerQuery) ||
        project.location.toLowerCase().includes(lowerQuery)
      );
    }
    
    return filtered;
  };

  const filteredProjects = filterProjects(projects, activeCategory, searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled in filterProjects, this just prevents form submission
  };

  return (
    <main className="pt-10 pb-20">
      {/* Projects Hero Section */}
      <section className="bg-[#003300] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-100">
              Discover how our solutions are making a positive impact around the world
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filtering */}
      <section className="py-12 bg-[#f6f4f3]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-8">
            <div className="inline-flex flex-wrap rounded-md shadow-sm" role="group">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeCategory === 'all' 
                    ? 'bg-[#003300] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } rounded-l-lg`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveCategory('municipal')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeCategory === 'municipal' 
                    ? 'bg-[#003300] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Municipal
              </button>
              <button
                onClick={() => setActiveCategory('commercial')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeCategory === 'commercial' 
                    ? 'bg-[#003300] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Commercial
              </button>
              <button
                onClick={() => setActiveCategory('humanitarian')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeCategory === 'humanitarian' 
                    ? 'bg-[#003300] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Humanitarian
              </button>
              <button
                onClick={() => setActiveCategory('industrial')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeCategory === 'industrial' 
                    ? 'bg-[#003300] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } rounded-r-lg`}
              >
                Industrial
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="mb-10 flex justify-center">
            <form onSubmit={handleSearch} className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003300] focus:border-transparent"
              />
              <i className="fa-solid fa-search absolute left-3 top-2.5 text-gray-400"></i>
            </form>
          </div>

          {/* Projects Display */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md h-96 animate-pulse">
                  <div className="h-56 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4 text-gray-400">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="text-2xl font-medium text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We couldn't find any projects matching your criteria. Try adjusting your search or filter options.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#003300] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Let's discuss how our sustainable water and energy solutions can benefit your community or organization.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#889982] hover:bg-[#663300] text-white font-medium py-3 px-8 rounded-full transition transform hover:scale-105"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
};

export default Projects;
