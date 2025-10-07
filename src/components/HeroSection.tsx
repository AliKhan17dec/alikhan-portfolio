'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  // Typewriter logic
  const texts = ['ALI KHAN', 'FULL STACK DEV'];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [animations, setAnimations] = useState({
    imageLoaded: false,
    h1Visible: false,
    typewriterVisible: false,
    pVisible: false,
    buttonsVisible: false,
  });

  const currentText = texts[loopNum % texts.length];

  // Typewriter effect
  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentText.length) {
          setText(currentText.substring(0, text.length + 1));
          setTypingSpeed(100);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (text.length > 0) {
          setText(currentText.substring(0, text.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, currentText]);

  // Blinking cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Simulate AOS delays with timeouts
  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimations((prev) => ({ ...prev, imageLoaded: true })), 0),
      setTimeout(() => setAnimations((prev) => ({ ...prev, h1Visible: true })), 700),
      setTimeout(() => setAnimations((prev) => ({ ...prev, typewriterVisible: true })), 900),
      setTimeout(() => setAnimations((prev) => ({ ...prev, pVisible: true })), 1100),
      setTimeout(() => setAnimations((prev) => ({ ...prev, buttonsVisible: true })), 1800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="w-full py-10 flex items-center justify-center px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-28 xl:gap-36 2xl:gap-44">
        {/* Image */}
        <div
          className={`relative w-[280px] sm:w-[320px] md:w-[450px] aspect-[3/4] rounded-[50%] overflow-hidden shadow-xl transition-all duration-1000 oval-container ${
            animations.imageLoaded ? 'animate-zoomOut' : 'opacity-0 scale-90'
          }`}
          style={{
            boxShadow: animations.imageLoaded ? '0 0 50px #077b32' : 'none',
          }}
        >
          <Image
            src="/picture.webp"
            alt="Ali Khan"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Content */}
        <div className="text-white w-full md:w-auto max-w-lg flex flex-col items-center md:items-start">
          <h1
            className={`text-4xl md:text-5xl font-normal transition-all duration-1000 ${
              animations.h1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            Hey I&apos;m
          </h1>

          <div
            className={`font-semibold text-4xl md:text-5xl mt-1 transition-all duration-1000 ${
              animations.typewriterVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="text-[#077b32]" style={{ textShadow: '0 0 10px #077b32' }}>
              {text}
            </span>
            <span
              className={`inline-block h-10 md:h-12 w-0.5 bg-[#077b32] ml-1 align-text-bottom transition-opacity ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          <p
            className={`mt-4 text-center md:text-left transition-all duration-1000 ${
              animations.pVisible ? 'opacity-100 rotate-x-0' : 'opacity-0 -rotate-x-90'
            }`}
            style={{
              fontSize: 'clamp(0.875rem, 0.5rem + 1vw, 1.125rem)',
              lineHeight: '1.6',
              transform: animations.pVisible ? 'rotateX(0deg)' : 'rotateX(-90deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            Turning ideas into reality through code and collaboration.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-wrap gap-4 mt-8 transition-all duration-1000 ${
              animations.buttonsVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <a
              href="#contact"
              className="px-8 py-3 flex items-center justify-center bg-[#077b32] text-white font-bold text-base rounded-md no-underline hover:scale-105 hover:bg-transparent hover:border-2 hover:border-[#077b32] hover:text-[#077b32] hover:shadow-[0_0_40px_#077b32] transition-all duration-300"
            >
              Hire me
            </a>
            <a
              href="/resume"
              target="_self"
              rel="noopener noreferrer"
              className="px-8 py-3 flex items-center justify-center bg-[#077b32] text-white font-bold text-base rounded-md no-underline hover:scale-105 hover:bg-transparent hover:border-2 hover:border-[#077b32] hover:text-[#077b32] hover:shadow-[0_0_40px_#077b32] transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Single global style block at root level — fixes build error */}
      <style jsx global>{`
        @keyframes zoomOut {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-zoomOut {
          animation: zoomOut 3s forwards;
        }

        .rotate-x-0 {
          transform: rotateX(0deg);
        }

        .-rotate-x-90 {
          transform: rotateX(-90deg);
        }

        /* Continuous zoom hover effect on the entire oval container */
        .oval-container:hover {
          animation: pulseZoom 2s infinite ease-in-out;
        }

        @keyframes pulseZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;