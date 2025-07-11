import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="my-2 flex flex-col items-center w-full">
      <div className="w-full">
        <div className="flex gap-6 bg-white/70 backdrop-blur-sm rounded-lg px-8 py-3 my-1 items-center justify-center max-w-full mx-auto">
          <a
            href="https://www.linkedin.com/in/tyleringram/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:underline"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/onyxdragun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:underline"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-gray-600 hover:underline"
          >
            <FaEnvelope className="w-5 h-5" />
            Email
          </Link>
        </div>
      </div>
    </section>
  );
}
