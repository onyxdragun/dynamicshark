export interface Project {
  slug: string;
  title: string;
  description: string;
  details: string;
  images?: string[];
  url: string;
  status?: string; // e.g. "Work in Progress", "Coming Soon"
  tech?: string[];
  repo?: string;
  features?: string[];
  date?: string;
}

export const projects: Project[] = [
  {
    slug: "tyleringram-dot-com",
    title: "TylerIngram.com",
    description: "My personal photography portfolio site.",
    status: "WIP",
    details: "Built with React and Next.js, styled using Tailwind CSS. Features a responsive, mobile-first design with a masonry gallery and lazy loading for optimal image experience. Photos are uploaded, optimized as WebP, and stored securely on Amazon S3. Data is managed with a MariaDB database accessed via a RESTful API.",
    tech: ["React", "Next.js", "Tailwind CSS", "Masonry Gallery", "Lazy Loading", "Amazon S3", "MariaDB", "REST API"],
    images: ["/images/tyleringramdotcom.png"],
    url: "https://tyleringram.com",
    repo: "https://github.com/yourusername/tyleringram-dot-com",
    features: [
      "Responsive design",
      "Masonry gallery",
      "Amazon S3 image storage",
      "Lazy loading for images"
    ],
    date: "2025-06"
  },
  {
    slug: "kidfuns-dot-ap",
    title: "KidFuns.app",
    description: "Web-based Allowance Tracker for Parents",
    status: "Live",
    details: "Built with a React and Redux front end styled using SCSS. The backend is a Node.js RESTful API using Express.js and MariaDB for data storage.",
    tech: ["React", "Redux", "SCSS", "Node.js", "Express.js", "MariaDB", "REST API"],
    images: ["/images/kidfuns.jpg"],
    url: "https://kidfuns.app",
    repo: "https://github.com/onyxdragun/KidFuns-Public",
    features: [
      "Allowance tracking",
      "Parent/child account management",
      "Responsive UI"
    ],
    date: "2024-11"
  },
  {
    slug: "photography-client-gallery",
    title: "Photography Client Photo Gallery",
    description: "Upload and share private, full-resolution galleries with photography clients. Clients can view, download all, or select favourites from their personal galleries.",
    status: "WIP",
    details: "Work in progress. Built with a React and Tailwind CSS front end. Backend is Node.js with Express and MariaDB, with images stored securely on Amazon S3.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MariaDB", "Amazon S3"],
    images: ["/images/photographyclientgallery.png"],
    url: "#",
    repo: "https://github.com/yourusername/photography-client-gallery",
    features: [
      "Private client galleries",
      "Full-resolution downloads",
      "Favorites selection"
    ],
    date: "2025-01"
  },
  {
    slug: "garage-sale-tracking",
    title: "Garage Sale Tracking",
    description: "Search and plan out your garage/yard sales in your area.",
    status: "WIP",
    details: "Coming soon. Built with a React and Tailwind CSS front end, Next.js backend, and MariaDB. Features Google oAuth for account management and Google Maps API integration.",
    tech: ["React", "Tailwind CSS", "Next.js", "MariaDB", "Google oAuth", "Google Maps API"],
    images: ["/images/gaagetracker.png"],
    url: "#",
    repo: "https://github.com/yourusername/garage-sale-tracking",
    features: [
      "Garage/yard sale search",
      "Google Maps integration",
      "Account management with Google oAuth"
    ],
    date: "2025-07"
  }
];
