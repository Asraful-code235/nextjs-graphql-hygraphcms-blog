import Head from 'next/head';
import { getPosts } from '../services';

import { PostCard, Categories, PostWidget } from '../components';

export const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div className="container h-auto mx-auto px-10 mb-8">
      <h1 className="text-slate-900 px-8  font-bold text-2xl capitalize mb-8 ">
        Articles
      </h1>
      <main className=" grid grid-cols-1  lg:grid-cols-12 gap-12">
        <section className="relative  lg:col-span-8 col-span-1 ">
          {posts.map((post, i) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </section>
        <section className=" lg:col-span-4 col-span-1">
          <div className=" lg:sticky relative  top-8">
            <PostWidget />
            <Categories />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 10,
  };
}
