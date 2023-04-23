import { client } from "~/utils/sanityClient";
import Layout from "~/components/Layout";
import BlogLink from "~/components/blog/BlogLink";
import { urlFor } from "~/utils/sanityHelpers";

export type BlogPost = {
  _createdAt: string;
  _updatedAt: string;
  _id: string;
  _type: string;
  title: string;
  author: { _ref: string; name: string; profilePic: string };
  slug: { current: string };
  headerImage: string;
  content: {
    _type: string;
    _key: string;
    style: string;
    children: { _type: string; _key: string; text: string }[];
  }[];
};

const Blog: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  return (
    <Layout className="max-w-5xl">
      <h1 className="text-5xl text-base-content">Blog Posts</h1>
      <section className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
        {posts
          .map((post) => ({
            ...post,
            author: {
              ...post.author,
              profilePic: urlFor(post.author.profilePic),
            },
            headerImage: urlFor(post.headerImage),
          }))
          .map((post) => (
            <BlogLink key={post._id} post={post} />
          ))}
      </section>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts: BlogPost[] = await client.fetch(`
    *[_type == "blogpost"]{
      ...,
      "author": author->,
    }
  `);

  return {
    props: {
      posts,
    },
  };
}
