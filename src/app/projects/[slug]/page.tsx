import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  if (!project) return notFound();
  const prevProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-cyan-100">
      <div className="relative max-w-2xl w-full bg-blue-950/90 rounded-xl shadow-lg p-8">
        {/* Navigation Icons Overlaid */}
        {prevProject && (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="absolute left-0 top-1/4 -translate-y-1/2 bg-blue-900/80 rounded-full p-2 hover:bg-cyan-300 hover:text-blue-950 text-cyan-100 transition-colors flex items-center z-10"
            aria-label={`Previous project: ${prevProject.title}`}
            style={{ transform: 'translateY(-25%) translateX(-50%)' }}
          >
            <FaArrowLeft className="w-7 h-7" />
          </Link>
        )}
        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="absolute right-0 top-1/4 -translate-y-1/2 bg-blue-900/80 rounded-full p-2 hover:bg-cyan-300 hover:text-blue-950 text-cyan-100 transition-colors flex items-center z-10"
            aria-label={`Next project: ${nextProject.title}`}
            style={{ transform: 'translateY(-25%) translateX(50%)' }}
          >
            <FaArrowRight className="w-7 h-7" />
          </Link>
        )}
        {project.images && (
          <Image
            src={project.images[0]}
            alt={project.title + " screenshot"}
            className="w-full rounded-lg mb-4 border border-blue-900 shadow object-cover object-top"
            width={800}
            height={400}
            priority={true}
          />
        )}
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          {project.title}
          {project.status && (
            <span className="italic text-xs text-yellow-300 font-normal">
              {project.status}
            </span>
          )}
        </h1>
        {project.date && (
          <div className="text-xs text-cyan-400 mb-2">{project.date}</div>
        )}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech?.map((item) => (
            <span
              key={item}
              className="inline-block rounded-full bg-cyan-100 text-cyan-900 px-3 py-1 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mb-4 text-cyan-200">{project.details}</p>
        {project.features && project.features.length > 0 && (
          <ul className="mb-4 list-disc list-inside text-cyan-100/90">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 font-semibold px-4 py-2 rounded transition-colors duration-200 hover:bg-cyan-300 hover:text-blue-950 hover:shadow"
            >
              View Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 font-semibold flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 hover:bg-cyan-300 hover:text-blue-950 hover:shadow"
            >
              <FaGithub className="w-5 h-5" />
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
