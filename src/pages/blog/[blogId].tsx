import Layout from "~/components/Layout";
import { client } from "~/utils/sanityClient";
import { urlFor } from "~/utils/sanityHelpers";
import type { BlogPost } from ".";
import Image from "next/image";
import { format } from "date-fns";
import H1 from "~/components/blog/H1";

const Post: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { headerImage, author, content } = post;
  console.log({ post });

  return (
    <Layout className="max-w-3xl">
      <div className="relative flex w-full justify-center">
        <Image src={headerImage} width={480} height={480} alt="" priority />
        <h1 className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent to-base-100 pt-12 text-7xl font-bold text-base-content">
          {post?.title}
        </h1>
      </div>
      <div className="mt-4 flex gap-4">
        <Image
          src={author.profilePic}
          alt={author.name}
          width={75}
          height={75}
          className="h-20 w-20 rounded-full"
        />
        <div>
          <p className="my-2 text-xl text-base-content">By: {author.name}</p>
          <p className="text-base-content">
            Written:{" "}
            {format(new Date(post._createdAt), "MMMM do yyyy @ hh:mm aaa")}
          </p>
          {post._createdAt !== post._updatedAt && (
            <p className="text-base-content">
              Updated:{" "}
              {format(new Date(post._updatedAt), "MMMM do yyyy @ hh:mm aaa")}
            </p>
          )}
        </div>
      </div>
      <hr className="my-6" />
      <section className="mx-auto w-full max-w-3xl">
        {content.map((block) => {
          const { style, children } = block;

          if (style === "h1") {
            return children.map((child) => (
              <div key={child._key}>
                <H1 className="text-base-content">{child.text}</H1>
                <br />
              </div>
            ));
          }
          if (style === "normal") {
            return children.map((child) => (
              <div key={child._key}>
                <p className="text-xl text-base-content">{child.text}</p>
                <br />
              </div>
            ));
          }
          return (
            <p key={block._key}>
              UNSTYLED:{" "}
              {children.map((child) => (
                <span key={child._key}>{child.text}</span>
              ))}
            </p>
          );
        })}
      </section>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts: BlogPost[] = await client.fetch(`
    *[_type == "blogpost"]
  `);

  // Generate the paths for each blog post
  const paths = posts.map((post) => ({
    params: { blogId: post.slug.current },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({
  params,
}: {
  params: { blogId: string };
}) {
  console.log({ params });
  const posts: BlogPost[] = await client.fetch(`
    *[_type == "blogpost" && slug.current == "${params.blogId}"]{
      ...,
      "author": author->,
    }
  `);

  return {
    props: {
      post: posts?.map((post) => ({
        ...post,
        author: {
          ...post.author,
          profilePic: urlFor(post.author.profilePic),
        },
        headerImage: urlFor(post.headerImage),
      }))?.[0],
    },
  };
}
