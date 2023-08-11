import {
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	tripguide,
	threejs,
	flut,
	react,
	node,
  capture,
  t,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Skill",
	},
	{
		id: "project",
		title: "Project",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Flutterflow Developer",
		icon: flut,
	},
	{
		title: "React Native Developer",
		icon: react,
	},
	{
		title: "Backend Developer",
		icon: node,
	},
	{
		title: "Frontend Developer",
		icon: react,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Flutterflow Developer",
		company_name: "Projects",
		icon: flut,
		iconBg: "#fff",
		date: "From 2022",
		points: [
			"Designing and building the best best mobile app interface.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring it looks good on all mobile devices.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Frontend Developer",
		company_name: "Hospital Connects",
		icon: react,
		iconBg: "#fff",
		date: "Jan 2020 ",
		points: [
			"Developing and maintaining web applications using React.js, Nextjs, CSS, SCSS, HTML and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Backend Developer",
		company_name: "Hospital Connects",
		icon: node,
		iconBg: "#fff",
		date: "",
		points: [
			"Developing and maintaining web API using Nodejs, Python and Golang",
			"Collaborating with cross-functional teams including devops engineer, product managers, and other backend developers to create high-quality products.",
			"Implementing high scalable application.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Hospital connect and freelance",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "",
		points: [
			"Developing and maintaining web applications using React.js, Nodejs and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website and mobile application as beautiful as our product, but Johnson supprised me with the best product",
		name: "Sara Lee",
		designation: "CFO",
		company: "ArmyDoe",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Johnson does.",
		name: "Chris Brown",
		designation: "COO",
		company: "Hospital Connect",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"Johnson is a professional and certified flutterflow developer that you can have 100% trust in.",
		name: "Lisa Wang",
		designation: "CTO",
		company: "Travella",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Hospital Application",
		description:
			"Mobile application that allows users to create and secure hospital appointment at the comfort zone. This application enables users to bookn appointment, register and alot more.",
		tags: [
			{
				name: "flutterflow",
				color: "blue-text-gradient",
			},
			{
				name: "Firebase",
				color: "green-text-gradient",
			},
			{
				name: "Figma",
				color: "pink-text-gradient",
			},
		],
		image: capture,
		source_code_link: "https://app.flutterflow.io/run/2GgmGhRaLrPUaxBabMev",
	},
	{
		name: "Job IT",
		description:
			"Flutterflow mobile application for transportation and travellers",
		tags: [
			{
				name: "Flutterflow",
				color: "blue-text-gradient",
			},
			{
				name: "Figma",
				color: "green-text-gradient",
			},
			{
				name: "firebase",
				color: "pink-text-gradient",
			},
		],
		image: t,
		source_code_link: "https://app.flutterflow.io/run/Racft2yImU7eauHnw6ik",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "tidb",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/jopaleti",
	},
];

export { services, technologies, experiences, testimonials, projects };
