
import { useEffect, useRef } from "react";

const TrustedBy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  const logos = [
    { id: 1, name: "Company One" },
    { id: 2, name: "Company Two" },
    { id: 3, name: "Company Three" },
    { id: 4, name: "Company Four" },
    { id: 5, name: "Company Five" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisibleRef.current) {
          isVisibleRef.current = true;
          const logos = entry.target.querySelectorAll('.logo-item');
          logos.forEach((logo, index) => {
            setTimeout(() => {
              logo.classList.add('opacity-100', 'translate-y-0');
              logo.classList.remove('opacity-0', 'translate-y-4');
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-tarsonix-dark-blue">
      <div ref={containerRef} className="container mx-auto">
        <h2 className="text-center text-lg text-tarsonix-white/60 mb-10">TRUSTED BY INNOVATIVE COMPANIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="logo-item opacity-0 translate-y-4 transition-all duration-700 ease-out w-32 h-12 flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center glass rounded-md">
                <div className="text-tarsonix-white/50 font-display">{logo.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
