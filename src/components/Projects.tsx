import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group bg-blue-950/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col p-4 h-full"
          >
            <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden bg-blue-900 flex items-center justify-center">
              {project.images && project.images.length > 0 ? (
                <Image
                  src={project.images[0]}
                  alt={project.title + " screenshot"}
                  className="object-cover object-top w-full h-full rounded-md"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={true}
                />
              ) : (
                <svg
                  className="w-16 h-16 text-cyan-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              )}
            </div>
            <div className="flex flex-col flex-grow">
              <div className="min-h-[56px] flex flex-col justify-start">
                <h3 className="text-lg font-semibold mb-1 flex items-baseline gap-2">
                  {project.title}
                  {project.status && (
                    <span className="italic text-xs text-yellow-300 font-normal">
                      {project.status}
                    </span>
                  )}
                </h3>
              </div>
              <p className="text-blue-100 text-sm mb-3 min-h-[48px]">
                {project.description}
              </p>
              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-3 min-h-[40px] items-start">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="inline-block rounded-full bg-cyan-100 text-cyan-900 px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <span className="mt-auto text-cyan-300 underline text-sm group-hover:text-cyan-200 transition-colors">
              View Details
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
