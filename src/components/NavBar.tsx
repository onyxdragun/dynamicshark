import Contact from "@/components/Contact";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="w-full bg-transparent">
      <div className="max-w-3xl mx-auto px-4 py-2 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-3 my-2">
          <div className="rounded-full bg-blue-800 p-2 w-10 h-10 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-cyan-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </div>
          <span className="text-3xl font-bold tracking-tight text-white">Tyler Ingram</span>
        </Link>
        <div className="w-full flex items-center justify-center">
          <Contact />
        </div>
      </div>
    </header>
  );
}
