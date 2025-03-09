import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Project } from '@shared/schema';
import ProjectCard from '../projects/ProjectCard';

const SuccessStoriesSection = () => {
  const [position, setPosition] = useState(0);
  const [itemWidth, setItemWidth] = useState(100);
  const carouselRef = useRef<HTMLDivElement>(null);

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  useEffect(() => {
    const updateItemWidth = () => {
      if (window.innerWidth >= 1024) {
        setItemWidth(33.333);
      } else if (window.innerWidth >= 768) {
        setItemWidth(50);
      } else {
        setItemWidth(100);
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  const prevStory = () => {
    if (position < 0) {
      setPosition(position + itemWidth);
    }
  };

  const nextStory = () => {
    if (projects && position > -itemWidth * (projects.length - Math.floor(100 / itemWidth))) {
      setPosition(position - itemWidth);
    }
  };

  return (
    <section id="success-stories" className="py-20 bg-[#f6f4f3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-[#003300] mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our solutions have made a positive impact for our clients across different industries.
          </p>
        </div>

        <div className="relative">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg h-96 animate-pulse">
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
          ) : (
            <div className="overflow-hidden">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${position}%)` }}
              >
                {projects?.map((project) => (
                  <div 
                    key={project.id} 
                    className={`min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4`}
                  >
                    <ProjectCard project={project} isCompact />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Carousel Controls */}
          {projects && projects.length > 0 && (
            <>
              <button
                onClick={prevStory}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#003300] ${
                  position === 0 ? 'bg-opacity-50 cursor-not-allowed' : 'bg-opacity-80 hover:bg-opacity-100'
                } text-white rounded-r-lg w-10 h-10 flex items-center justify-center z-10`}
                disabled={position === 0}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={nextStory}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#003300] ${
                  projects && position <= -itemWidth * (projects.length - Math.floor(100 / itemWidth)) 
                    ? 'bg-opacity-50 cursor-not-allowed' 
                    : 'bg-opacity-80 hover:bg-opacity-100'
                } text-white rounded-l-lg w-10 h-10 flex items-center justify-center z-10`}
                disabled={projects && position <= -itemWidth * (projects.length - Math.floor(100 / itemWidth))}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <a className="inline-block bg-[#005500] hover:bg-[#003300] text-white font-medium py-3 px-8 rounded-full transition">
              View More Projects
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
