import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";

export const metadata = {
	title: "DynamicShark | Tyler Ingram Portfolio",
	description:
		"Portfolio of Tyler Ingram – Web developer specializing in React, Next.js, Node.js, and modern web technologies. Explore projects, skills, and contact info.",
	openGraph: {
		title: "DynamicShark | Tyler Ingram Portfolio",
		description:
			"Portfolio of Tyler Ingram – Web developer specializing in React, Next.js, Node.js, and modern web technologies. Explore projects, skills, and contact info.",
		url: "https://dynamicshark.com", // Update to your real domain
		siteName: "DynamicShark",
		images: [
			{
				url: "/og-image.png", // Place a suitable image in /public
				width: 1200,
				height: 630,
				alt: "DynamicShark Portfolio Preview",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "DynamicShark | Tyler Ingram Portfolio",
		description:
			"Portfolio of Tyler Ingram – Web developer specializing in React, Next.js, Node.js, and modern web technologies.",
		images: ["/og-image.png"],
	},
};

export default function Home() {
	return (
		<main className="min-h-screen text-white">
			<div className="max-w-3xl mx-auto px-4 py-2">
				<Introduction />

				<Projects />

				<Skills />
			</div>
		</main>
	);
}
