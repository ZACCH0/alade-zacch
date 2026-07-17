import { useEffect, useRef } from "react";

/**
 * ClientLogosCarousel Component
 * Displays an infinite scrolling carousel of client logos
 * Features smooth animations, responsive design, and hover effects
 */

interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

const ClientLogosCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const clients: ClientLogo[] = [
    {
      id: "techstartup",
      name: "TechStartup Inc",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-1-CDAeDoohUYRrshsHgtdRzS.webp",
    },
    {
      id: "datacorp",
      name: "DataCorp",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-1-CDAeDoohUYRrshsHgtdRzS.webp",
    },
    {
      id: "creativeagency",
      name: "Creative Agency",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-1-CDAeDoohUYRrshsHgtdRzS.webp",
    },
    {
      id: "financehub",
      name: "FinanceHub",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-1-CDAeDoohUYRrshsHgtdRzS.webp",
    },
    {
      id: "cloudsync",
      name: "CloudSync",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-1-CDAeDoohUYRrshsHgtdRzS.webp",
    },
    {
      id: "innovatelabs",
      name: "InnovateLabs",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-1-CDAeDoohUYRrshsHgtdRzS.webp",
    },
    {
      id: "retailmax",
      name: "RetailMax",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-2-Jnj46nYTkbufeNgjzUQ3o2.webp",
    },
    {
      id: "healthtech",
      name: "HealthTech",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-2-Jnj46nYTkbufeNgjzUQ3o2.webp",
    },
    {
      id: "edusmart",
      name: "EduSmart",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-2-Jnj46nYTkbufeNgjzUQ3o2.webp",
    },
    {
      id: "mediaflow",
      name: "MediaFlow",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-2-Jnj46nYTkbufeNgjzUQ3o2.webp",
    },
    {
      id: "logisticspro",
      name: "LogisticsPro",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-2-Jnj46nYTkbufeNgjzUQ3o2.webp",
    },
    {
      id: "securitynet",
      name: "SecurityNet",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663455179708/ckwWEJ8Rt8NsemUZ86bpYn/client-logos-2-Jnj46nYTkbufeNgjzUQ3o2.webp",
    },
  ];

  // Duplicate clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    let animationFrameId: number;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      // Reset to start when reaching the middle (seamless loop)
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-white border-t border-b border-slate-200">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="text-slate-600 text-lg">
            I've had the privilege of working with innovative companies across
            various industries
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 p-8">
          {/* Fade overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-12 overflow-x-hidden scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 group cursor-pointer"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-32 h-20 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  title={client.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "✓", label: "Continuous Learning" },
            { number: "✓", label: "Fast Delivery" },
            { number: "✓", label: "Data-Driven Solutions" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl font-bold text-amber-600 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosCarousel;
