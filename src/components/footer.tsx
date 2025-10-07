'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-white text-2xl font-bold block">
              Ali <span className="text-[#077b32]">Khan</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about creating innovative web solutions 
              and delivering exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Project', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-[#077b32] transition-colors duration-300 text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaGithub, href: 'https://github.com/AliKhan17dec', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ali-khan-8694162b7', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:alikhan.dec17@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#077b32] transition-colors duration-300 text-xl"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-gray-400 text-sm">
                Let&apos;s work together to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear}. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-[#077b32] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#077b32] transition-colors">
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;