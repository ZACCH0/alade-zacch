import { Share2, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface SocialShareButtonsProps {
  projectTitle: string;
  projectUrl?: string;
  description?: string;
}

export default function SocialShareButtons({
  projectTitle,
  projectUrl = typeof window !== 'undefined' ? window.location.href : '',
  description = 'Check out this amazing project!',
}: SocialShareButtonsProps) {
  const [showToast, setShowToast] = useState(false);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(projectUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(projectTitle)}&url=${encodeURIComponent(projectUrl)}&via=zaccchtech`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(projectUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${projectTitle} - ${projectUrl}`)}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(projectUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const shareButtons = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: shareLinks.linkedin,
      color: 'hover:text-blue-700 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: shareLinks.twitter,
      color: 'hover:text-sky-500 dark:hover:text-sky-400',
      bgColor: 'hover:bg-sky-50 dark:hover:bg-sky-900/20',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: shareLinks.facebook,
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: shareLinks.whatsapp,
      color: 'hover:text-green-600 dark:hover:text-green-400',
      bgColor: 'hover:bg-green-50 dark:hover:bg-green-900/20',
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {shareButtons.map((button) => {
          const Icon = button.icon;
          return (
            <a
              key={button.name}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Share on ${button.name}`}
              className={`p-2 rounded-lg transition-all duration-300 ${button.color} ${button.bgColor} text-slate-600 dark:text-slate-400`}
              aria-label={`Share on ${button.name}`}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        title="Copy project link"
        className="p-2 rounded-lg transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20"
        aria-label="Copy project link"
      >
        <Share2 size={18} />
      </button>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg text-sm animate-fade-in-out">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}
