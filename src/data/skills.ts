export interface Skills {
  frontend: string[];
  backend: string[];
  devops: string[];
  tools: string[];
  languages: string[];
  networking: string[];

}

export const skills: Skills = {
  frontend: [
    "React", "Redux", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Responsive Design"
  ],
  backend: [
    "Node.js", "Express.js", "PHP", "RESTful APIs", "MySQL", "MariaDB"
  ],
  devops: [
    "Linux", "Nginx", "DigitalOcean", "AWS", "Google Firebase", "Deploy & Run Websites (Linux)"
  ],
  tools: [
    "Git", "GitHub", "Bitbucket", "Agile/Scrum", "Jira", "Windows", "MacOS"
  ],
  languages: [
    "C", "C++", "Python", "Shell/Bash"
  ],
  networking: [
    "TCP/IP", "UDP", "IPtables"
  ]
};
