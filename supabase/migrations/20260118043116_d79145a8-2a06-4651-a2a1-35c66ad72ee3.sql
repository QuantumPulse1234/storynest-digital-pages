-- Create stories table
CREATE TABLE public.stories (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    synopsis TEXT,
    version_type TEXT NOT NULL,
    cover_image TEXT,
    features TEXT[],
    characters JSONB,
    external_link TEXT,
    is_published BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL DEFAULT 'StoryNest Media',
    cover_image TEXT,
    is_published BOOLEAN NOT NULL DEFAULT true,
    published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (no auth needed for reading)
CREATE POLICY "Stories are viewable by everyone" 
ON public.stories 
FOR SELECT 
USING (is_published = true);

CREATE POLICY "Blog posts are viewable by everyone" 
ON public.blog_posts 
FOR SELECT 
USING (is_published = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_stories_updated_at
BEFORE UPDATE ON public.stories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial stories
INSERT INTO public.stories (title, slug, description, synopsis, version_type, features) VALUES
('Sons of Distant Fathers', 'sons-of-distant-fathers-black', 'Experience the powerful narrative with Black characters, exploring themes of family, identity, and reconciliation.', 'A moving interactive story about fathers and sons navigating the complexities of their relationships across generations. Your choices shape the journey of healing and understanding.', 'Black Characters Version', ARRAY['Character Customization', 'Choice-Driven Narrative', 'Multiple Endings', 'Emotional Depth']),
('Sons of Distant Fathers', 'sons-of-distant-fathers-white', 'Experience the powerful narrative with White characters, exploring themes of family, identity, and reconciliation.', 'A moving interactive story about fathers and sons navigating the complexities of their relationships across generations. Your choices shape the journey of healing and understanding.', 'White Characters Version', ARRAY['Character Customization', 'Choice-Driven Narrative', 'Multiple Endings', 'Emotional Depth']),
('Sons of Distant Fathers', 'sons-of-distant-fathers-animated', 'Experience the animated version of our flagship story with dynamic visuals and immersive storytelling.', 'A moving interactive story about fathers and sons navigating the complexities of their relationships across generations. Now with stunning animation that brings every scene to life.', 'Animated Version', ARRAY['Full Animation', 'Voice Acting', 'Dynamic Visuals', 'Immersive Experience']);

-- Insert initial blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, author) VALUES
('Creating Branching Narratives', 'creating-branching-narratives', 'Learn the art of crafting stories where every decision matters and multiple paths lead to different destinies.', E'# Creating Branching Narratives\n\nInteractive storytelling is an art form that combines the craft of traditional narrative with the engagement of player agency. When readers become participants, the story transforms into something deeply personal.\n\n## The Power of Choice\n\nEvery branching point in a narrative represents a moment where the reader''s values, instincts, and desires shape the story. These choices should feel meaningful—not arbitrary selections, but genuine crossroads that reveal character.\n\n## Designing Decision Trees\n\nEffective branching narratives require careful planning. Each path must feel complete, each ending must satisfy, and the overall structure must remain coherent despite its complexity.\n\n## Balancing Scope and Depth\n\nThe challenge lies in creating enough branches to feel meaningful without diluting the narrative quality. Quality over quantity ensures each path offers a compelling experience.', 'StoryNest Media'),
('Building Meaningful Character Relationships', 'building-meaningful-character-relationships', 'Discover how interactive storytelling creates deeper connections between readers and characters through customization and choice.', E'# Building Meaningful Character Relationships\n\nIn interactive fiction, characters aren''t just observed—they''re shaped by the reader''s choices and customizations. This creates a unique bond between participant and protagonist.\n\n## The Customization Connection\n\nWhen readers choose their character''s appearance, background, or values, they invest a piece of themselves in the story. This investment deepens engagement and emotional response.\n\n## Dynamic Relationships\n\nRelationships in interactive stories evolve based on choices. A harsh word to a friend, a moment of kindness to a stranger—these decisions accumulate, creating relationship dynamics as complex as real life.\n\n## Emotional Authenticity\n\nThe goal is emotional truth. Whether the story explores family bonds, romantic connections, or friendships, the feelings must resonate with genuine human experience.', 'StoryNest Media'),
('The Future of Interactive Storytelling', 'future-of-interactive-storytelling', 'Explore emerging technologies and trends shaping the next generation of interactive narratives and immersive experiences.', E'# The Future of Interactive Storytelling\n\nAs technology evolves, so do the possibilities for interactive narrative. We stand at the threshold of experiences that blur the line between story and reality.\n\n## Emerging Technologies\n\nFrom AI-driven narrative adaptation to immersive VR experiences, new technologies are expanding what interactive stories can be. The future promises stories that respond to readers in increasingly sophisticated ways.\n\n## Personalization at Scale\n\nImagine stories that adapt not just to choices, but to reading patterns, emotional responses, and personal preferences. The next generation of interactive fiction will know its readers.\n\n## Preserving the Human Element\n\nDespite technological advancement, the heart of storytelling remains human. Technology should enhance, not replace, the emotional truths that make stories matter.', 'StoryNest Media');