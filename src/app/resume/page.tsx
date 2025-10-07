import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <title className="">My Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-black py-5 px-5 sm:px-0">
        <div className="max-w-4xl mx-auto bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-5 text-center text-black">My Resume</h1>

          {/* Embed the PDF file */}
          <iframe 
            src="/resume//Ali's Resume-2.pdf" 
            className="w-full h-[600px] border-0"
            title="My Resume PDF"
          />

          {/* Download Button */}
          <div className="mt-5">
            <a 
              href="/resume/Ali's Resume-2.pdf" 
              download="AliKhan_Resume.pdf"
              className="inline-block bg-[#077b32] hover:bg-[white] text-white hover:text-[#077b32] border border-[#077b32] py-2.5 px-5 rounded-lg text-base font-medium transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </>
  );
}