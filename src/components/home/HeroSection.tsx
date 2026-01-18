import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Feather, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden parchment-texture">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-burgundy/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-secondary-foreground">
                Interactive Fiction Experience
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Interactive Storytelling{' '}
              <span className="text-primary">Reimagined</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Your story, your way — choose characters, influence the plot, 
              and explore multiple endings in immersive narratives that 
              respond to your every decision.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="font-semibold text-lg px-8">
                <Link to="/stories">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Our Stories
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold text-lg px-8"
              >
                <a href="#about">Learn More</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-display text-2xl lg:text-3xl font-bold text-primary">
                  3+
                </p>
                <p className="text-sm text-muted-foreground">Story Versions</p>
              </div>
              <div>
                <p className="font-display text-2xl lg:text-3xl font-bold text-primary">
                  50+
                </p>
                <p className="text-sm text-muted-foreground">Unique Paths</p>
              </div>
              <div>
                <p className="font-display text-2xl lg:text-3xl font-bold text-primary">
                  ∞
                </p>
                <p className="text-sm text-muted-foreground">Possibilities</p>
              </div>
            </div>
          </motion.div>

          {/* Book Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Open Book Illustration */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] lg:w-96 lg:h-[480px]">
                {/* Book shadow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-ink/20 blur-xl rounded-full" />
                
                {/* Book base */}
                <div className="absolute inset-0 bg-gradient-to-br from-leather to-burgundy rounded-lg transform -rotate-3 shadow-2xl" />
                
                {/* Left page */}
                <div className="absolute inset-y-4 left-4 right-1/2 bg-gradient-to-r from-cream to-parchment rounded-l-sm shadow-inner">
                  <div className="p-4 space-y-2">
                    <div className="h-2 bg-sepia/30 rounded w-4/5" />
                    <div className="h-2 bg-sepia/30 rounded w-full" />
                    <div className="h-2 bg-sepia/30 rounded w-3/4" />
                    <div className="h-2 bg-sepia/30 rounded w-5/6" />
                    <div className="h-2 bg-sepia/30 rounded w-2/3" />
                    <div className="mt-4 h-2 bg-sepia/30 rounded w-4/5" />
                    <div className="h-2 bg-sepia/30 rounded w-full" />
                    <div className="h-2 bg-sepia/30 rounded w-3/4" />
                  </div>
                </div>
                
                {/* Right page */}
                <div className="absolute inset-y-4 right-4 left-1/2 bg-gradient-to-l from-cream to-parchment rounded-r-sm shadow-inner">
                  <div className="p-4 space-y-2">
                    <div className="h-2 bg-sepia/30 rounded w-5/6" />
                    <div className="h-2 bg-sepia/30 rounded w-full" />
                    <div className="h-2 bg-sepia/30 rounded w-4/5" />
                    <div className="h-2 bg-sepia/30 rounded w-2/3" />
                    <div className="h-2 bg-sepia/30 rounded w-full" />
                    <div className="mt-4 h-2 bg-sepia/30 rounded w-3/4" />
                    <div className="h-2 bg-sepia/30 rounded w-5/6" />
                    <div className="h-2 bg-sepia/30 rounded w-full" />
                  </div>
                </div>
                
                {/* Center spine */}
                <div className="absolute inset-y-2 left-1/2 -translate-x-1/2 w-2 bg-gradient-to-r from-leather/50 via-leather to-leather/50 shadow-lg" />
                
                {/* Floating quill */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-8 -right-8"
                >
                  <Feather className="h-16 w-16 text-gold drop-shadow-lg" />
                </motion.div>

                {/* Sparkle effects */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-10 right-10"
                >
                  <Sparkles className="h-6 w-6 text-gold/60" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-20 left-10"
                >
                  <Sparkles className="h-4 w-4 text-gold/40" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
}
