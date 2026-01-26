import Github from "@/components/logos/social-media/github";
import Instagram from "@/components/logos/social-media/instagram";
import LinkedIn from "@/components/logos/social-media/linked-in";
import XLogo from "@/components/logos/social-media/x";

export const PROJECT_DATA = [
    {
        name: "Slovenščina Korak za Korakom",
        category: "Full stack Development",
        highlight: "Learning Platform",
        year: "2024 - Present",
        content: {
            description: "An online platform for learning Slovenian through personalized tutoring, flexible scheduling, on demand course work with exercises.",
            link: "https://slovenscinakzk.com",
            technologies: ["Nextjs", "Clerk", "Git"],
            moreInfoLink: "/projects/slovenscinakzk",
            imageLinks: [{
                link: "/images/projects/slovenscinakzk/1.png",
                alt: "Photo of a landing page in light and dark theme",
            }, {
                link: "/images/projects/slovenscinakzk/2.png",
                alt: "Photo of a user dashboard in light and dark theme",
            }, {
                link: "/images/projects/slovenscinakzk/3.png",
                alt: "Photo of a calendar scheduler in light and dark theme",
            },
            ]
        }
    },
    {
        name: "Teads Summer School Project",
        category: "Full stack Development",
        highlight: "Full stack project with monitoring",
        year: "2025",
        content: {
            description: "Movie Discovery and Management Application, with database integration, backend APIs, advanced monitoring and containerization",
            link: "#",
            technologies: ["Angular", "Spring Boot", "PostgreSQL", "Prometheus", "Grafana", "ElasticSearch", "Kibana", "Filebeat", "Docker"],
            moreInfoLink: "#",
            imageLinks: [{
                link: "/images/projects/teads-summer-school/2.png",
                alt: "Photo of a movie browse page",
            }, {
                link: "/images/projects/teads-summer-school/1.png",
                alt: "Avatar: Fire and Ash movie description page",
            }, {
                link: "/images/projects/teads-summer-school/3.png",
                alt: "Grafana dashboard with custom metrics",
            },
            ]
        }
    },
    {
        name: "Real Time Collaborative Code Analysis Tool",
        category: "Full stack Development",
        highlight: "Real time with sockets",
        year: "In development",
        content: {
            description: "This project is a browser-based collaborative code editor featuring real-time multi-user editing with Operational Transformation, an integrated terminal emulator with sandboxing, and a file structure system built on Monaco Editor.",
            link: "https://github.com/Real-Time-Code",
            technologies: ["Node.js", "Vite", "Socket.io", "Expres.js", "xterm"],
            moreInfoLink: "#",
            imageLinks: [{
                link: "/images/projects/realtime-app/1.png",
                alt: "Coming Soon",
            }, {
                link: "/images/projects/realtime-app/1.png",
                alt: "Coming Soon",
            }, {
                link: "/images/projects/realtime-app/1.png",
                alt: "Coming Soon",
            },
            ]
        }
    }
]

export const sharedMetadata = [
    {
        twitter: {
            card: "summary_large_image",
            site: "@sebastjanbas",
            creator: "@sebastjanbas",
        },
    },
    {
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    },
];

export const SOCIAL_MEDIA_LINKS = [
    {
        id: 1,
        name: "Github",
        href: "https://github.com/sebastjanbas",
        Component: Github,
    },
    {
        id: 2,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sebastjan-bas-604b5b271/",
        Component: LinkedIn,
    },
    {
        id: 3,
        name: "Instagram",
        href: "https://www.instagram.com/sebastjan.bas/",
        Component: Instagram,
    },
    {id: 4, name: "X", href: "https://x.com/SebastjanBas", Component: XLogo},
];
