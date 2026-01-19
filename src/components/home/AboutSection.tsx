import { motion } from 'framer-motion';
import { Users, GitBranch, Layers, Compass } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Character Customization',
    description:
      'Create and personalize your protagonist. Choose appearances, backgrounds, and personalities that resonate with you.',
  },
  {
    icon: GitBranch,
    title: 'Choice-Driven Plot',
    description:
      'Every decision matters. Your choices shape the narrative, affecting relationships, outcomes, and the world around you.',
  },
  {
    icon: Layers,
    title: 'Multiple Endings',
    description:
      'No two journeys are alike. Discover dozens of unique endings based on the paths you choose to follow.',
  },
  {
    icon: Compass,
    title: 'Multi-Genre Selection',
    description:
      'From adventure to romance, sci-fi to mystery — explore stories across diverse genres that captivate your imagination.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background parchment-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About StoryNest Media
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-muted-foreground mt-6">
            We believe stories should be as unique as the people who experience them. 
            Our interactive narratives put you at the center of every tale, 
            transforming passive reading into active storytelling.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 lg:p-8 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Your Story, Your Journey
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At StoryNest Media, we craft immersive interactive experiences 
              that blur the line between reader and author. Our stories adapt 
              to your choices, creating personalized narratives that reflect 
              your values, curiosity, and imagination.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you seek adventure, romance, mystery, or science fiction, 
              our growing library offers worlds waiting to be shaped by your 
              decisions. Every path leads somewhere new, and every ending 
              tells your unique story.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-muted p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Compass className="h-10 w-10 text-primary" />
                </div>
                <p className="font-display text-xl font-semibold text-foreground">
                  Interactive App Coming Soon
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Choose your path wisely
                </p>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-br-3xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
