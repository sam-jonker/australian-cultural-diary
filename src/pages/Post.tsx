import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "@/data/posts";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, List } from "lucide-react";

const Post = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  // Sort posts by date (newest first) to maintain consistent navigation
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Find current post index and get next/previous posts
  const currentIndex = sortedPosts.findIndex(p => p.id === id);
  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Post not found</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          {/* Top Back Button - More Prominent */}
          <div className="mb-8">
            <Link to="/">
              <Button size="lg" className="group">
                <List className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                View All Posts
              </Button>
            </Link>
          </div>
          
          <div className="mb-8">
            <time className="text-sm text-muted-foreground">{formattedDate}</time>
          </div>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t border-border space-y-6">
            {/* Previous/Next Post Navigation */}
            <div className="grid grid-cols-2 gap-4">
              {previousPost ? (
                <Link to={`/post/${previousPost.id}`} className="block">
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-start group">
                    <span className="text-xs text-muted-foreground mb-1 flex items-center">
                      <ArrowLeft className="mr-1 h-3 w-3 transition-transform group-hover:-translate-x-1" />
                      Previous Post
                    </span>
                    <span className="text-sm font-medium line-clamp-2 text-left">{previousPost.title}</span>
                  </Button>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextPost ? (
                <Link to={`/post/${nextPost.id}`} className="block">
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col items-end group">
                    <span className="text-xs text-muted-foreground mb-1 flex items-center">
                      Next Post
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-sm font-medium line-clamp-2 text-right">{nextPost.title}</span>
                  </Button>
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            {/* Bottom Back to All Posts Button */}
            <div className="flex justify-center">
              <Link to="/">
                <Button size="lg" variant="secondary" className="group">
                  <List className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                  Back to All Posts
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Post;
