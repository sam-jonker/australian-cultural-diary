import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/data/posts";

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // Extract first image from markdown content
  const imageMatch = post.content.match(/!\[.*?\]\((.*?)\)/);
  const coverImage = imageMatch ? imageMatch[1] : null;

  return (
    <Link to={`/post/${post.id}`} className="block">
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden">
        {coverImage && (
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl">{post.title}</CardTitle>
          <CardDescription>{formattedDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
          <span className="inline-block mt-4 text-primary font-medium hover:text-accent transition-colors">
            Read more →
          </span>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;
