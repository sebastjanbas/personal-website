"use client";
import React from "react";
import "./_components/noisy-bg.modules.css";
import {
  BookOpen,
  BarChart3,
  Settings,
  ArrowRight,
  Monitor,
  Search,
  Play,
  Film,
  Server,
  Cloud,
  Code,
  Zap,
  Shield,
  Globe,
  Users,
  Clock,
  Star,
  ChevronDown,
  Sparkles,
  Layers,
  Cpu,
  GitBranch,
} from "lucide-react";
import { motion } from "motion/react";

const MovieAppPage = () => {
  const scrollY = 1;
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Immersive Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at ${20 + scrollY * 0.1}% ${
                30 + scrollY * 0.05
              }%, #ef4444 0%, transparent 50%),
                          radial-gradient(circle at ${80 - scrollY * 0.1}% ${
                70 - scrollY * 0.05
              }%, #3b82f6 0%, transparent 50%),
                          radial-gradient(circle at ${50 + scrollY * 0.05}% ${
                20 - scrollY * 0.1
              }%, #10b981 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-500/20 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-14 h-14 bg-purple-500/20 rounded-full animate-float"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={item}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-4 h-4" />
              Teads Summer School 2025
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 font-dmDisplay tracking-tight"
            variants={item}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Movie
            </motion.span>
            <motion.span
              className="inline-block ml-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 200,
              }}
            >
              <Film className="inline w-16 h-16 md:w-20 md:h-20 text-red-400" />
            </motion.span>
            <motion.span
              className="inline-block ml-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              App
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={item}
          >
            A cinematic journey through modern full-stack development. Discover
            how we built an enterprise-grade movie management platform that
            brings together the power of Spring Boot, Angular, and cutting-edge
            monitoring.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={item}
          >
            <motion.button
              className="group px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="flex items-center gap-2">
                Explore the Story
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View on GitHub
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-16"
            variants={item}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* The Story Begins */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            viewport={{ margin: "-200px" }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.5,
            }}
            className="text-center mb-20"
          >
            <motion.h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-dmDisplay tracking-tight">
              The Story Begins
            </motion.h2>
            <motion.p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every great application starts with a vision. Ours was to create
              something that would showcase the full spectrum of modern
              development practices.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-blue-500"></div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  The Challenge
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  As part of the Teads Summer School program, we were tasked
                  with building a comprehensive movie management platform that
                  would demonstrate enterprise-level development practices. The
                  goal wasn&apos;t just to create another movie app, but to
                  showcase the full stack of modern technologies working in
                  harmony.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">
                    Team
                  </div>
                  <div className="text-sm text-slate-600">
                    Teads Summer School
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">
                    Timeline
                  </div>
                  <div className="text-sm text-slate-600">Summer 2025</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">
                      Full-Stack Development
                    </h4>
                    <p className="text-slate-300">End-to-end solution</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Spring Boot REST API</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Angular Frontend</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>PostgreSQL Database</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Docker Containerization</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Technology Stack */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-dmDisplay tracking-tight">
              The Technology Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We carefully selected each technology to create a robust,
              scalable, and maintainable solution that showcases modern
              development practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Backend */}
            <div className="group relative bg-gradient-to-br from-red-50 to-rose-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Backend
                </h3>
                <p className="text-slate-600 mb-6">
                  The robust foundation that powers everything
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group-hover:text-red-600 transition-colors">
                    <div className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Spring Boot 3.5.3</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-red-600 transition-colors">
                    <div className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Java 21</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-red-600 transition-colors">
                    <div className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-red-600 transition-colors">
                    <div className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">JPA/Hibernate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Frontend
                </h3>
                <p className="text-slate-600 mb-6">
                  Modern, responsive user interface
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group-hover:text-blue-600 transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Angular 20.1.0</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-blue-600 transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-blue-600 transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Angular Material</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-blue-600 transition-colors">
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Angular Signals</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Monitoring
                </h3>
                <p className="text-slate-600 mb-6">
                  Complete observability stack
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group-hover:text-green-600 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Prometheus</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-green-600 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Grafana</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-green-600 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">ELK Stack</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-green-600 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Filebeat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  DevOps
                </h3>
                <p className="text-slate-600 mb-6">
                  Containerization & deployment
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group-hover:text-purple-600 transition-colors">
                    <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Docker</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-purple-600 transition-colors">
                    <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Docker Compose</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-purple-600 transition-colors">
                    <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">pgvector</span>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-purple-600 transition-colors">
                    <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="font-medium">Logback</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Features Journey */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-dmDisplay tracking-tight">
              The Features Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every feature tells a story of user experience and technical
              excellence. Here&apos;s how we crafted each capability to deliver
              maximum value.
            </p>
          </div>

          <div className="space-y-24">
            {/* Movie Discovery Story */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      Movie Discovery
                    </h3>
                    <p className="text-slate-600">
                      The gateway to cinematic exploration
                    </p>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We started with a simple question: &quot;How do people
                  discover movies they&apos;ll love?&quot; The answer led us to
                  integrate with The Movie Database (TMDB) API, creating a
                  seamless discovery experience that feels both powerful and
                  intuitive.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-red-500 mb-1">
                      500+
                    </div>
                    <div className="text-sm text-slate-600">Movies</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-500 mb-1">
                      Real-time
                    </div>
                    <div className="text-sm text-slate-600">Search</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      Rich
                    </div>
                    <div className="text-sm text-slate-600">Metadata</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-3xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="font-medium">
                        Popular movies browsing
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="font-medium">
                        Advanced search by name
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="font-medium">
                        Detailed movie metadata
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-float"></div>
              </div>
            </div>

            {/* Playlist Management Story */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="font-medium">
                        Custom playlist creation
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="font-medium">
                        Movie addition/removal
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="font-medium">Playlist organization</span>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      Playlist Management
                    </h3>
                    <p className="text-slate-600">
                      Personalized movie collections
                    </p>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Personalization was key. We built a robust playlist system
                  that allows users to curate their own movie collections, with
                  full CRUD operations and database persistence. It&apos;s not
                  just about storing movies—it&apos;s about creating meaningful
                  collections.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      Unlimited
                    </div>
                    <div className="text-sm text-slate-600">Playlists</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-500 mb-1">
                      Instant
                    </div>
                    <div className="text-sm text-slate-600">Updates</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-purple-500 mb-1">
                      Persistent
                    </div>
                    <div className="text-sm text-slate-600">Storage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring Story */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      Monitoring & Observability
                    </h3>
                    <p className="text-slate-600">Complete system visibility</p>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Enterprise-grade applications need enterprise-grade
                  monitoring. We integrated Prometheus, Grafana, and the ELK
                  stack to provide complete observability into our
                  application&apos;s performance, health, and user behavior.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-orange-500 mb-1">
                      Real-time
                    </div>
                    <div className="text-sm text-slate-600">Metrics</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-500 mb-1">
                      Visual
                    </div>
                    <div className="text-sm text-slate-600">Dashboards</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-green-500 mb-1">
                      Centralized
                    </div>
                    <div className="text-sm text-slate-600">Logging</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <span className="font-medium">Prometheus metrics</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="font-medium">Grafana dashboards</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="font-medium">ELK log aggregation</span>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Demo Experience */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-dmDisplay tracking-tight">
              See It In Action
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the Movie App through our comprehensive demo videos.
              Watch as we showcase each feature and the seamless integration
              between all components.
            </p>
          </div>

          <div className="space-y-16">
            {/* Main Demos */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="group relative">
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-3xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Server className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Backend API Demo
                      </h3>
                      <p className="text-slate-300">3:15 duration</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Explore the Spring Boot REST API endpoints, database
                    operations, and monitoring capabilities. See how the backend
                    handles movie data, playlist management, and integrates with
                    TMDB API.
                  </p>
                  <div className="flex items-center gap-2 text-red-400 font-medium group-hover:text-red-300 transition-colors">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-float"></div>
              </div>

              <div className="group relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Frontend Application
                      </h3>
                      <p className="text-slate-300">2:45 duration</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Experience the Angular frontend with Material Design, movie
                    browsing, search functionality, and playlist management.
                    Watch the seamless integration between frontend and backend.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>

            {/* Feature Demos */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Movie Discovery
                    </h4>
                    <p className="text-sm text-slate-400">1:30 duration</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  See how users discover popular movies, search by name, and
                  view detailed information.
                </p>
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                  <Play className="w-4 h-4" />
                  <span>Watch</span>
                </div>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Playlist Management
                    </h4>
                    <p className="text-sm text-slate-400">1:45 duration</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Watch the complete playlist workflow from creation to
                  management and organization.
                </p>
                <div className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  <Play className="w-4 h-4" />
                  <span>Watch</span>
                </div>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Monitoring & Analytics
                    </h4>
                    <p className="text-sm text-slate-400">2:00 duration</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Explore the monitoring stack with Prometheus, Grafana, and ELK
                  for insights.
                </p>
                <div className="flex items-center gap-2 text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
                  <Play className="w-4 h-4" />
                  <span>Watch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Architecture Story */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-dmDisplay tracking-tight">
              The Architecture Story
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every great application is built on solid foundations. Here&apos;s
              how we architected the Movie App to be scalable, maintainable, and
              production-ready.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-blue-500 to-green-500"></div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  The Foundation
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Layers className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">
                        Layered Architecture
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        We implemented a clean layered architecture where
                        Controllers handle HTTP requests, Services contain
                        business logic, Repositories manage data access, and
                        Entities map to database tables. This separation ensures
                        maintainability and testability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">
                        REST API Design
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Our REST API follows industry best practices with
                        well-structured endpoints for movies, playlists, and
                        monitoring. Each endpoint is documented and follows
                        consistent naming conventions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">
                        External Integration
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Seamless integration with The Movie Database (TMDB) API
                        provides comprehensive movie data and metadata. We
                        handle rate limiting, caching, and error scenarios
                        gracefully.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">
                        Monitoring & Observability
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Complete observability with Prometheus for metrics,
                        Grafana for visualization, and ELK stack for log
                        aggregation. We can track performance, errors, and user
                        behavior in real-time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">API Endpoints</h4>
                    <p className="text-slate-300">RESTful interface design</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-slate-300">Movies</span>
                    </div>
                    <code className="text-blue-400 font-mono text-sm">
                      /api/movies
                    </code>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">Search</span>
                    </div>
                    <code className="text-blue-400 font-mono text-sm">
                      /api/movies/n/{"{"}name{"}"}
                    </code>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300">Details</span>
                    </div>
                    <code className="text-blue-400 font-mono text-sm">
                      /api/movies/{"{"}id{"}"}
                    </code>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300">Streaming</span>
                    </div>
                    <code className="text-blue-400 font-mono text-sm">
                      /api/movies/{"{"}id{"}"}/streaming
                    </code>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">Playlists</span>
                    </div>
                    <code className="text-blue-400 font-mono text-sm">
                      /api/playlists
                    </code>
                  </div>

                  <div className="flex justify-between items-center py-4 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-300">Health</span>
                    </div>
                    <code className="text-blue-400 font-mono text-sm">
                      /actuator/health
                    </code>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey's End */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-dmDisplay tracking-tight">
              The Journey&apos;s End
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every great project has its highlights. Here are the key
              achievements and technical innovations that made this Movie App
              truly special.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-blue-500 to-green-500"></div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Key Achievements
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">
                        Enterprise Architecture
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Implemented layered architecture with Spring Boot 3.5.3,
                        Java 21, and modern development practices for
                        enterprise-grade applications that can scale.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <GitBranch className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">
                        Full-Stack Excellence
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Delivered both Spring Boot REST API and Angular frontend
                        with seamless integration and modern UI/UX design that
                        users love.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">
                        Production-Ready Monitoring
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Integrated complete observability stack with Prometheus,
                        Grafana, and ELK for production-ready monitoring and
                        logging that provides real-time insights.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Cloud className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">
                        DevOps Excellence
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Docker containerization with Docker Compose for easy
                        deployment and development environment setup that works
                        everywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">Technical Stack</h4>
                    <p className="text-slate-300">
                      Complete technology overview
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-slate-300">Backend</span>
                    </div>
                    <span className="text-blue-400 font-semibold">
                      Spring Boot 3.5.3
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">Language</span>
                    </div>
                    <span className="text-blue-400 font-semibold">Java 21</span>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300">Database</span>
                    </div>
                    <span className="text-blue-400 font-semibold">
                      PostgreSQL
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300">Frontend</span>
                    </div>
                    <span className="text-blue-400 font-semibold">
                      Angular 20.1.0
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-slate-700 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300">Build Tool</span>
                    </div>
                    <span className="text-blue-400 font-semibold">Maven</span>
                  </div>

                  <div className="flex justify-between items-center py-4 group hover:bg-slate-700/50 rounded-lg px-3 -mx-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-300">Containerization</span>
                    </div>
                    <span className="text-blue-400 font-semibold">Docker</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Final Call */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${30 + scrollY * 0.05}% ${
                40 + scrollY * 0.1
              }%, #ef4444 0%, transparent 50%),
                          radial-gradient(circle at ${70 - scrollY * 0.05}% ${
                60 - scrollY * 0.1
              }%, #3b82f6 0%, transparent 50%),
                          radial-gradient(circle at ${50 + scrollY * 0.1}% ${
                30 - scrollY * 0.05
              }%, #10b981 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-dmDisplay tracking-tight">
            Ready to Explore?
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The Movie App represents more than just a project—it&apos;s a
            testament to modern development practices, clean architecture, and
            the power of full-stack engineering. Dive into the code and see how
            it all comes together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://github.com/teads-sess-2025/MovieApp"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center gap-3">
                <GitBranch className="w-5 h-5" />
                Backend Repository
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="https://github.com/teads-sess-2025/MovieAppFrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <Monitor className="w-5 h-5" />
                Frontend Repository
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieAppPage;
