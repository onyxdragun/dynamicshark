import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-2 text-cyan-200 capitalize">
              {category
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillList.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-cyan-800/80 text-cyan-100 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
