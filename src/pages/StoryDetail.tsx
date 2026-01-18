import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Skeleton } from '@/components/ui/skeleton';

export default function StoryDetail() {
  const { slug } = useParams();

  const { data: story, isLoading } = useQuery({
    queryKey: ['story', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Skeleton className="h-10 w-64 mb-8" />
            <Skeleton className="h-80 w-full max-w-2xl" />
          </div>
        </main>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Story Not Found</h1>
            <Button asChild>
              <Link to="/stories">Back to Stories</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <section className="py-16 lg:py-24 bg-background parchment-texture">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Stories
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="book-cover max-w-md mx-auto lg:mx-0"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-burgundy/30 p-8 flex flex-col justify-center items-center relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold/20 rounded-bl-3xl" />
                  <BookOpen className="h-16 w-16 text-primary mb-6" />
                  <h2 className="font-display text-2xl font-bold text-foreground text-center">
                    {story.title}
                  </h2>
                  <span className="mt-2 px-4 py-1 bg-background/80 rounded-full text-sm">
                    {story.version_type}
                  </span>
                  <div className="absolute left-0 inset-y-0 w-4 bg-gradient-to-r from-ink/20 to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-4">
                  {story.version_type}
                </span>
                <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  {story.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">{story.description}</p>
                {story.synopsis && (
                  <p className="text-muted-foreground mb-8">{story.synopsis}</p>
                )}

                {story.features && (
                  <div className="mb-8">
                    <h3 className="font-display text-xl font-semibold mb-4">Features</h3>
                    <ul className="space-y-3">
                      {story.features.map((feature: string) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button size="lg" className="font-semibold">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Reading
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
