import { Mail, Phone, Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [location, navigate] = useLocation();

  // Same cross-page section handling as Navigation
  const goSection = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (location === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:aladezaccheous52@gmail.com",
      color: "hover:text-red-500",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      href: "https://wa.me/2349161302024",
      color: "hover:text-green-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/zacchtech",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/zaccchtech",
      color: "hover:text-pink-500",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      href: "https://x.com/zaccchtech",
      color: "hover:text-slate-900",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.svg" alt="ZACCH Logo" className="w-8 h-8" />
              <span className="font-bold text-lg">ZACCH</span>
            </div>
            <p className="text-slate-400 text-sm">
              Building innovative solutions with Python, Django, and data expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/#about" onClick={(e) => goSection(e, "#about")} className="hover:text-amber-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#projects" onClick={(e) => goSection(e, "#projects")} className="hover:text-amber-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#blog" onClick={(e) => goSection(e, "#blog")} className="hover:text-amber-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#contact" onClick={(e) => goSection(e, "#contact")} className="hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="/#projects" onClick={(e) => goSection(e, "#projects")} className="hover:text-amber-500 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/#projects" onClick={(e) => goSection(e, "#projects")} className="hover:text-amber-500 transition-colors">
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="/#projects" onClick={(e) => goSection(e, "#projects")} className="hover:text-amber-500 transition-colors">
                  Django Development
                </a>
              </li>
              <li>
                <a href="/#projects" onClick={(e) => goSection(e, "#projects")} className="hover:text-amber-500 transition-colors">
                  API Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:aladezaccheous52@gmail.com"
                  className="hover:text-amber-500 transition-colors"
                >
                  aladezaccheous52@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2349161302024"
                  className="hover:text-amber-500 transition-colors"
                >
                  +234 916 130 2024
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 transition-colors duration-300 ${link.color}`}
                  title={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            © {currentYear} Alade Zaccheous Kehinde. All rights reserved. | Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
