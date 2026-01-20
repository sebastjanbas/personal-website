import React from "react";
import {
  Music,
  ShoppingCart,
  Gamepad2,
  Bot,
  Code,
  Database,
  Settings,
  ArrowRight,
  Github,
  AlertTriangle,
} from "lucide-react";
import "../slovene-step-by-step/_components/noisy-bg.modules.css";

const hoverStyle =
  "inline-block translate-y-1 text-lg text-center leading-none md:after:block md:after:h-px md:after:origin-left md:after:scale-x-0 md:after:transition-transform md:after:duration-300 md:hover:after:scale-x-100 md:hover:tracking-wider transition-all will-change-transform text-foreground md:after:bg-foreground";

const DiscordBotPage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-28 lg:overflow-visible lg:px-0 flex justify-center items-center">
        <div className="mx-auto grid gap-x-8 grid-cols-1 lg:grid-cols-2 items-start gap-y-10 max-w-6xl w-full">
          <div className="col-span-1 lg:col-span-2 col-start-1 row-start-1 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:px-6">
            <div className="w-full lg:w-[650px]">
              <div className="w-full">
                <div className="noisy-bg2 lg:hidden w-full h-[200px] rounded-[2.5rem] mb-10 flex justify-center items-center">
                  <h1 className="inline-flex items-center gap-2 text-3xl md:text-5xl font-bebasNeue font-bold">
                    Olympy
                    <Bot className="size-12 md:size-20" />
                    Discord Bot
                  </h1>
                </div>
                <p className="text-lg font-normal font-bebasNeue tracking-wider">
                  Personal Project
                </p>
                <h1 className="text-5xl md:text-6xl mb-6 font-dmDisplay tracking-tight">
                  Olympy Discord Bot
                </h1>
                <p className="text-lg">
                  A feature-rich Discord bot built with Python and discord.py,
                  featuring music playback, Amazon product scraping, and
                  entertainment commands. Originally developed in 2021-2022 as a
                  comprehensive server management tool.
                </p>
                <div className="mt-4 p-4 bg-yellow-500/20 border w-fit border-yellow-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    <p className="text-sm font-medium">
                      Note: Music features are no longer functional due to
                      YouTube policy changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex -mt-8 p-8 sticky top-40 col-start-3 row-span-2 row-start-1 overflow-hidden justify-end self-start ml-auto">
            <div className="noisy-bg2 w-[400px] h-[750px] rounded-[2.5rem] flex justify-center items-center">
              <h1 className="flex flex-col items-center gap-2 text-5xl font-bebasNeue font-bold">
                Olympy
                <Bot className="size-20" />
                Discord Bot
              </h1>
            </div>
          </div>

          {/* Project Info Cards */}
          <div className="col-span-1 lg:col-span-2 col-start-1 row-start-2 mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-x-8">
            <div className="w-full lg:w-[650px]">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-1 lg:p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">
                    Role
                  </h3>
                  <div className="text-base font-medium space-y-1 text-slate-800">
                    <p>Bot Developer</p>
                    <p>Web Scraping</p>
                    <p>System Architecture</p>
                  </div>
                </div>
                <div className="p-1 lg:p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">
                    Deliverable
                  </h3>
                  <div className="text-base font-medium space-y-1 text-slate-800">
                    <p>Discord Bot Application</p>
                    <p>Music Streaming System</p>
                    <p>Amazon Product Scraper</p>
                    <p>Entertainment Commands</p>
                  </div>
                </div>
                <div className="p-1 lg:p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">
                    Team
                  </h3>
                  <p className="text-lg font-medium text-slate-800">
                    Solo Project
                  </p>
                </div>
                <div className="p-1 lg:p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">
                    Date
                  </h3>
                  <p className="text-lg font-medium text-slate-800">
                    2021 - 2022
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-foreground opacity-10 my-5" />

              {/* Links to other sections */}
              <div className="w-full lg:w-[650px]">
                <div className="grid grid-cols-2 gap-5 lg:gap-6 mb-16 w-full">
                  <div className="p-1 lg:px-6">
                    <a
                      href="#overview"
                      className={`${hoverStyle} `}
                      style={{
                        transform: "translate3d(0,0,0)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Overview
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                  <div className="p-1 lg:px-6">
                    <a
                      href="#features"
                      className={`${hoverStyle} `}
                      style={{
                        transform: "translate3d(0,0,0)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Features
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                  <div className="p-1 lg:px-6">
                    <a
                      href="#commands"
                      className={`${hoverStyle} `}
                      style={{
                        transform: "translate3d(0,0,0)",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Commands
                        <ArrowRight className="w-5 h-5 rotate-45" />
                      </span>
                    </a>
                  </div>
                  <div className="p-1 lg:px-6">
                    <a
                      href="#project-highlights"
                      className={`${hoverStyle}`}
                      style={{
                        transform: "translate3d(0,0,0)",
                        WebkitFontSmoothing: "antialiased",
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
                Olympy is a comprehensive Discord bot built with Python and
                discord.py, originally designed as a feature-rich server
                management tool. The bot combines music streaming, web scraping,
                and entertainment features into a single powerful application.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Built during 2021-2022, this project showcases advanced Python
                development skills, API integrations, and real-time audio
                processing. While the music features are no longer functional
                due to YouTube policy changes, the core architecture and other
                features remain impressive examples of bot development.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The bot demonstrates expertise in asynchronous programming, web
                scraping, audio processing, and Discord API integration.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {/* Core Technologies */}
              <div className="bg-linear-to-br from-blue-50 to-indigo-100 rounded-2xl p-5 md:p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  Core
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-700">• Python 3.8+</li>
                  <li className="text-slate-700">• discord.py</li>
                  <li className="text-slate-700">• asyncio</li>
                  <li className="text-slate-700">• aiohttp</li>
                </ul>
              </div>

              {/* Music System */}
              <div className="bg-linear-to-br from-green-50 to-emerald-100 rounded-2xl p-5 md:p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <Music className="w-5 h-5 mr-2 text-green-600" />
                  Music
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-700">• Wavelink</li>
                  <li className="text-slate-700">• Lavalink Server</li>
                  <li className="text-slate-700">• Java 13+</li>
                  <li className="text-slate-700">• YouTube API</li>
                </ul>
              </div>

              {/* Web Scraping */}
              <div className="bg-linear-to-br from-purple-50 to-violet-100 rounded-2xl p-5 md:p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-purple-600" />
                  Scraping
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-700">• Selenium</li>
                  <li className="text-slate-700">• BeautifulSoup4</li>
                  <li className="text-slate-700">• Chrome WebDriver</li>
                  <li className="text-slate-700">• CSV Export</li>
                </ul>
              </div>

              {/* Development */}
              <div className="bg-linear-to-br from-orange-50 to-amber-100 rounded-2xl p-5 md:p-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-orange-600" />
                  Tools
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-700">• Windows 10+</li>
                  <li className="text-slate-700">• Git</li>
                  <li className="text-slate-700">• pip</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-5 md:px-10 xl:px-20 bg-linear-to-b from-white to-[#D4EAF6]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-dmDisplay tracking-tight">
              Key Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive Discord bot with advanced music, scraping, and
              entertainment capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Music System */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Music className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Advanced Music System
              </h3>
              <p className="text-slate-600 mb-4">
                Full-featured music bot with queue management, equalizer, and
                multiple audio sources.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Queue management & history</li>
                <li>• 15-band equalizer with presets</li>
                <li>• Volume control (0-1000%)</li>
                <li>• Lyrics fetching & seek functionality</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Amazon Product Scraper
              </h3>
              <p className="text-slate-600 mb-4">
                Multi-region Amazon product search with CSV export and
                comprehensive data extraction.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Multi-region support (US, UK, DE)</li>
                <li>• Up to 20 pages of results</li>
                <li>• CSV export functionality</li>
                <li>• Product details extraction</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Gamepad2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Entertainment Commands
              </h3>
              <p className="text-slate-600 mb-4">
                Interactive games and server management tools for enhanced
                Discord experience.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Rock Paper Scissors game</li>
                <li>• Server information display</li>
                <li>• Random jokes & greetings</li>
                <li>• Fun percentage calculator</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Bot Management
              </h3>
              <p className="text-slate-600 mb-4">
                Comprehensive bot control with automated features and error
                handling.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Auto-disconnect when empty</li>
                <li>• Error handling & recovery</li>
                <li>• Command prefix system</li>
                <li>• Mention-based responses</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Data Management
              </h3>
              <p className="text-slate-600 mb-4">
                Efficient data handling with CSV exports and structured data
                processing.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• CSV data export</li>
                <li>• Structured data processing</li>
                <li>• Rate limiting & delays</li>
                <li>• Error handling for missing data</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Configuration
              </h3>
              <p className="text-slate-600 mb-4">
                Flexible configuration system with multiple deployment options
                and automation.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• Automated startup scripts</li>
                <li>• Windows service integration</li>
                <li>• Environment-based settings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section
        id="commands"
        className="py-20 px-5 md:px-10 xl:px-20 bg-linear-to-b from-[#D4EAF6] to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-dmDisplay tracking-tight">
              Command Reference
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive command system with music, scraping, and
              entertainment features
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Music Commands */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Music className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-slate-800">
                  Music Commands
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-play, -p</span>
                  <span className="text-sm text-slate-500">
                    Play music (URL or search)
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-pause</span>
                  <span className="text-sm text-slate-500">
                    Pause current track
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-queue, -q</span>
                  <span className="text-sm text-slate-500">
                    Show current queue
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-volume</span>
                  <span className="text-sm text-slate-500">
                    Set volume (0-1000%)
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-lyrics, -ly</span>
                  <span className="text-sm text-slate-500">
                    Show song lyrics
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600 font-mono">-seek</span>
                  <span className="text-sm text-slate-500">
                    Seek to timestamp
                  </span>
                </div>
              </div>
            </div>

            {/* Amazon Commands */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <ShoppingCart className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold text-slate-800">
                  Amazon Commands
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">
                    -amazon, -find
                  </span>
                  <span className="text-sm text-slate-500">
                    Search Amazon products
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-amazonhelp</span>
                  <span className="text-sm text-slate-500">
                    Show search help
                  </span>
                </div>
                <div className="py-2">
                  <p className="text-sm text-slate-500 mb-2">Search Syntax:</p>
                  <p className="text-xs text-slate-400 font-mono bg-slate-50 p-2 rounded">
                    -amazon product_name pages country
                  </p>
                </div>
                <div className="py-2">
                  <p className="text-sm text-slate-500 mb-1">Countries:</p>
                  <p className="text-xs text-slate-400">
                    com (US), co.uk (UK), de (Germany)
                  </p>
                </div>
              </div>
            </div>

            {/* Entertainment Commands */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Gamepad2 className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-semibold text-slate-800">
                  Entertainment
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-hello, -h</span>
                  <span className="text-sm text-slate-500">
                    Random greeting
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-joke, -haha</span>
                  <span className="text-sm text-slate-500">
                    Tell random joke
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">
                    -serverinfo, -sinfo
                  </span>
                  <span className="text-sm text-slate-500">
                    Server information
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-rps</span>
                  <span className="text-sm text-slate-500">
                    Rock Paper Scissors
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-mono">-credits</span>
                  <span className="text-sm text-slate-500">
                    Show bot credits
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600 font-mono">-dm</span>
                  <span className="text-sm text-slate-500">
                    Fun percentage calc
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section
        id="project-highlights"
        className="py-20 px-5 md:px-10 xl:px-20 bg-linear-to-b from-white to-[#D4EAF6]"
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
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Advanced Music Architecture
                    </h3>
                    <p className="text-slate-600">
                      Built with Wavelink and Lavalink for professional music
                      streaming, featuring 15-band equalizer and advanced queue
                      management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-600 font-semibold text-sm">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Multi-Region Web Scraping
                    </h3>
                    <p className="text-slate-600">
                      Sophisticated Amazon scraper supporting multiple regions
                      with CSV export and comprehensive data extraction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Asynchronous Programming
                    </h3>
                    <p className="text-slate-600">
                      Built with Python asyncio for efficient concurrent
                      operations and real-time Discord API interactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-orange-600 font-semibold text-sm">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Comprehensive Error Handling
                    </h3>
                    <p className="text-slate-600">
                      Robust error handling and recovery systems for music
                      streaming, web scraping, and Discord API interactions.
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
                  <span className="text-slate-600">Language</span>
                  <span className="font-semibold text-slate-800">
                    Python 3.8+
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Framework</span>
                  <span className="font-semibold text-slate-800">
                    discord.py
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Music Engine</span>
                  <span className="font-semibold text-slate-800">
                    Wavelink + Lavalink
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Web Scraping</span>
                  <span className="font-semibold text-slate-800">
                    Selenium + BeautifulSoup4
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Platform</span>
                  <span className="font-semibold text-slate-800">
                    Windows 10+
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600">Java Version</span>
                  <span className="font-semibold text-slate-800">Java 13+</span>
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
            Explore the Code
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Check out the complete source code and documentation for this
            comprehensive Discord bot project on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div>
              <a
                href="https://github.com/sebastjanbas/discord-bot"
                target="_blank"
                rel="noopener noreferrer"
                className={`${hoverStyle} text-white md:after:bg-white`}
                style={{
                  transform: "translate3d(0,0,0)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View on GitHub
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

export default DiscordBotPage;
