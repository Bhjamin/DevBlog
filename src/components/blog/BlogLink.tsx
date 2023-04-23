import Link from "next/link";
import type { BlogPost } from "~/pages/blog";

const BlogLink: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { author, headerImage, title, slug, content } = post;
  const snippet = post.content
    .filter((cont) => cont.style === "normal")?.[0]
    ?.children.filter((child) => child._type === "span")?.[0]?.text;
  return (
    <div className="flex aspect-[2/1] w-full rounded-lg bg-gradient-to-br from-primary to-secondary p-[1px]">
      <Link
        href={`/blog/${slug.current}`}
        className="flex h-full w-full gap-4 rounded-lg bg-base-300 p-3 transition-all hover:bg-base-300/95"
      >
        {headerImage && (
          <div
            style={{ backgroundImage: `url(${headerImage})` }}
            className="w-1/2 rounded-md bg-contain"
          />
        )}
        <div className={`${headerImage ? "w-1/2" : "w-full"}`}>
          <p className="text-2xl text-base-content">{title}</p>
          <p className="text-base-content">By: {author.name}</p>
          <hr className="my-2" />
          <p className="text-base-content">{snippet}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogLink;
