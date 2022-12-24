import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ post }) => {
  // console.log(post);
  return (
    <div className="borderRight  border-t-2  border-t-slate-300  flex flex-col-reverse md:flex-row justify-between items-center  p-8  mb-4 ">
      <div className="flex-1">
        <div className="block lg:flex  text-start items-center justify-start mb-4 ">
          <div className="flex items-center justify-start lg:mb-0 w-full lg:w-auto mr-2">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              width={35}
              height={35}
              priority
              className=" w-[45px] h-[45px] rounded-full border "
            />
          </div>
          <div className="flex flex-col items-start justify-start font-medium text-gray-700 ">
            <div>
              <p className="inline  text-gray-700 font-semibold  text-base">
                {post.author.name}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1 inline mr-2 ml-3 text-pink-500"
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
              <span className=" text-xs text-slate-500 ">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>

            <p className="text-slate-500 font-light text-sm">
              {post.author.bio}
            </p>
          </div>
        </div>
        <h1
          className="transition duration-200 text-start mb-2 cursor-pointer
      hover:text-indigo-600 text-3xl font-semibold
      "
        >
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>

        <p className="text-start text-base text-gray-500 font-normal  mb-8">
          {post.excerpt}
        </p>
        <div className="text-start">
          <Link href={`/post/${post.slug}`}>
            <span className="underline-offset-8 underline transition font-medium rounded-full text-slate-800  py-3 duration-300 transform hover:-translate-y-1 inline-block ">
              Continue Reading
            </span>
          </Link>
        </div>
      </div>
      <div className=" w-full md:w-[190px]  mb-6 md:mb-0  h-60 md:h-[150px]  flex justify-center items-center relative overflow-hidden ">
        <Image
          className="object-top md:object-center   h-60 w-full object-cover md:object-contain  rounded-t-lg  lg:rounded-2xl"
          src={post.featuredImage.url}
          alt={post.title}
          width={320}
          height={320}
          priority
        />
      </div>
    </div>
  );
};

export default PostCard;
