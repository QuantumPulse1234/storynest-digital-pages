import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import storynestLogo from '@/assets/storynest-logo.png';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Stories', href: '/stories' },
    { name: 'Blog', href: '/blog' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src={storynestLogo} 
                alt="StoryNest Media" 
                className="h-12 w-12 rounded-full object-cover" 
              />
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Interactive storytelling reimagined. Choose your characters, 
              influence the plot, and explore multiple endings in our 
              immersive narrative experiences.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-full transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:text-right">
            <h3 className="font-display font-semibold text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} StoryNest Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
