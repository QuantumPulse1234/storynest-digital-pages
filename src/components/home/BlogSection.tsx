import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Skeleton } from '@/components/ui/skeleton';

export function BlogSection() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts-preview'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      return data;
    },
  });

  return (
    <section id="blog" className="py-20 lg:py-32 bg-card">
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
            Insights & Articles
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-muted-foreground mt-6">
            Explore the art and craft of interactive storytelling through our 
            articles, insights, and behind-the-scenes looks at narrative design.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-background rounded-xl border border-border p-6">
                  <Skeleton className="h-4 w-24 mb-4" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </>
          ) : (
            posts?.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        5 min read
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border text-sm font-medium text-primary">
                      Read Article
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))
          )}
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
            <Link to="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
