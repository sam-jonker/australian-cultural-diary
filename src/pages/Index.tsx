import { posts } from "@/data/posts";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";

const Index = () => {
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-3">Journal Entries</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of cultural observations and experiences from my time in Australia
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sortedPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
