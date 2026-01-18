import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Play, Users } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Skeleton } from '@/components/ui/skeleton';

const iconMap: Record<string, typeof Users> = {
  'Black Characters Version': Users,
  'White Characters Version': Users,
  'Animated Version': Play,
};

const colorMap: Record<string, string> = {
  'Black Characters Version': 'from-primary/20 to-burgundy/30',
  'White Characters Version': 'from-secondary to-sepia/30',
  'Animated Version': 'from-gold/20 to-accent/30',
};

export default function StoriesPage() {
  const { data: stories, isLoading } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="py-16 lg:py-24 bg-background parchment-texture">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Interactive Stories
              </h1>
              <div className="gold-divider" />
              <p className="text-lg text-muted-foreground mt-6">
                Choose your adventure and become part of the narrative.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                [1, 2, 3].map((i) => (
                  <Skeleton key={i} className="aspect-[3/4] rounded-lg" />
                ))
              ) : (
                stories?.map((story, index) => {
                  const Icon = iconMap[story.version_type] || BookOpen;
                  const color = colorMap[story.version_type] || 'from-secondary to-muted';
                  return (
                    <motion.div
                      key={story.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={`/stories/${story.slug}`} className="block group">
                        <div className="book-cover">
                          <div className={`aspect-[3/4] bg-gradient-to-br ${color} p-6 flex flex-col justify-between relative`}>
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gold/20 rounded-bl-3xl" />
                            <div className="w-12 h-12 rounded-lg bg-background/80 flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="mt-auto">
                              <span className="inline-block px-3 py-1 bg-background/80 rounded-full text-xs font-medium mb-3">
                                {story.version_type}
                              </span>
                              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                                {story.title}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {story.description}
                              </p>
                            </div>
                            <div className="absolute left-0 inset-y-0 w-4 bg-gradient-to-r from-ink/20 to-transparent" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4 px-1">
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                            Read Synopsis
                          </span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
