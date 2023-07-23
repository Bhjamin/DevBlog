import Layout from "~/components/Layout";
import { client } from "~/utils/sanityClient";
import { urlFor } from "~/utils/sanityHelpers";
import Head from "next/head";
import type { BlogPost } from ".";
import Image from "next/image";
import { format } from "date-fns";
import H1 from "~/components/blog/H1";
import H2 from "~/components/blog/H2";
import H3 from "~/components/blog/H3";
import H4 from "~/components/blog/H4";
import H5 from "~/components/blog/H5";
import H6 from "~/components/blog/H6";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

const Post: React.FC<{ post: BlogPost }> = ({ post }) => {
  const { headerImage, author, content } = post || {};
  console.log({ post });

  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta property="og:title" content={post?.title} key="title" />
      </Head>
      <Layout className="max-w-3xl">
        <div className="relative flex w-full justify-center">
          <Image src={headerImage} width={480} height={480} alt="" priority />
          <h1 className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent to-base-100 pt-12 text-7xl font-bold text-base-content">
            {post?.title}
          </h1>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:gap-4">
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
              {format(new Date(post._createdAt), "MMMM do, yyyy @ hh:mm aaa")}
            </p>
            {post._createdAt !== post._updatedAt && (
              <p className="text-base-content">
                Updated:{" "}
                {format(new Date(post._updatedAt), "MMMM do, yyyy @ hh:mm aaa")}
              </p>
            )}
          </div>
        </div>
        <hr className="my-6" />
        <section className="mx-auto w-full max-w-3xl text-white">
          <PortableText
            value={content}
            components={{
              block: {
                h1: ({ children }) => <H1>{children}</H1>,
                h2: ({ children }) => <H2>{children}</H2>,
                h3: ({ children }) => <H3>{children}</H3>,
                h4: ({ children }) => <H4>{children}</H4>,
                h5: ({ children }) => <H5>{children}</H5>,
                h6: ({ children }) => <H6>{children}</H6>,
                blockquote: ({ children }) => (
                  <blockquote className="my-2 ml-1 border-l-2 border-l-purple-500 pl-3">
                    {children}
                  </blockquote>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="my-3 list-inside list-disc">{children}</ul>
                ),
                number: ({ children }) => (
                  <ol className="my-3 list-inside list-decimal">{children}</ol>
                ),
              },
              listItem: {
                bullet: ({ children }) => <li>{children}</li>,
              },
              marks: {
                link: ({ children, value }) => {
                  const rel = !(
                    value as unknown as HTMLAnchorElement
                  ).href.startsWith("/")
                    ? "noreferrer noopener"
                    : undefined;
                  return (
                    <a
                      href={(value as unknown as HTMLAnchorElement).href}
                      rel={rel}
                      className="text-purple-500 underline"
                    >
                      {children}
                    </a>
                  );
                },
                code: ({ children }) => (
                  <code className="my-5 block rounded-md border-2 border-purple-500 px-3 py-2">
                    {children}
                  </code>
                ),
              },
            }}
          />
        </section>
      </Layout>
    </>
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
