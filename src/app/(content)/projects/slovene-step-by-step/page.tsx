import React from "react";
import {
  Globe,
  Users,
  BookOpen,
  Zap,
  Shield,
  CreditCard,
  BarChart3,
  Settings,
  ArrowRight,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { VideoPlaceholder } from "./_components/video-player";

const hoverStyle =
  "inline-block translate-y-1 text-lg text-center leading-none md:after:block md:after:h-[1px] md:after:origin-left md:after:scale-x-0 md:after:transition-transform md:after:duration-300 md:hover:after:scale-x-100 md:hover:tracking-wider transition-all will-change-transform text-foreground md:after:bg-foreground";

const SloPage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 flex justify-center items-center bg-gradient-to-b from-[#F1F0EA] to-white">
        <div className="mx-auto grid gap-x-8 grid-cols-2 items-start gap-y-10 max-w-6xl w-full">
          <div className="col-span-2 col-start-1 row-start-1 mx-auto grid grid-cols-2 gap-x-8 px-8 w-full">
            <div className="pr-4 w-[650px]">
              <div className="w-full">
                <p className="text-base/7 font-semibold font-bebasNeue tracking-wide text-[#0978E7]">
                  Project for a client
                </p>
                <h1 className="text-5xl md:text-6xl text-foreground mb-6 font-dmDisplay tracking-tight">
                  Slovene Step by Step
                </h1>
                <p className="text-lg text-foreground">
                  A modern, multilingual online language learning platform
                  designed to help users master Slovenian through personalized
                  lessons, interactive features, and community support.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-8 p-8 sticky top-40 col-start-2 row-span-2 row-start-1 overflow-hidden flex justify-end self-start ml-auto">
            <div className="w-[400px] h-[750px] bg-gradient-to-br from-orange-500/50 to-white rounded-[2.5rem]" />
          </div>

          {/* Project Info Cards */}
          <div className="col-span-2 col-start-1 row-start-2 mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-8 px-8">
            <div className="w-[650px] pr-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    Role
                  </h3>
                  <div className="text-base font-medium text-slate-800 space-y-1">
                    <p>Product Designer</p>
                    <p>UX/UI Designer</p>
                    <p>Frontend Developer</p>
                    <p>Backend Developer</p>
                    <p>Database Architect</p>
                    <p>DevOps Engineer</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    Deliverable
                  </h3>
                  <div className="text-base font-medium text-slate-800 space-y-1">
                    <p>Full-Stack Web Application</p>
                    <p>User Authentication System</p>
                    <p>Booking & Payment Integration</p>
                    <p>Multi-language Interface</p>
                    <p>Admin Dashboard</p>
                    <p>Progress Tracking System</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    Team
                  </h3>
                  <p className="text-lg font-medium text-slate-800">
                    Solo Project
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                    Date
                  </h3>
                  <p className="text-lg font-medium text-slate-800">
                    2024 - Present
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-foreground opacity-10 my-5" />

              {/* Links to other sections */}
              <div className="w-[650px] pr-4">
                <div className="grid grid-cols-2 gap-6 mb-16">
                  <div className="p-6">
                    <a
                      href="#overview"
                      className={hoverStyle}
                      style={{
                        transform: "translate3d(0,0,0)", // Forces GPU acceleration
                        WebkitFontSmoothing: "antialiased", // Improves text rendering
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Overview
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                  <div className="p-6">
                    <a
                      href="#features"
                      className={hoverStyle}
                      style={{
                        transform: "translate3d(0,0,0)", // Forces GPU acceleration
                        WebkitFontSmoothing: "antialiased", // Improves text rendering
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Features
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                  <div className="p-6">
                    <a
                      href="#features-action"
                      className={hoverStyle}
                      style={{
                        transform: "translate3d(0,0,0)", // Forces GPU acceleration
                        WebkitFontSmoothing: "antialiased", // Improves text rendering
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Features - Action
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                  <div className="p-6">
                    <a
                      href="#project-highlights"
                      className={hoverStyle}
                      style={{
                        transform: "translate3d(0,0,0)", // Forces GPU acceleration
                        WebkitFontSmoothing: "antialiased", // Improves text rendering
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Project Highlights
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

      {/* Overview Section */}
      <section id="overview" className="py-20 px-5 md:px-10 xl:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-dmDisplay tracking-tight">
                Overview
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Slovene Step by Step is a comprehensive online language learning
                platform that revolutionizes how people learn Slovene. Built
                with modern web technologies, it offers personalized lessons,
                community features, and a seamless learning experience.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The platform supports multiple learning formats including
                individual, pair, and group lessons conducted via Microsoft
                Teams and Zoom, making it accessible to learners worldwide.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Built with modern technologies for performance, scalability, and
                developer experience
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  Frontend
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-700">• Next.js 15</li>
                  <li className="text-slate-700">• TypeScript</li>
                  <li className="text-slate-700">• Tailwind CSS</li>
                  <li className="text-slate-700">• Radix UI</li>
                  <li className="text-slate-700">• Framer Motion</li>
                  <li className="text-slate-700">• GSAP</li>
                </ul>
              </div>

              {/* Backend */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Backend
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-700">• PostgreSQL</li>
                  <li className="text-slate-700">• Drizzle ORM</li>
                  <li className="text-slate-700">• Next.js API Routes</li>
                  <li className="text-slate-700">• Clerk Auth</li>
                  <li className="text-slate-700">• Server Actions</li>
                </ul>
              </div>

              {/* Payment & Communication */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-purple-600" />
                  Services
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-700">• Stripe</li>
                  <li className="text-slate-700">• Resend</li>
                  <li className="text-slate-700">• React Email</li>
                  <li className="text-slate-700">• Webhooks</li>
                </ul>
              </div>

              {/* Development */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-orange-600" />
                  Development
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-700">• Bun</li>
                  <li className="text-slate-700">• ESLint</li>
                  <li className="text-slate-700">• Drizzle Kit</li>
                  <li className="text-slate-700">• next-intl</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-5 md:px-10 xl:px-20 bg-gradient-to-b from-white to-[#D4EAF6]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-dmDisplay tracking-tight">
              Key Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive learning platform with advanced features for
              effective language acquisition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Learning Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Personalized Learning
              </h3>
              <p className="text-slate-600 mb-4">
                Tailored lessons for travel, work, or relocation goals with
                flexible online sessions via Teams and Zoom.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• 45-minute free trial lessons</li>
                <li>• Customized learning plans</li>
                <li>• Progress tracking dashboard</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Community Features
              </h3>
              <p className="text-slate-600 mb-4">
                Active community with 1,200+ members, language club events, and
                Telegram integration for practice.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Telegram community (1,200+ members)</li>
                <li>• Language club events</li>
                <li>• Cultural activities</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Multi-language Support
              </h3>
              <p className="text-slate-600 mb-4">
                Available in English, Slovenian, Russian, and Italian with
                next-intl internationalization.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• 4 language interfaces</li>
                <li>• Automatic locale detection</li>
                <li>• Localized content</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Payment Integration
              </h3>
              <p className="text-slate-600 mb-4">
                Seamless Stripe-powered booking and payment system with
                automated confirmations.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Stripe payment processing</li>
                <li>• Automated booking confirmations</li>
                <li>• Secure payment handling</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Analytics & Tracking
              </h3>
              <p className="text-slate-600 mb-4">
                Comprehensive dashboard with learning analytics, achievements,
                and progress monitoring.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Learning statistics</li>
                <li>• Progress visualization</li>
                <li>• Achievement system</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Admin Panel
              </h3>
              <p className="text-slate-600 mb-4">
                Complete management system for courses, users, and platform
                administration.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• User management</li>
                <li>• Course administration</li>
                <li>• Analytics dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features in Action - Video Demos */}
      <section
        id="features-action"
        className="py-20 px-5 md:px-10 xl:px-20 bg-gradient-to-b from-[#D4EAF6] to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-dmDisplay tracking-tight">
              Features in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch how the platform works with these comprehensive demo videos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <VideoPlaceholder
              title="Complete Booking Flow"
              description="See the entire process from lesson selection to payment confirmation. Watch how users can easily book individual, pair, or group lessons with our intuitive interface."
              duration="2:30"
              icon={Calendar}
            />

            <VideoPlaceholder
              title="Progress Tracking & Analytics"
              description="Explore the comprehensive dashboard where students can track their learning progress, view achievements, and monitor their language development over time."
              duration="1:45"
              icon={BarChart3}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <VideoPlaceholder
              title="Multi-language Interface"
              description="Experience seamless language switching between English, Slovenian, Russian, and Italian with real-time content translation and localized user experience."
              duration="1:20"
              icon={Globe}
            />

            <VideoPlaceholder
              title="Payment Integration"
              description="Watch the secure Stripe payment process in action, including booking confirmations, email notifications, and calendar integration."
              duration="1:15"
              icon={CreditCard}
            />

            <VideoPlaceholder
              title="Community Features"
              description="Discover how students connect through our Telegram community, participate in language club events, and engage with fellow learners."
              duration="1:30"
              icon={MessageCircle}
            />
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section
        id="project-highlights"
        className="py-20 px-5 md:px-10 xl:px-20 bg-gradient-to-b from-white to-[#D4EAF6]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-dmDisplay tracking-tight">
              Project Highlights
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key achievements and technical innovations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Modern Architecture
                    </h3>
                    <p className="text-slate-600">
                      Built with Next.js 15 App Router, TypeScript, and modern
                      React patterns for optimal performance and developer
                      experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-semibold text-sm">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Scalable Database Design
                    </h3>
                    <p className="text-slate-600">
                      PostgreSQL with Drizzle ORM for type-safe database
                      operations and efficient data management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Internationalization
                    </h3>
                    <p className="text-slate-600">
                      Full multi-language support with next-intl, supporting
                      English, Slovenian, Russian, and Italian.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Payment Integration
                    </h3>
                    <p className="text-slate-600">
                      Seamless Stripe integration with webhooks for automated
                      booking confirmations and payment processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Technical Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Framework</span>
                  <span className="font-semibold text-slate-800">
                    Next.js 15
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Language</span>
                  <span className="font-semibold text-slate-800">
                    TypeScript
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Database</span>
                  <span className="font-semibold text-slate-800">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Authentication</span>
                  <span className="font-semibold text-slate-800">Clerk</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Payments</span>
                  <span className="font-semibold text-slate-800">Stripe</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600">Deployment</span>
                  <span className="font-semibold text-slate-800">Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-5 md:px-10 xl:px-20 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-dmDisplay tracking-tight">
            Ready to Learn Slovenian?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our community of 1,200+ learners and start your Slovenian
            language journey today with a free trial lesson.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div>
              <a
                href="https://slovenscinakzk.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${hoverStyle} text-white md:after:bg-white`}
                style={{
                  transform: "translate3d(0,0,0)", // Forces GPU acceleration
                  WebkitFontSmoothing: "antialiased", // Improves text rendering
                }}
              >
                <span className="inline-flex items-center gap-2">
                  Visit Website
                  <ArrowRight className="w-5 h-5 rotate-45" />
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/sebastjanbas/slovene-step-by-step"
                target="_blank"
                rel="noopener noreferrer"
                className={`${hoverStyle} text-white md:after:bg-white `}
                style={{
                  transform: "translate3d(0,0,0)", // Forces GPU acceleration
                  WebkitFontSmoothing: "antialiased", // Improves text rendering
                }}
              >
                <span className="inline-flex items-center gap-2">
                  GitHub Repo
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

export default SloPage;
