import { ArrowLeft, CheckCircle, AlertCircle, TrendingUp, Github, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

export default function CaseStudy() {
  const [location, navigate] = useLocation();
  const projectId = location.split("/").pop();

  const caseStudies: Record<string, any> = {
    "devspace-blog": {
      id: "devspace-blog",
      title: "DevSpace Blog",
      subtitle: "A Django Blog Platform for Inspiring Stories & Productivity",
      image: "/projects/devspace-blog.png",
      client: "Personal Project",
      industry: "Content & Web Development",
      duration: "6 weeks",
      team: "Solo developer",
      technologies: ["Django", "Python", "HTML", "CSS", "SQLite"],
      liveUrl: "https://devspaceblogproject.vercel.app",
      githubUrl: "https://github.com/ZACCH0/devspaceblogproject",
      overview: "DevSpace Blog is a full-featured blogging platform built with Django that lets users discover inspiring stories, productivity tips, and personal growth insights. It features a complete user authentication system, post management, media uploads, and a clean responsive interface — deployed live on Vercel.",
      challenges: [
        { title: "User Authentication System", description: "Building a secure registration, login, and profile management flow so that only authenticated users could create and manage posts." },
        { title: "Media & File Handling", description: "Handling user-uploaded images for blog posts and profiles, storing them correctly, and serving them reliably on the deployed version." },
        { title: "Deployment to Vercel", description: "Django is a server-side framework not natively designed for Vercel — configuring it to run correctly in a serverless environment required additional setup." },
        { title: "Data Modelling", description: "Designing the Post, User, and Category models with the right relationships to support filtering, authorship, and future scalability." }
      ],
      solutions: [
        { title: "Django Auth & Custom User Model", description: "Implemented Django's built-in authentication with custom profile extensions, giving each user a personal space to manage their posts." },
        { title: "Media Upload Handling", description: "Configured Django's MEDIA_ROOT and MEDIA_URL settings with proper file validation to support image uploads for posts and user avatars." },
        { title: "Vercel Deployment Configuration", description: "Used a custom vercel.json configuration and WSGI adapter to deploy the Django app on Vercel, making the project publicly accessible." },
        { title: "Clean Blog Data Model", description: "Designed a clear Post model with author, category, timestamp, and content fields — enabling straightforward CRUD operations and future feature additions." }
      ],
      results: [
        { metric: "Live", description: "Deployed and accessible at devspaceblogproject.vercel.app" },
        { metric: "Full Auth", description: "Registration, login, and profile management working end-to-end" },
        { metric: "CRUD", description: "Full post creation, editing, and deletion for authenticated users" },
        { metric: "35+", description: "Commits across the development history" }
      ],
      testimonial: {
        text: "Building DevSpace Blog taught me the full cycle of Django development — from designing models and views to deploying a live application. It's the foundation of my backend skill set.",
        author: "Alade Zaccheous",
        role: "Developer & Builder"
      }
    },

    "task-manager": {
      id: "task-manager",
      title: "Task Manager",
      subtitle: "A Cloud-Inspired Django Task Management Application",
      image: "/projects/task-manager.png",
      client: "Personal Project",
      industry: "Productivity & Web Development",
      duration: "4 weeks",
      team: "Solo developer",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
      githubUrl: "https://github.com/ZACCH0/Taskmanager-Project",
      overview: "Task Manager is a robust, cloud-inspired task management application built with Django. It helps users organize, track, and manage their daily workflows through a clean, responsive interface — featuring user authentication, task categorization, and real-time status updates.",
      challenges: [
        { title: "Task State Management", description: "Tracking tasks across multiple states (pending, in-progress, completed) and keeping the UI in sync with the database without a frontend framework." },
        { title: "User Isolation", description: "Ensuring that each logged-in user only sees and manages their own tasks, with no data leaking between accounts." },
        { title: "Categorization System", description: "Designing a flexible category and priority system so users can organize tasks in a way that matches their own workflow." },
        { title: "Responsive Interface", description: "Delivering a clean, usable UI across different screen sizes using only HTML, CSS, and minimal JavaScript — no heavy frontend libraries." }
      ],
      solutions: [
        { title: "Django Model-Based Task States", description: "Used Django model fields with choices to track task status, paired with view logic to allow quick status updates from the dashboard." },
        { title: "User-Scoped QuerySets", description: "All task queries are filtered by the currently authenticated user, ensuring strict data isolation between accounts." },
        { title: "Category & Priority Models", description: "Built a separate Category model linked via ForeignKey to tasks, allowing users to group and filter their work by context or urgency." },
        { title: "Lightweight Responsive Design", description: "Crafted the UI with plain CSS and minimal JavaScript for real-time interactions, keeping the app fast and dependency-light." }
      ],
      results: [
        { metric: "Full Auth", description: "Secure login, registration, and session management" },
        { metric: "CRUD+", description: "Create, update, delete, and categorize tasks" },
        { metric: "Multi-state", description: "Tasks tracked across pending, in-progress, and completed stages" },
        { metric: "Responsive", description: "Clean UI works across desktop and mobile screens" }
      ],
      testimonial: {
        text: "This project pushed me to think about user experience and data architecture at the same time. It gave me a strong understanding of Django views, models, and authentication working together in a real application.",
        author: "Alade Zaccheous",
        role: "Developer & Builder"
      }
    },

    "salary-dashboard": {
      id: "salary-dashboard",
      title: "Data Science Salary Dashboard",
      subtitle: "Interactive Excel Dashboard Analysing the Data Science Job Market",
      image: "/projects/salary-dashboard.png",
      client: "Personal Project",
      industry: "Data Analytics",
      duration: "1 weeks",
      team: "Solo analyst",
      technologies: ["Microsoft Excel", "Advanced Formulas", "Data Validation", "Charts", "Pivot Tables"],
      githubUrl: "https://github.com/ZACCH0/Data_Science_Salary_Dashboard",
      overview: "An interactive Excel dashboard that analyses real-world data science job market data — transforming raw job posting datasets into a dynamic reporting solution. Users can explore salary patterns by job title, country, and employment type through dropdowns, KPI cards, and chart visualizations.",
      challenges: [
        { title: "Raw Data Complexity", description: "The source dataset contained thousands of job postings with inconsistent formats, missing salary values, and mixed employment types that needed to be cleaned before analysis." },
        { title: "Multi-Criteria Dynamic Filtering", description: "Building a dashboard where selecting a job title, country, and schedule type simultaneously updates all KPIs and charts — without using macros or VBA." },
        { title: "Meaningful Salary Representation", description: "Choosing median over average salary to prevent outliers from distorting the insights, then computing it dynamically based on all active filters." },
        { title: "User-Friendly Interface", description: "Making an Excel file feel like a proper dashboard — intuitive, clean, and usable by someone with no data background." }
      ],
      solutions: [
        { title: "Data Cleaning & Structured Tables", description: "Cleaned the raw dataset by standardizing job titles, removing zero-salary records, and converting it into a structured Excel Table for reliable formula referencing." },
        { title: "Multi-Criteria MEDIAN Formula", description: "Built a nested IF array formula — =MEDIAN(IF((title=A2)*(country=X)*(type=Y)*(salary<>0), salary)) — that calculates median salary dynamically based on all three active filters simultaneously." },
        { title: "Data Validation Dropdowns", description: "Used Data Validation to restrict all three filter inputs to valid options, preventing user errors and ensuring the formulas always return accurate results." },
        { title: "Dynamic KPI Cards & Charts", description: "Designed KPI cards showing Median Salary, Top Job Platform, and Top Job Count — all linked to the filter selections — alongside a map and bar chart that update automatically." }
      ],
      results: [
        { metric: "3 Filters", description: "Job title, country, and schedule type work together dynamically" },
        { metric: "Dynamic KPIs", description: "Median salary, top platform, and job count update automatically" },
        { metric: "Real Data", description: "Built from actual job posting data, not synthetic figures" },
        { metric: "Zero VBA", description: "Full interactivity achieved using only Excel formulas and data validation" }
      ],
      testimonial: {
        text: "This project showed me that Excel is a serious analytics platform. Building a multi-criteria dynamic dashboard from scratch — with no VBA — deepened my understanding of how formulas, data validation, and visual design work together.",
        author: "Alade Zaccheous",
        role: "Data Analyst"
      }
    },

    "job-skills-analysis": {
      id: "job-skills-analysis",
      title: "Job Skills & Salary Analysis",
      subtitle: "End-to-End Excel Analytics Using Power Query, Power Pivot & DAX",
      image: "/projects/job-skills-analysis.png",
      client: "Personal Project",
      industry: "Data Analytics",
      duration: "4 weeks",
      team: "Solo analyst",
      technologies: ["Microsoft Excel", "Power Query", "Power Pivot", "DAX", "Pivot Tables", "Pivot Charts", "Slicers"],
      githubUrl: "https://github.com/ZACCH0/JOB-SKILLS_AND-SALARY-ANALYSIS",
      overview: "A comprehensive Excel analytics project that examines the relationship between job skills and salaries across the data industry. Using a full ETL pipeline via Power Query, a relational data model in Power Pivot, and DAX measures, the project answers four key business questions about which skills are in demand, which pay the most, and how salary trends differ by country and role.",
      challenges: [
        { title: "Multi-Table Data Modelling", description: "The raw data was split across two separate datasets — job salary info and job skills info — which needed to be cleaned separately, then related through a shared key." },
        { title: "ETL Pipeline Design", description: "Building a repeatable Extract, Transform, Load process to clean both datasets — removing duplicates, fixing data types, trimming whitespace — before loading them into the data model." },
        { title: "Writing DAX Measures", description: "Calculating median salaries across different filters (global, US-only, non-US) required writing precise DAX measures inside Power Pivot rather than relying on standard Pivot Table aggregations." },
        { title: "Answering Business Questions with Visuals", description: "Translating analytical findings into clear Pivot Charts and slicer-driven dashboards that communicate insights to a non-technical audience." }
      ],
      solutions: [
        { title: "Power Query ETL Pipeline", description: "Created two separate Power Query queries — data_jobs_salary and data_jobs_skills2 — applying transformations including type corrections, column removal, text standardization, and duplicate checks before loading both into the Excel Data Model." },
        { title: "Power Pivot Relational Model", description: "Built a relationship between the two tables using job_id as the connecting key inside Power Pivot, enabling cross-table analysis of skills and salaries in a single model." },
        { title: "DAX Measures for Salary Analysis", description: "Wrote three DAX measures — Median Salary, Median Salary US, and Median Salary Non-US — using MEDIAN and CALCULATE functions to compare compensation across geographies and roles." },
        { title: "Interactive Pivot Charts & Slicers", description: "Built Pivot Charts for skill demand vs. salary and added Country and Job Title slicers, enabling users to dynamically filter all visuals simultaneously." }
      ],
      results: [
        { metric: "SQL #1", description: "Most in-demand skill — appeared in ~65% of Data Analyst job postings" },
        { metric: "Spark", description: "Highest median salary among all analyzed skills" },
        { metric: "3 DAX Measures", description: "Global, US, and Non-US median salary calculations" },
        { metric: "Full ETL", description: "End-to-end Power Query pipeline from raw data to clean data model" }
      ],
      testimonial: {
        text: "This was my most technically demanding Excel project. Building a full ETL pipeline, a relational data model, and writing DAX measures from scratch gave me a genuine understanding of how business intelligence works — not just how to make a chart.",
        author: "Alade Zaccheous",
        role: "Data Analyst"
      }
       },
    "apex-bank-analysis": {
      id: "apex-bank-analysis",
      title: "ApexBank Analysis",
      subtitle: "End-to-End Power BI Analytics Using Power Query & DAX",
      image: "/projects/ApexBank.png",
      client: "Personal Project",
      industry: "Data Analytics",
      duration: "1 weeks",
      team: "TechCrush Project",
      technologies: ["Power BI", "Power Query","DAX","Pivot Charts", "Slicers"],
      githubUrl: "https://github.com/ZACCH0/JOB-SKILLS_AND-SALARY-ANALYSIS",
      overview: "A comprehensive Excel analytics project that examines the relationship between job skills and salaries across the data industry. Using a full ETL pipeline via Power Query, a relational data model in Power Pivot, and DAX measures, the project answers four key business questions about which skills are in demand, which pay the most, and how salary trends differ by country and role.",
      challenges: [
        { title: "Multi-Table Data Modelling", description: "The raw data was split across two separate datasets — job salary info and job skills info — which needed to be cleaned separately, then related through a shared key." },
        { title: "ETL Pipeline Design", description: "Building a repeatable Extract, Transform, Load process to clean both datasets — removing duplicates, fixing data types, trimming whitespace — before loading them into the data model." },
        { title: "Writing DAX Measures", description: "Calculating median salaries across different filters (global, US-only, non-US) required writing precise DAX measures inside Power Pivot rather than relying on standard Pivot Table aggregations." },
        { title: "Answering Business Questions with Visuals", description: "Translating analytical findings into clear Pivot Charts and slicer-driven dashboards that communicate insights to a non-technical audience." }
      ],
      solutions: [
        { title: "Power Query ETL Pipeline", description: "Created two separate Power Query queries — data_jobs_salary and data_jobs_skills2 — applying transformations including type corrections, column removal, text standardization, and duplicate checks before loading both into the Excel Data Model." },
        { title: "Power Pivot Relational Model", description: "Built a relationship between the two tables using job_id as the connecting key inside Power Pivot, enabling cross-table analysis of skills and salaries in a single model." },
        { title: "DAX Measures for Salary Analysis", description: "Wrote three DAX measures — Median Salary, Median Salary US, and Median Salary Non-US — using MEDIAN and CALCULATE functions to compare compensation across geographies and roles." },
        { title: "Interactive Pivot Charts & Slicers", description: "Built Pivot Charts for skill demand vs. salary and added Country and Job Title slicers, enabling users to dynamically filter all visuals simultaneously." }
      ],
      results: [
        { metric: "SQL #1", description: "Most in-demand skill — appeared in ~65% of Data Analyst job postings" },
        { metric: "Spark", description: "Highest median salary among all analyzed skills" },
        { metric: "3 DAX Measures", description: "Global, US, and Non-US median salary calculations" },
        { metric: "Full ETL", description: "End-to-end Power Query pipeline from raw data to clean data model" }
      ],
      testimonial: {
        text: "This was my most technically demanding Power BI project. Building a full ETL pipeline, a relational data model, and writing DAX measures from scratch gave me a genuine understanding of how business intelligence works — not just how to make a chart.",
        author: "Alade Zaccheous",
        role: "Data Analyst"
      }
    },
    "hospital-dashboard": {
      id: "apex-bank-analysis",
      title: "Hostpital Management Dashboard",
      subtitle: "Power BI Analytics Using Power Query & DAX",
      image: "/projects/hospital-dashboard.png",
      client: "Personal Project",
      industry: "Data Analytics",
      duration: "6 days",
      team: "TechCrush",
      technologies: ["Power BI", "Power Query","DAX","Pivot Charts", "Slicers"],
      githubUrl: "https://github.com/ZACCH0/JOB-SKILLS_AND-SALARY-ANALYSIS",
      overview: "A comprehensive Excel analytics project that examines the relationship between job skills and salaries across the data industry. Using a full ETL pipeline via Power Query, a relational data model in Power Pivot, and DAX measures, the project answers four key business questions about which skills are in demand, which pay the most, and how salary trends differ by country and role.",
      challenges: [
        { title: "Multi-Table Data Modelling", description: "The raw data was split across two separate datasets — job salary info and job skills info — which needed to be cleaned separately, then related through a shared key." },
        { title: "ETL Pipeline Design", description: "Building a repeatable Extract, Transform, Load process to clean both datasets — removing duplicates, fixing data types, trimming whitespace — before loading them into the data model." },
        { title: "Writing DAX Measures", description: "Calculating median salaries across different filters (global, US-only, non-US) required writing precise DAX measures inside Power Pivot rather than relying on standard Pivot Table aggregations." },
        { title: "Answering Business Questions with Visuals", description: "Translating analytical findings into clear Pivot Charts and slicer-driven dashboards that communicate insights to a non-technical audience." }
      ],
      solutions: [
        { title: "Power Query ETL Pipeline", description: "Created two separate Power Query queries — data_jobs_salary and data_jobs_skills2 — applying transformations including type corrections, column removal, text standardization, and duplicate checks before loading both into the Excel Data Model." },
        { title: "Power Pivot Relational Model", description: "Built a relationship between the two tables using job_id as the connecting key inside Power Pivot, enabling cross-table analysis of skills and salaries in a single model." },
        { title: "DAX Measures for Salary Analysis", description: "Wrote three DAX measures — Median Salary, Median Salary US, and Median Salary Non-US — using MEDIAN and CALCULATE functions to compare compensation across geographies and roles." },
        { title: "Interactive Pivot Charts & Slicers", description: "Built Pivot Charts for skill demand vs. salary and added Country and Job Title slicers, enabling users to dynamically filter all visuals simultaneously." }
      ],
      results: [
        { metric: "SQL #1", description: "Most in-demand skill — appeared in ~65% of Data Analyst job postings" },
        { metric: "Spark", description: "Highest median salary among all analyzed skills" },
        { metric: "3 DAX Measures", description: "Global, US, and Non-US median salary calculations" },
        { metric: "Full ETL", description: "End-to-end Power Query pipeline from raw data to clean data model" }
      ],
      testimonial: {
        text: "This was my most technically demanding Power BI project. Building a full ETL pipeline, a relational data model, and writing DAX measures from scratch gave me a genuine understanding of how business intelligence works — not just how to make a chart.",
        author: "Alade Zaccheous",
        role: "Data Analyst"
      }
    }
  };

  const caseStudy = caseStudies[projectId as string];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-all"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-4">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </button>
          <div className="flex gap-3">
            {caseStudy.liveUrl && (
              <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-all">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {caseStudy.githubUrl && (
              <a href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:border-amber-600 hover:text-amber-600 transition-all">
                <Github size={14} /> View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative">
        <img src={caseStudy.image} alt={caseStudy.title}
          className="w-full h-64 md:h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container max-w-6xl mx-auto px-4 pb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{caseStudy.title}</h1>
            <p className="text-lg text-slate-300">{caseStudy.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Meta Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
          {[
            { label: "Client", value: caseStudy.client },
            { label: "Industry", value: caseStudy.industry },
            { label: "Duration", value: caseStudy.duration },
            { label: "Team", value: caseStudy.team },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="font-semibold text-slate-900 dark:text-white text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.technologies.map((tech: string) => (
              <span key={tech} className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{caseStudy.overview}</p>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <AlertCircle className="text-red-500" size={24} /> Challenges
            </h2>
            <div className="space-y-4">
              {caseStudy.challenges.map((c: any, i: number) => (
                <div key={i} className="p-4 border border-red-100 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 rounded-xl">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{c.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <CheckCircle className="text-green-500" size={24} /> Solutions
            </h2>
            <div className="space-y-4">
              {caseStudy.solutions.map((s: any, i: number) => (
                <div key={i} className="p-4 border border-green-100 dark:border-green-900/30 bg-green-50 dark:bg-green-900/10 rounded-xl">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{s.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <TrendingUp className="text-amber-500" size={24} /> Results & Outcomes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.results.map((r: any, i: number) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-100 dark:border-amber-800/30">
                <div className="text-3xl font-bold text-amber-600 mb-2">{r.metric}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">{r.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white">
          <blockquote className="text-lg italic text-slate-300 mb-6">"{caseStudy.testimonial.text}"</blockquote>
          <div>
            <p className="font-semibold text-white">{caseStudy.testimonial.author}</p>
            <p className="text-amber-400 text-sm">{caseStudy.testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
