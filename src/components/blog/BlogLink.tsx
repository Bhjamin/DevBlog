import Link from "next/link";
import type { BlogPost } from "~/pages/blog";

const BlogLink: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { author, headerImage, title, slug, content } = post;
  const snippet = post.content
    .filter((cont) => cont.style === "normal")?.[0]
    ?.children.filter((child) => child._type === "span")?.[0]?.text;
  return (
    <div className="flex w-full rounded-lg bg-gradient-to-br from-primary to-secondary p-[1px]">
      <Link
        href={`/blog/${slug.current}`}
        className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-lg bg-base-300 p-3 transition-all hover:bg-base-300/95 md:flex-row"
      >
        {headerImage && (
          <div
            style={{ backgroundImage: `url(${headerImage})` }}
            className="hidden w-full bg-contain bg-top bg-no-repeat transition md:block md:w-1/3"
          />
        )}
        <div className={`${headerImage ? "w-full md:w-1/2" : "w-full"}`}>
          <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-2xl text-base-content">
            {title}
          </p>
          <p className="text-base-content">By: {author.name}</p>
          <hr className="my-2" />
          <p className="line-clamp-3 text-base-content lg:line-clamp-5">
            {snippet}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogLink;
