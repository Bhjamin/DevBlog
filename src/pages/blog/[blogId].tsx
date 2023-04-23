import Layout from "~/components/Layout";
import { client } from "~/utils/sanityClient";
import { urlFor } from "~/utils/sanityHelpers";
import type { BlogPost } from ".";
import Image from "next/image";

const Post: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { headerImage, author } = post;
  console.log({ post });

  return (
    <Layout className="max-w-5xl">
      <h1 className="text-7xl text-base-content">{post?.title}</h1>
      <p className="my-2 text-xl text-base-content">By: {author.name}</p>
      <div className="flex w-full justify-center">
        <Image src={headerImage} width={480} height={480} alt="" priority />
      </div>
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
