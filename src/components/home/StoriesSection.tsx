import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Play, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stories = [
  {
    slug: 'sons-of-distant-fathers-black',
    title: 'Sons of Distant Fathers',
    version: 'Black Characters Version',
    description:
      'Experience the powerful narrative with Black characters, exploring themes of family, identity, and reconciliation.',
    icon: Users,
    color: 'from-primary/20 to-burgundy/30',
    videoUrl: 'https://storynestmedia.org/wp-content/uploads/2025/08/dgipson-1.mp4',
  },
  {
    slug: 'sons-of-distant-fathers-white',
    title: 'Sons of Distant Fathers',
    version: 'White Characters Version',
    description:
      'Experience the powerful narrative with White characters, exploring themes of family, identity, and reconciliation.',
    icon: Users,
    color: 'from-secondary to-sepia/30',
    videoUrl: 'https://storynestmedia.org/wp-content/uploads/2025/08/dgipson-2.mp4',
  },
  {
    slug: 'sons-of-distant-fathers-animated',
    title: 'Sons of Distant Fathers',
    version: 'Animated Version',
    description:
      'Experience the animated version with dynamic visuals and immersive storytelling that brings every scene to life.',
    icon: Play,
    color: 'from-gold/20 to-accent/30',
    videoUrl: 'https://storynestmedia.org/wp-content/uploads/2025/08/dgipson-3.mp4',
  },
];

export function StoriesSection() {
  return (
    <section id="stories" className="py-20 lg:py-32 bg-background parchment-texture">
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
            Experience Our Stories
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-muted-foreground mt-6">
            Dive into immersive narratives where your choices shape the journey. 
            Each story offers a unique experience tailored to your decisions.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/stories/${story.slug}`} className="block group">
                <div className="book-cover">
                  {/* Video Cover */}
                  <div
                    className={`aspect-[3/4] bg-gradient-to-br ${story.color} relative overflow-hidden`}
                  >
                    <video
                      src={story.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gold/20 rounded-bl-3xl" />
                    
                    {/* Icon */}
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <story.icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground mb-3">
                        {story.version}
                      </span>
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-2">
                        {story.title}
                      </h3>
                      <p className="text-sm text-white/80 line-clamp-2">
                        {story.description}
                      </p>
                    </div>

                    {/* Spine effect */}
                    <div className="absolute left-0 inset-y-0 w-4 bg-gradient-to-r from-ink/20 to-transparent" />
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between mt-4 px-1">
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Read Synopsis
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link to="/stories">
              <BookOpen className="mr-2 h-5 w-5" />
              View All Stories
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
