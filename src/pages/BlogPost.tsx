import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export default function BlogPost() {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
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
          <div className="container mx-auto px-4 max-w-3xl">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-6 w-48 mb-8" />
            <Skeleton className="h-96 w-full" />
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Post Not Found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
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
        <article className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </motion.header>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary"
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\n/g, '<br />').replace(/^# (.+)/gm, '<h1>$1</h1>').replace(/^## (.+)/gm, '<h2>$1</h2>').replace(/^### (.+)/gm, '<h3>$1</h3>'),
              }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
