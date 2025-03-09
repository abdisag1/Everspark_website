import { useState, useEffect, useRef } from 'react';

const partners = [
  { name: 'Partner 1' },
  { name: 'Partner 2' },
  { name: 'Partner 3' },
  { name: 'Partner 4' },
  { name: 'Partner 5' },
  { name: 'Partner 6' },
  { name: 'Partner 7' },
  { name: 'Partner 8' },
];

const PartnersSection = () => {
  const [position, setPosition] = useState(0);
  const animationRef = useRef<number>();
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const animate = () => {
      setPosition((prevPosition) => {
        // Reset to beginning when all logos are scrolled through
        if (prevPosition <= -100) {
          return 0;
        }
        // Move by 0.5% each frame
        return prevPosition - 0.5;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-[#003300] mb-4">Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading organizations to deliver exceptional solutions.
          </p>
        </div>
        
        <div className="overflow-hidden relative">
          <div 
            ref={sliderRef}
            className="flex items-center py-6"
            style={{
              transform: `translateX(${position}%)`,
              transition: 'transform 0.5s linear',
              width: '200%', // Double width to allow for continuous scrolling
            }}
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="px-6 grayscale hover:grayscale-0 transition">
                <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-heading font-semibold">{partner.name}</span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for continuous scrolling */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="px-6 grayscale hover:grayscale-0 transition">
                <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-heading font-semibold">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
