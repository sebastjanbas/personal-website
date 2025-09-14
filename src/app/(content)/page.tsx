import HeroSection from "@/components/content/herro-section";
import ProjectsSection from "@/components/content/projects-section";
import { Code, Database, Smartphone, Zap } from "lucide-react";
import ThreeDCard from "@/components/ui/3d-card";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Skills Section */}
      <section
        id="skills"
        className="w-full py-20 px-5 md:px-10 xl:px-20 bg-gradient-to-t from-white to-[#D4EAF6] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-dmDisplay tracking-tight">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive expertise across modern web development technologies
            </p>
          </div>

          <div className="grid md:grid-cols-8 md:grid-rows-6 gap-8">
            {/* Backend */}
            <div className="md:col-span-5 md:row-span-3 w-full">
              <ThreeDCard>
                <div className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    Backend Development
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-slate-700">• Node.js & Express</li>
                    <li className="text-slate-700">• Spring Boot</li>
                    <li className="text-slate-700">• PostgreSQL</li>
                    <li className="text-slate-700">• Drizzle ORM</li>
                    <li className="text-slate-700">• API Design</li>
                    <li className="text-slate-700">• Server Actions</li>
                  </ul>
                </div>
              </ThreeDCard>
            </div>

            {/* Frontend */}
            <div className="md:col-span-3 md:row-span-3 w-full">
              <ThreeDCard>
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    Frontend Development
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-slate-700">• React & Next.js</li>
                    <li className="text-slate-700">• TypeScript</li>
                    <li className="text-slate-700">• Tailwind CSS</li>
                    <li className="text-slate-700">• Framer Motion</li>
                    <li className="text-slate-700">• GSAP</li>
                    <li className="text-slate-700">• Radix UI</li>
                  </ul>
                </div>
              </ThreeDCard>
            </div>

            {/* Tools & Services */}
            <div className="md:col-span-3 md:row-span-3 w-full">
              <ThreeDCard>
                <div className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    Tools & Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-slate-700">• Stripe Payments</li>
                    <li className="text-slate-700">• Clerk Auth</li>
                    <li className="text-slate-700">• Vercel Deployment</li>
                    <li className="text-slate-700">• Git & GitHub</li>
                    <li className="text-slate-700">• Docker</li>
                    <li className="text-slate-700">• Webhooks</li>
                  </ul>
                </div>
              </ThreeDCard>
            </div>

            {/* Languages */}
            <div className="md:col-span-5 md:row-span-3 w-full">
              <ThreeDCard>
                <div className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <Code className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    Programming Languages
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-slate-700">• TypeScript/JavaScript</li>
                    <li className="text-slate-700">• Python</li>
                    <li className="text-slate-700">• Java</li>
                    <li className="text-slate-700">• SQL</li>
                    <li className="text-slate-700">• HTML/CSS</li>
                    <li className="text-slate-700">• Shell Scripting</li>
                  </ul>
                </div>
              </ThreeDCard>
            </div>
          </div>
        </div>
      </section>
      <ProjectsSection />
    </>
  );
}
