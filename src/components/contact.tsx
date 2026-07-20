'use client';

export default function ContactSection() {
  return (
    <section className="text-white py-16 px-4 sm:px-16 bg-black" id="contact">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Header & Vertical Social Links */}
        <div className="flex flex-col  h-full">
          <header className="mb-10 md:mb-14">
            <div className="inline-flex items-center gap-3 animate-fade-in-up">
              <span
                className="h-1.5 w-8 rounded-full bg-[#077b32] shadow-[0_0_25px_#077b32]"
                aria-hidden="true"
              />
              <p className="text-2xl md:text-4xl tracking-widest uppercase font-bold text-[color-mix(in_oklab,#077b32_80%,white_20%)] py-5 animate-pulse">
                Contact
              </p>
            </div>

            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-sm md:text-base text-gray-300 animate-fade-in-up delay-150">
              Let&apos;s connect! I&apos;m currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
            </p>
          </header>

          {/* Vertical Social Links with URLs */}
          <div className="flex flex-col space-y-6 animate-fade-in-up delay-200">
            {[
              { 
                id: 'github', 
                label: 'GitHub',
                url: 'github.com/AliKhan17dec',
                href: 'https://github.com/AliKhan17dec',
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                )
              },
              { 
                id: 'linkedin', 
                label: 'LinkedIn',
                url: 'linkedin.com/in/ali-khan-8694162b7/',
                href: 'https://www.linkedin.com/in/ali-khan-8694162b7/',
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )
              },
              { 
                id: 'email', 
                label: 'Email',
                url: 'alikhan.dec17@gmail.com',
                href: 'mailto:alikhan.dec17@gmail.com',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
            ].map(({ id, label, url, href, icon }) => (
              <a
                key={id}
                href={href}
                target={id === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
              >
                {/* Icon Circle */}
                <div className="p-3 rounded-full border-2 border-[#077b32] text-[#077b32] transition-all duration-300 group-hover:bg-[#077b32] group-hover:text-black group-hover:shadow-[0_0_15px_#077b32]">
                  {icon}
                </div>
                
                {/* Text Details */}
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 group-hover:text-[#077b32] transition-colors">
                    {label}
                  </span>
                  <span className="text-sm md:text-base text-white font-medium group-hover:text-[color-mix(in_oklab,#077b32_80%,white_20%)] transition-colors break-all">
                    {url}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form (One field per row) */}
        <div className="w-full animate-fade-in-up delay-300">
          <form className="space-y-2 bg-zinc-950/50 p-6 md:p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
            
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400">
                Name <span className="text-[#077b32]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#077b32] focus:ring-1 focus:ring-[#077b32] focus:shadow-[0_0_10px_rgba(7,123,50,0.3)] transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field (Optional) */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400">
                Email <span className="text-gray-600 text-xs">(Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#077b32] focus:ring-1 focus:ring-[#077b32] focus:shadow-[0_0_10px_rgba(7,123,50,0.3)] transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone Field (Optional) */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-400">
                Phone <span className="text-gray-600 text-xs">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#077b32] focus:ring-1 focus:ring-[#077b32] focus:shadow-[0_0_10px_rgba(7,123,50,0.3)] transition-all duration-300"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400">
                Message <span className="text-[#077b32]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-[#077b32] focus:ring-1 focus:ring-[#077b32] focus:shadow-[0_0_10px_rgba(7,123,50,0.3)] transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-[#077b32] text-white font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#056328] hover:shadow-[0_0_20px_#077b32] focus:outline-none focus:ring-2 focus:ring-[#077b32] focus:ring-offset-2 focus:ring-offset-black"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}