'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  

  return (
    <section className=" text-white py-12 px-6 bg-black" id='contact'>
      <div className="max-w-7xl mx-auto">
        {/* Contact Header */}
        <header className="max-w-6xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3 animate-fade-in-up">
            <span
              className="h-1.5 w-8 rounded-full bg-[#077b32] shadow-[0_0_25px_#077b32]"
              aria-hidden="true"
            />
            <p className="text-2xl md:text-4xl tracking-widest uppercase font-bold text-[color-mix(in_oklab,#077b32_80%,white_20%)] py-5 animate-pulse">
              Contact
            </p>
          </div>

          <p className="mt-4 max-w-4xl text-pretty leading-relaxed text-sm md:text-base animate-fade-in-up delay-150">
            Let&apos;s connect! I&apos;m currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
          </p>
        </header>

        {/* Social Icons - Fixed alignment */}
        <div className="max-w-6xl mx-auto flex justify-start space-x-6">
          {[
            { id: 'github', icon: <FaGithub size={24} />, href: 'https://github.com/AliKhan17dec' },
            { id: 'linkedin', icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/ali-khan-8694162b7/' },
            { id: 'email', icon: <FaEnvelope size={24} />, href: 'mailto:alikhan.dec17@gmail.com' },
          ].map(({ id, icon, href }) => (
            <a
              key={id}
              href={href}
              target={id === 'email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`p-3 rounded-full border-2 border-[#077b32] text-[#077b32] transition-all duration-300 hover:bg-[#077b32] hover:text-black hover:scale-110 hover:shadow-[0_0_15px_#077b32] focus:outline-none focus:ring-2 focus:ring-[#077b32] focus:scale-110 focus:shadow-[0_0_15px_#077b32]`}
              aria-label={id.charAt(0).toUpperCase() + id.slice(1)}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}