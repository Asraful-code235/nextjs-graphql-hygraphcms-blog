import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPost, getSimilarPosts } from '../services';
import Image from 'next/image';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPost().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);
  return (
    <div className=" rounded-lg p-8 mb-8">
      <h3
        className="text-xl mb-8 font-semibold  pb-2 border-b-2 border-b-slate-200
   "
      >
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex  items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              width={60}
              height={60}
              src={post.featuredImage.url}
              className="w-[60px] h-[60px] align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format('MMM d, YYYY')}
            </p>
            <Link
              className="text-sm text-slate-500"
              href={`/post/${post.slug}`}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
