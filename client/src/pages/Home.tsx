import { ArrowRight, Code2, Database, BarChart3, ExternalLink, Github, Star, Calendar, Mail, MessageCircle, Linkedin, Instagram, MapPin, Twitter, Send } from "lucide-react";
import { useState } from "react";

import SocialShareButtons from "@/components/SocialShareButtons";

/**
 * ZaccchTech Portfolio - Premium Developer Portfolio
 * Design Philosophy: Modern Tech-Forward Minimalism with Warm Accents
 * Enhanced with sophisticated transitions and repositioned skills section
 */

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showSkills, setShowSkills] = useState(false);

  // Hero Section
  const HeroSection = () => (
    <section className="pt-20 md:pt-32 pb-16 md:pb-20 px-4 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-amber-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-blue-100/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-all duration-300">
              Welcome to my portfolio
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-slate-900 dark:text-white">Alade</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">Zaccheous</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-6 md:mb-8 leading-relaxed">
              Python Developer | Django Expert | Data Analyst | Project-Driven Professional
            </p>

            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6 md:mb-8 leading-relaxed">
              I build robust web applications, analyze complex data, and deliver innovative solutions that drive business growth. With expertise in Python, Django, and modern web technologies, I transform ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform text-sm md:text-base"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-medium hover:border-amber-600 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200 flex items-center justify-center">
            <style>{`
              @keyframes cardFloat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
              }
              @keyframes badgeFloat1 {
                0%, 100% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
                50% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
              }
              @keyframes badgeFloat2 {
                0%, 100% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
                50% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
              }
              @keyframes badgeFloat3 {
                0%, 100% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
                50% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
              }
              @keyframes badgeFloat4 {
                0%, 100% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
                50% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
              }
              @keyframes badgeFloat5 {
                0%, 100% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
                50% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
              }
              @keyframes badgeFloat6 {
                0%, 100% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
                50% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
              }
              @keyframes badgeAppear1 {
                from { transform: translate(0px, -240px) scale(0.7); opacity: 0; }
                to { transform: translate(0px, -240px) scale(1); opacity: 1; }
              }
              @keyframes badgeAppear2 {
                from { transform: translate(0px, 240px) scale(0.7); opacity: 0; }
                to { transform: translate(0px, 240px) scale(1); opacity: 1; }
              }
              @keyframes badgeAppear3 {
                from { transform: translate(-220px, 0px) scale(0.7); opacity: 0; }
                to { transform: translate(-220px, 0px) scale(1); opacity: 1; }
              }
              @keyframes badgeAppear4 {
                from { transform: translate(220px, -80px) scale(0.7); opacity: 0; }
                to { transform: translate(220px, -80px) scale(1); opacity: 1; }
              }
              @keyframes badgeAppear6 {
                from { transform: translate(220px, 80px) scale(0.7); opacity: 0; }
                to { transform: translate(220px, 80px) scale(1); opacity: 1; }
              }
              @keyframes badgeGlow {
                0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.3), 0 4px 15px rgba(0, 0, 0, 0.3); }
                50% { box-shadow: 0 0 30px rgba(251, 146, 60, 0.5), 0 4px 20px rgba(0, 0, 0, 0.4); }
              }
              .card-float {
                animation: cardFloat 3s ease-in-out infinite;
              }
              .badge-float-1 { }
              .badge-float-2 { }
              .badge-float-3 { }
              .badge-float-4 { }
              .badge-float-5 { }
              .badge-float-6 { }
              .badge-float-1.badge-visible { animation: badgeAppear1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
              .badge-float-2.badge-visible { animation: badgeAppear2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards; }
              .badge-float-3.badge-visible { animation: badgeAppear3 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards; }
              .badge-float-4.badge-visible { animation: badgeAppear4 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards; }
              .badge-float-6.badge-visible { animation: badgeAppear6 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards; }
              .badge-hidden {
                opacity: 0;
                pointer-events: none;
                transform: scale(0.7);
              }
              .badge-visible {
                opacity: 1;
                pointer-events: auto;
                animation: badgeGlow 2s ease-in-out infinite;
              }
              @media (max-width: 768px) {
                @keyframes badgeAppear1 {
                  from { transform: translate(0px, -160px) scale(0.7); opacity: 0; }
                  to { transform: translate(0px, -160px) scale(1); opacity: 1; }
                }
                @keyframes badgeAppear2 {
                  from { transform: translate(0px, 160px) scale(0.7); opacity: 0; }
                  to { transform: translate(0px, 160px) scale(1); opacity: 1; }
                }
                @keyframes badgeAppear3 {
                  from { transform: translate(-140px, 0px) scale(0.7); opacity: 0; }
                  to { transform: translate(-140px, 0px) scale(1); opacity: 1; }
                }
                @keyframes badgeAppear4 {
                  from { transform: translate(140px, -60px) scale(0.7); opacity: 0; }
                  to { transform: translate(140px, -60px) scale(1); opacity: 1; }
                }
                @keyframes badgeAppear6 {
                  from { transform: translate(140px, 60px) scale(0.7); opacity: 0; }
                  to { transform: translate(140px, 60px) scale(1); opacity: 1; }
                }
              }
            `}</style>
            {/* Animated Profile Showcase Container */}
            <div 
              className="relative w-full max-w-4xl flex items-center justify-center" 
              style={{ height: '500px', minHeight: '400px' }}
              onMouseEnter={() => setShowSkills(true)}
              onMouseLeave={() => setShowSkills(false)}
            >
              {/* Main Floating Card */}
              <div className="absolute card-float">
                <div className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 rounded-3xl shadow-2xl dark:shadow-slate-950/50 border border-slate-600 dark:border-slate-700 p-8 w-80 h-auto">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative w-40 h-40">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" style={{ opacity: 0.3 }} />
                      <img
                        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663455179708/ErEClIaFTGsBPBRm.png"
                        alt="Alade Zaccheous"
                        className="relative w-full h-full rounded-full object-cover border-4 border-blue-400 dark:border-blue-500 shadow-2xl"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mb-4">
                    <h3 className="text-white font-bold text-2xl">Alade Zaccheous</h3>
                    <p className="text-slate-300 text-base font-medium">Data Analyst</p>
                  </div>

                  {/* Code Snippet */}
                  <div className="bg-slate-900/50 rounded-lg px-4 py-3 text-center border border-slate-700">
                    <code className="text-blue-300 text-sm font-mono">&lt;code /&gt; + 🚀 = 💡</code>
                  </div>
                </div>
              </div>

              {/* Floating Skill Badges Around Card */}
              {/* Python - Top of Card */}
              <div className={`absolute badge-float-1 hidden sm:block transition-all duration-500 ${showSkills ? 'badge-visible' : 'badge-hidden'}`}>
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 border border-blue-400/50 rounded-full px-5 py-2.5 text-white text-xs font-semibold whitespace-nowrap shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm">🐍 Python</div>
              </div>
              {/* SQL - Bottom of Card */}
              <div className={`absolute badge-float-2 hidden sm:block transition-all duration-500 ${showSkills ? 'badge-visible' : 'badge-hidden'}`}>
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 border border-emerald-400/50 rounded-full px-5 py-2.5 text-white text-xs font-semibold whitespace-nowrap shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm">🗄️ SQL</div>
              </div>
              {/* Django - Other Side of Card */}
              <div className={`absolute badge-float-3 hidden sm:block transition-all duration-500 ${showSkills ? 'badge-visible' : 'badge-hidden'}`}>
                <div className="bg-gradient-to-r from-purple-600 to-purple-500 border border-purple-400/50 rounded-full px-5 py-2.5 text-white text-xs font-semibold whitespace-nowrap shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm">🎯 Django</div>
              </div>
              {/* Excel - Close to Top */}
              <div className={`absolute badge-float-6 hidden sm:block transition-all duration-500 ${showSkills ? 'badge-visible' : 'badge-hidden'}`}>
                <div className="bg-gradient-to-r from-green-600 to-green-500 border border-green-400/50 rounded-full px-5 py-2.5 text-white text-xs font-semibold whitespace-nowrap shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm">📊 Excel</div>
              </div>
              {/* Power BI - Top Left */}
              <div className={`absolute badge-float-4 hidden sm:block transition-all duration-500 ${showSkills ? 'badge-visible' : 'badge-hidden'}`}>
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 border border-indigo-400/50 rounded-full px-5 py-2.5 text-white text-xs font-semibold whitespace-nowrap shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-sm">📈 Power BI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // About Section with Animated Profile Showcase
  const AboutSection = () => {
    const skills = [
      { name: "Python", level: "100%", icon: "🐍", position: "top-left" },
      { name: "Django", level: "100%", icon: "🎯", position: "top-right" },
      { name: "Data Analysis", level: "95%", icon: "📊", position: "bottom-left" },
      { name: "PostgreSQL", level: "90%", icon: "🗄️", position: "bottom-right" },
    ];

    return (
      <section id="about" className="py-16 md:py-24 px-4 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.3), inset 0 0 20px rgba(251, 146, 60, 0.1); }
            50% { box-shadow: 0 0 40px rgba(251, 146, 60, 0.5), inset 0 0 30px rgba(251, 146, 60, 0.2); }
          }
          @keyframes orbit {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          .skill-badge {
            animation: float 3s ease-in-out infinite;
          }
          .profile-circle {
            animation: pulse-glow 3s ease-in-out infinite;
          }
          .orbit-line {
            animation: orbit 20s linear infinite;
          }
        `}</style>

        <div className="container max-w-6xl">
          <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                I'm a Python Developer and Data Analyst with a passion for turning raw data into actionable insights. I specialize in building robust backend systems with Django and transforming complex datasets into clear, meaningful visualizations that drive business decisions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                My expertise includes Python development, Django web applications, data analysis with Pandas, SQL optimization, Power BI dashboards, and Excel analytics. I work with businesses to extract value from their data, automate processes, and build scalable solutions that grow with their needs.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                I'm committed to writing clean, efficient code and delivering data-driven solutions that make a real impact. Whether you need a Django backend, data pipeline, or comprehensive analytics dashboard, I'm here to help you succeed.
              </p>
            </div>

            {/* Right: Stats Cards */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-300 grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 md:p-6 shadow-md dark:shadow-lg border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg dark:hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">10+</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-medium">Projects Completed</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 md:p-6 shadow-md dark:shadow-lg border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg dark:hover:shadow-xl transition-shadow">
                <div className="text-2xl md:text-3xl text-green-500 dark:text-green-400 mb-2">✓</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-medium">Continuous Learning</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 md:p-6 shadow-md dark:shadow-lg border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg dark:hover:shadow-xl transition-shadow">
                <div className="text-2xl md:text-3xl text-green-500 dark:text-green-400 mb-2">✓</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-medium">Fast Delivery</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 md:p-6 shadow-md dark:shadow-lg border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg dark:hover:shadow-xl transition-shadow">
                <div className="text-2xl md:text-3xl text-green-500 dark:text-green-400 mb-2">✓</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-medium">Data-Driven Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Skills Section - Enhanced with better layout
  const SkillsSection = () => (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="container max-w-6xl">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 max-w-2xl mx-auto">Comprehensive technical expertise across multiple domains</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto" />
        </div>

        {/* Skills Grid with Staggered Layout */}
        <div className="space-y-16">
          {[
            {
              icon: Code2,
              title: "Frontend Development",
              description: "Building beautiful, responsive user interfaces",
              skills: ["HTML", "CSS", "JavaScript (Basic)", "Bootstrap"],
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: Database,
              title: "Backend Development",
              description: "Crafting robust, scalable server solutions",
              skills: ["Python", "Django", "PostgreSQL", "SQL", "REST APIs", "FastAPI"],
              color: "from-purple-500 to-purple-600",
            },
            {
              icon: BarChart3,
              title: "Data Analysis & BI",
              description: "Transforming data into actionable insights",
              skills: ["Excel", "Power BI", "SQL Queries", "Data Visualization", "Analytics", "Reporting"],
              color: "from-emerald-500 to-emerald-600",
            },
          ].map((category, idx) => {
            const Icon = category.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={category.title}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Content */}
                <div className={`${!isEven ? "md:order-2" : ""}`}>
                  <div className="group">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg leading-relaxed">{category.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-white dark:bg-slate-800 border-2 border-amber-200 dark:border-amber-600 text-slate-700 dark:text-amber-300 rounded-full text-sm font-semibold hover:bg-amber-50 dark:hover:bg-slate-700 hover:border-amber-600 hover:text-amber-600 dark:hover:text-amber-200 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                          style={{
                            transitionDelay: `${skillIdx * 30}ms`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`${!isEven ? "md:order-1" : ""} hidden md:block`}>
                  <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-40 h-40 bg-gradient-to-br ${category.color} rounded-full opacity-15 blur-3xl animate-pulse`} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-28 h-28 opacity-10" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // Projects Section
  const projects = [
    // Web Development Projects
    {
      id: 1,
      title: "DevSpace Blog",
      description: "A Django blog platform for discovering inspiring stories, productivity tips, and personal growth insights, with user authentication and post management.",
      image: "/projects/devspace-blog.png",
      tags: ["Django", "Authentication", "HTML/CSS"],
      category: "web",
      caseStudyId: "devspace-blog",
      link: "https://devspaceblogproject.vercel.app",
      github: "https://github.com/ZACCH0/devspaceblogproject",
    },
    {
      id: 2,
      title: "Task Manager",
      description: "A cloud-inspired task management app built with Django, helping users organize, track, and manage daily workflows through a clean, responsive interface with authentication and task categorization.",
      image: "/projects/task-manager.png",
      tags: ["Django", "Authentication", "Task Management"],
      category: "web",
      caseStudyId: "task-manager",
      link: "https://github.com/ZACCH0/Taskmanager-Project",
      github: "https://github.com/ZACCH0/Taskmanager-Project",
    },
    // Data Analysis Projects
    {
      id: 3,
      title: "Data Science Salary Dashboard",
      description: "Interactive Excel dashboard analyzing real-world data-industry job postings — salary trends by role, country, and employment type, with dynamic KPI cards and data validation–driven filtering.",
      image: "/projects/salary-dashboard.png",
      tags: ["Excel", "Data Analysis", "Dashboard", "Data Validation"],
      category: "data",
      caseStudyId: "salary-dashboard",
      link: "https://github.com/ZACCH0/Data_Science_Salary_Dashboard",
      github: "https://github.com/ZACCH0/Data_Science_Salary_Dashboard",
    },
    {
      id: 4,
      title: "Job Skills & Salary Analysis",
      description: "An Excel-based analytics project examining in-demand skills and salary trends across data roles and countries, using Power Query (ETL), Power Pivot, DAX measures, and interactive slicers.",
      image: "/projects/job-skills-analysis.png",
      tags: ["Excel", "Power Query", "DAX", "Power Pivot"],
      category: "data",
      caseStudyId: "job-skills-analysis",
      link: "https://github.com/ZACCH0/JOB-SKILLS_AND-SALARY-ANALYSIS",
      github: "https://github.com/ZACCH0/JOB-SKILLS_AND-SALARY-ANALYSIS",
    },
  ];

  const ProjectsSection = () => {
    const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);
    return (
    <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
      <div id="projects-section" className="container max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap animate-in fade-in duration-700 delay-200">
          {["all", "web", "data"].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                // Smooth scroll to keep focus on projects section
                const projectsSection = document.getElementById('projects-section');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-110 ${
                activeFilter === filter
                  ? "bg-amber-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-600 hover:border-amber-600 hover:shadow-md dark:hover:border-amber-500"
              }`}
            >
              {filter === "all" ? "All Projects" : filter === "web" ? "Web Dev" : "Data Analysis"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
          {filteredProjects.length > 0 ? filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-amber-500/60 text-blue-700 dark:text-amber-50 rounded-full text-xs font-semibold hover:bg-blue-200 dark:hover:bg-amber-500/80 transition-all duration-300 border border-blue-300 dark:border-amber-400/60 cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 flex-col">
                  <a
                    href={`/case-study/${project.caseStudyId}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Case Study
                  </a>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:border-amber-600 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                  {/* Social Share Buttons */}
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">Share this project:</p>
                    <SocialShareButtons
                      projectTitle={project.title}
                      projectUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/#projects`}
                      description={project.description}
                    />
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-1 md:col-span-2 text-center py-12">
              <p className="text-slate-600 dark:text-slate-400 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
    );
  };

  // Testimonials Section
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc.",
      text: "Alade delivered an exceptional e-commerce platform that exceeded our expectations. Professional, reliable, and highly skilled.",
      rating: 5,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/testimonial-headshot-1-9YT3J22WkTcMQWW9PQyHxf.webp",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, DataCorp",
      text: "The analytics dashboard transformed how we understand our data. Alade's attention to detail is remarkable.",
      rating: 5,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/testimonial-headshot-2-F7Wk36jT3XMs2BRNrQGFbK.webp",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Agency",
      text: "Working with Alade was a game-changer. Fast turnaround, clean code, and excellent communication throughout.",
      rating: 5,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/testimonial-headshot-3-Vww2pQHsHA8kcUWUYaBFFY.webp",
    },
  ];

  const TestimonialsSection = () => (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="container max-w-5xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Client Testimonials</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all group dark:shadow-slate-700 dark:hover:shadow-slate-600"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-500 text-amber-500 group-hover:scale-110 transition-transform" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 dark:text-slate-300 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-200 group-hover:scale-110 transition-transform shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Blog Section
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Django Applications",
      excerpt: "Learn best practices for building Django apps that scale with your business needs.",
      date: "Apr 15, 2024",
      category: "Django",
    },
    {
      id: 2,
      title: "Data Analysis with Python Pandas",
      excerpt: "Master data manipulation and analysis techniques using Python's powerful Pandas library.",
      date: "Apr 10, 2024",
      category: "Data",
    },
    {
      id: 3,
      title: "Modern React Patterns in 2024",
      excerpt: "Explore the latest React patterns and best practices for building efficient web applications.",
      date: "Apr 5, 2024",
      category: "React",
    },
    {
      id: 4,
      title: "Excel Power Tips for Data Analysis",
      excerpt: "Discover advanced Excel techniques including pivot tables, VLOOKUP, and data visualization to transform raw data into actionable insights.",
      date: "May 1, 2026",
      category: "Excel",
    },
    {
      id: 5,
      title: "Mastering Power BI: From Data to Dashboards",
      excerpt: "Learn how to create interactive Power BI dashboards that tell compelling stories with your data. Includes real-world examples and best practices.",
      date: "Apr 28, 2026",
      category: "Power BI",
    },
    {
      id: 6,
      title: "Data Cleaning: The Foundation of Quality Analytics",
      excerpt: "Explore essential data cleaning techniques using Python and SQL. Learn how to handle missing values, duplicates, and outliers effectively.",
      date: "Apr 22, 2026",
      category: "Data Cleaning",
    },
  ];

  const BlogSection = () => (
    <section id="blog" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="container max-w-5xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Latest Blog Posts</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <a
              key={post.id}
              href="#"
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 group p-6 bg-white dark:bg-slate-700 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all block dark:shadow-slate-600 dark:hover:shadow-slate-500"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-medium mb-4 group-hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors">
                {post.category}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                <Calendar size={14} />
                {post.date}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );

  // Contact Section
  const ContactSection = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      subject: 'Django Development',
      message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>('success');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const response = await fetch('https://formspree.io/f/xzdqdyvj', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setToastMessage('Message sent successfully! I will get back to you soon.');
          setToastType('success');
          setShowToast(true);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: 'Django Development',
            message: ''
          });
          setTimeout(() => setShowToast(false), 5000);
        } else {
          setToastMessage('Failed to send message. Please try again.');
          setToastType('error');
          setShowToast(true);
          setTimeout(() => setShowToast(false), 5000);
        }
      } catch (error) {
        setToastMessage('Error sending message. Please try again or contact me directly.');
        setToastType('error');
        setShowToast(true);
        console.error('Form submission error:', error);
        setTimeout(() => setShowToast(false), 5000);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <section id="contact" className="py-16 md:py-24 px-4 bg-slate-900 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Contact Info */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-block px-3 py-1 bg-amber-600/20 text-amber-400 rounded-full text-xs font-medium mb-4 uppercase tracking-wider">
                Get in Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Let's Build Something
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 mb-6 leading-tight">
                Remarkable Together
              </h3>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                Whether you need a data strategy, a production Django app, or a custom analytics dashboard — I'm ready to help. Let's talk.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href="mailto:aladezaccheous52@gmail.com" className="text-white font-medium hover:text-amber-400 transition-colors">
                      aladezaccheous52@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <a href="tel:+2349161302024" className="text-white font-medium hover:text-blue-400 transition-colors">
                      +234 916 130 2024
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">LinkedIn</p>
                    <a href="https://linkedin.com/in/alade-zaccheous" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-blue-400 transition-colors">
                      linkedin.com/in/zacchtech/
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://github.com/ZaccchTech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500 transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/alade-zaccheous" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com/zaccchtech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500 transition-all duration-300">
                  <Twitter size={18} />
                </a>
                <a href="https://instagram.com/zaccchtech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500 transition-all duration-300">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-slate-300 text-sm font-medium mb-2">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-slate-300 text-sm font-medium mb-2">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      autoComplete="off"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="Django Development">Django Development</option>
                      <option value="Data Analysis">Data Analysis</option>
                      <option value="Python Project">Python Project</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <style>{`
                    @keyframes spin {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    .spinner {
                      animation: spin 1s linear infinite;
                    }
                  `}</style>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mt-6 ${
                      isLoading
                        ? 'opacity-75 cursor-not-allowed'
                        : 'hover:from-amber-700 hover:to-amber-600 hover:shadow-xl hover:scale-105 transform'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="spinner"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a10 10 0 0 1 10 10" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div
              className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm border ${
                toastType === 'success'
                  ? 'bg-green-500/90 border-green-400 text-white'
                  : 'bg-red-500/90 border-red-400 text-white'
              }`}
            >
              {toastType === 'success' ? (
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span className="font-medium text-sm">{toastMessage}</span>
            </div>
          </div>
        )}
      </section>
    );
  }

  // Resume Section
  const ResumeSection = () => (
    <section className="py-12 md:py-16 px-4 bg-slate-900 text-white">
      <div className="container max-w-2xl text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="mb-6 text-slate-300 text-sm md:text-base">Want to learn more about my experience?</p>
        <a
          href="projects/ZACCH_RESUME_0001_Final.pdf"
          className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm md:text-base"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />

      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <ResumeSection />
    </div>
  );
}
