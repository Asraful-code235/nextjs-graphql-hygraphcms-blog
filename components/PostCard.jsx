import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ post }) => {
  // console.log(post);
  return (
    <div className="bg-slate-50  rounded-lg p-0 lg:p-8 pb-12 mb-8">
      {/* <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          className="object-top absolute  h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          src={post.featuredImage.url}
          alt={post.title}
          width={320}
          height={320}
          priority
        />
      </div> */}
      <h1
        className="transition duration-200 text-start mb-8 cursor-pointer
      hover:text-indigo-600 text-3xl font-semibold
      "
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex  text-start items-center justify-start mb-8 ">
        <div className="flex items-center justify-start mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            src={post.author.photo.url}
            alt={post.author.name}
            width={35}
            height={35}
            priority
            className=" w-[45px] h-[45px] rounded-full border border-indigo-400"
          />
          <p className="inline text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 ml-1 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="ml-[2px] border ">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4  mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className=" transition font-medium rounded-full text-white px-8 py-3 duration-500 transform hover:-translate-y-1 inline-block bg-indigo-600">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
