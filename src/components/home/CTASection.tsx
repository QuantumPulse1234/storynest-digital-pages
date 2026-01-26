import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import storynestLogo from '@/assets/storynest-logo.png';

export function CTASection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background parchment-texture relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-burgundy/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl border border-border p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-tr-full" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <img src={storynestLogo} alt="StoryNest Media" className="h-10 w-10 rounded-full object-cover" />
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Get Started Today
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Ready to become the author of your own adventure? Explore our 
                collection of interactive stories and discover narratives that 
                respond to your every choice.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="font-semibold text-lg px-8">
                  <Link to="/stories">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Your Journey
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold text-lg px-8"
                >
                  <Link to="/blog">Read Our Blog</Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-8">
                Join thousands of readers experiencing storytelling like never before.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
