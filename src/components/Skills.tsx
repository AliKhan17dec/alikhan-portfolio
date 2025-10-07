'use client';

import { useEffect, useState } from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'NextJs' },
    { name: 'ReactJs' },
    { name: 'NodeJs' },
    { name: 'ExpressJs' },
    { name: 'NestJs' },
    { name: 'Typescript' },
    { name: 'Python' },
    { name: 'AWS' },
    { name: 'Linux' },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="skills"
      className="w-full py-20 px-4 md:px-8 relative overflow-hidden max-w-7xl mx-auto"
      style={{ backgroundColor: 'black' }}
    >
      <div className="w-full  mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            <span className="text-2xl md:text-4xl tracking-widest uppercase font-bold text-[color-mix(in_oklab,#077b32_80%,white_20%)] py-5 animate-pulse">SKILLS</span>
            <span
              className="absolute inset-0 bg-[#077b32] opacity-20 rounded-full blur-2xl"
              style={{ transform: 'scale(1.2)' }}
            ></span>
          </h2>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            My technical toolkit that helps me build powerful and beautiful digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative w-40 h-40 md:w-48 md:h-48 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Neon Green Shadow Layer */}
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  filter: 'blur(12px)',
                  backgroundColor: '#00ff00',
                  boxShadow: `
                    0 0 20px #00ff00,
                    0 0 40px #00ff00,
                    0 0 60px #00ff00,
                    0 0 80px #00ff00
                  `,
                  transform: 'scale(1.05)',
                  zIndex: 0,
                  animation: 'neonPulse 3s ease-in-out infinite alternate',
                }}
              ></div>

              {/* Glowing Back Layer */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  backgroundColor: '#077b32',
                  boxShadow: `
                    0 0 15px #00ff88,
                    0 0 30px rgba(0, 255, 136, 0.6),
                    0 0 45px rgba(0, 255, 136, 0.4),
                    inset 0 0 15px rgba(0, 255, 136, 0.3)
                  `,
                  animation: 'hexLightningGlow 2.5s ease-in-out infinite alternate',
                  zIndex: 1,
                }}
              ></div>

              {/* Content: Black Hexagon */}
              <div
                className="absolute inset-1 flex items-center justify-center transition-all duration-300 hover:inset-0.5"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  backgroundColor: '#000',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  boxShadow: 'inset 0 0 20px rgba(0, 255, 136, 0.2)',
                  zIndex: 2,
                }}
              >
                <span 
                  className="text-white font-bold text-lg md:text-xl text-center px-2 transition-all duration-300"
                  style={{
                    textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88'
                  }}
                >
                  {skill.name}
                </span>
              </div>

              {/* Additional Neon Glow Effect */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  backgroundColor: 'transparent',
                  boxShadow: `
                    0 0 30px #00ff00,
                    0 0 60px #00ff00,
                    0 0 90px #00ff00
                  `,
                  filter: 'blur(8px)',
                  animation: 'neonSpread 4s ease-in-out infinite alternate',
                  zIndex: 0,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes hexLightningGlow {
          0% {
            box-shadow:
              0 0 15px #00ff88,
              0 0 30px rgba(0, 255, 136, 0.6),
              0 0 45px rgba(0, 255, 136, 0.4),
              inset 0 0 10px rgba(0, 255, 136, 0.2);
          }
          100% {
            box-shadow:
              0 0 25px #00ff88,
              0 0 50px rgba(0, 255, 136, 0.9),
              0 0 75px rgba(0, 255, 136, 0.7),
              inset 0 0 20px rgba(0, 255, 136, 0.4);
          }
        }

        @keyframes neonPulse {
          0% {
            opacity: 0.5;
            transform: scale(1.05);
            box-shadow:
              0 0 15px #00ff00,
              0 0 30px #00ff00,
              0 0 45px #00ff00;
          }
          100% {
            opacity: 0.8;
            transform: scale(1.1);
            box-shadow:
              0 0 25px #00ff00,
              0 0 50px #00ff00,
              0 0 75px #00ff00;
          }
        }

        @keyframes neonSpread {
          0% {
            opacity: 0.2;
            transform: scale(1);
            box-shadow:
              0 0 20px #00ff00,
              0 0 40px #00ff00;
          }
          100% {
            opacity: 0.4;
            transform: scale(1.15);
            box-shadow:
              0 0 40px #00ff00,
              0 0 80px #00ff00;
          }
        }

        /* Hover effects */
        .relative:hover .absolute:nth-child(1) {
          animation-duration: 1s;
        }

        .relative:hover .absolute:nth-child(2) {
          animation-duration: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;