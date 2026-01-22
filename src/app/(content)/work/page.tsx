import React from "react";
import {
  Code,
  Globe,
  Users,
  ArrowRight,
  Award,
  Briefcase,
  Lightbulb,
  Target,
} from "lucide-react";
import { sharedMetadata } from "@/lib/docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Explore my work experience as a software engineer and full-stack developer. From personal projects to professional development, discover the skills and achievements that drive my passion for creating innovative solutions.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sebastjanbas.com/work",
    siteName: "Work Experience | Sebastjan Bas",
    images: [
      {
        url: "/open-graph-photo.png",
        width: 4096,
        height: 2304,
        alt: "Photo of Sebastjan Bas",
      },
    ],
  },
  ...sharedMetadata,
};

const hoverStyle =
  "inline-block translate-y-1 text-lg text-center leading-none md:after:block md:after:h-px md:after:origin-left md:after:scale-x-0 md:after:transition-transform md:after:duration-300 md:hover:after:scale-x-100 md:hover:tracking-wider transition-all will-change-transform text-foreground md:after:bg-foreground";

const WorkPage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-28 lg:overflow-visible lg:px-0 flex justify-center items-center bg-linear-to-b from-white to-[#D4EAF6]">
        <div className="mx-auto grid gap-x-8 grid-cols-1 lg:grid-cols-2 items-start gap-y-10 max-w-6xl w-full">
          <div className="col-span-1 lg:col-span-2 col-start-1 row-start-1 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:px-6">
            <div className="w-full lg:w-162.5">
              <div className="w-full">
                <p className="text-lg font-normal font-bebasNeue tracking-wider text-[#0978E7]">
                  Professional Journey
                </p>
                <h1 className="text-5xl md:text-6xl text-foreground mb-6 font-dmDisplay tracking-tight">
                  Work Experience
                </h1>
                <p className="text-lg text-foreground">
                  A passionate software engineer with 4+ years of programming
                  experience, specializing in full-stack development and
                  creating innovative solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="col-span-1 lg:col-span-2 col-start-1 row-start-2 mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-x-8">
            <div className="w-full lg:w-162.5">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-1 lg:p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    Experience
                  </h3>
                  <div className="text-base font-medium text-slate-800 space-y-1">
                    <p>4+ Years Programming</p>
                    <p>3+ Projects Completed</p>
                    <p>Full-Stack Development</p>
                    <p>Modern Web Technologies</p>
                  </div>
                </div>
                <div className="p-1 lg:p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    Focus Areas
                  </h3>
                  <div className="text-base font-medium text-slate-800 space-y-1">
                    <p>Frontend Development</p>
                    <p>Backend Architecture</p>
                    <p>Database Design</p>
                    <p>User Experience</p>
                  </div>
                </div>
                <div className="p-1 lg:p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    Education
                  </h3>
                  <p className="text-lg font-medium text-slate-800">
                    Currently Studying in US
                  </p>
                </div>
                <div className="p-1 lg:p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    Location
                  </h3>
                  <p className="text-lg font-medium text-slate-800">
                    Slovenia / US
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-foreground opacity-10 my-5" />

              {/* Navigation Links */}
              <div className="w-full lg:w-162.5">
                <div className="grid grid-cols-2 gap-5 lg:gap-6 mb-16 w-full">
                  <div className="p-1 lg:px-6">
                    <a
                      href="#experience"
                      className={hoverStyle}
                      style={{
                        transform: "translate3d(0,0,0)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Experience
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                  <div className="p-1 lg:px-6">
                    <a
                      href="#skills"
                      className={hoverStyle}
                      style={{
                        transform: "translate3d(0,0,0)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Skills
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                  <div className="p-1 lg:px-6">
                    <a
                      href="#projects"
                      className={hoverStyle}
                      style={{
                        transform: "translate3d(0,0,0)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Projects
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                  <div className="p-1 lg:px-6">
                    <a
                      href="#achievements"
                      className={hoverStyle}
                      style={{
                        transform: "translate3d(0,0,0)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Achievements
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-5 md:px-10 xl:px-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-dmDisplay tracking-tight">
              Professional Experience
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building innovative solutions and growing as a developer through
              diverse projects
            </p>
          </div>

          <div className="space-y-12">
            {/* Current Focus */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-slate-800">
                      Full-Stack Developer & Student
                    </h3>
                    <span className="text-blue-600 font-semibold">
                      2021 - Present
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Currently pursuing studies in the US while actively
                    developing personal and client projects. Focused on modern
                    web technologies and creating impactful digital solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Experience */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Slovene Step by Step
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Full-stack language learning platform with 1,200+
                      community members. Built complete booking system, payment
                      integration, and multi-language support.
                    </p>
                    <div className="text-sm text-slate-500">
                      <p>
                        <strong>Role:</strong> Full-Stack Developer, Product
                        Designer
                      </p>
                      <p>
                        <strong>Duration:</strong> 2024 - Present
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Movie App (Teads)
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Enterprise-level movie application built with Spring Boot
                      and Angular. Implemented complex business logic and
                      database optimization.
                    </p>
                    <div className="text-sm text-slate-500">
                      <p>
                        <strong>Role:</strong> Backend Developer
                      </p>
                      <p>
                        <strong>Duration:</strong> 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-5 md:px-10 xl:px-20 bg-linear-to-b from-[#D4EAF6] to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-dmDisplay tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key projects that showcase my development skills and
              problem-solving abilities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Slovene Step by Step
              </h3>
              <p className="text-slate-600 mb-4">
                Complete language learning platform with booking system,
                payments, and community features for 1,200+ users.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-sky-100 text-sky-800 rounded text-sm">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-sky-100 text-sky-800 rounded text-sm">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-sky-100 text-sky-800 rounded text-sm">
                  PostgreSQL
                </span>
              </div>
              <a
                href="/projects/slovene-step-by-step"
                className={`${hoverStyle} text-sky-600 md:after:bg-sky-600`}
                style={{
                  transform: "translate3d(0,0,0)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  View Project
                  <ArrowRight className="w-4 h-4 rotate-45" />
                </span>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Movie App
              </h3>
              <p className="text-slate-600 mb-4">
                Enterprise movie application with Spring Boot backend and
                Angular frontend, featuring complex business logic and database
                optimization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">
                  Spring Boot
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">
                  Angular
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">
                  PostgreSQL
                </span>
              </div>
              <a
                href="/projects/movie-app"
                className={`${hoverStyle} text-purple-600 md:after:bg-purple-600`}
                style={{
                  transform: "translate3d(0,0,0)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  View Project
                  <ArrowRight className="w-4 h-4 rotate-45" />
                </span>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Discord Bot
              </h3>
              <p className="text-slate-600 mb-4">
                Feature-rich Discord bot with moderation tools, music
                functionality, and custom commands for community management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                  Python
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                  Discord.py
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                  SQLite
                </span>
              </div>
              <a
                href="/projects/discord-bot"
                className={`${hoverStyle} text-green-600 md:after:bg-green-600`}
                style={{
                  transform: "translate3d(0,0,0)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  View Project
                  <ArrowRight className="w-4 h-4 rotate-45" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 px-5 md:px-10 xl:px-20 bg-linear-to-b from-white to-[#D4EAF6]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-dmDisplay tracking-tight">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Milestones and accomplishments that reflect my dedication to
              excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">5x</h3>
              <p className="text-slate-600">National Track & Field Champion</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">
                1:52.03
              </h3>
              <p className="text-slate-600">800m Personal Best</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">1,200+</h3>
              <p className="text-slate-600">Platform Users</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">4+</h3>
              <p className="text-slate-600">Years Programming</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-5 md:px-10 xl:px-20 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-dmDisplay tracking-tight">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to take on new challenges and collaborate on
            innovative projects. Let&apos;s create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div>
              <a
                href="mailto:sebastjan.bas@gmail.com"
                className={`${hoverStyle} text-white md:after:bg-white`}
                style={{
                  transform: "translate3d(0,0,0)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 rotate-45" />
                </span>
              </a>
            </div>
            <div>
              <a
                href="/about"
                className={`${hoverStyle} text-white md:after:bg-white`}
                style={{
                  transform: "translate3d(0,0,0)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 rotate-45" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
