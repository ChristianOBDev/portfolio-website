import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-6 border-t-2 border-black bg-white text-center text-sm text-gray-700">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 px-4">
      <span>
        © {new Date().getFullYear()} Christian O'Brien. All rights reserved.
      </span>
      <div>
        Built with <span className="font-bold">React</span>,{" "}
        <span className="font-bold">TypeScript</span>, and{" "}
        <span className="font-bold">Tailwind CSS</span>.
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/ChristianOBDev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a href="mailto:christianob.dev@gmail.com" className="hover:underline">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
