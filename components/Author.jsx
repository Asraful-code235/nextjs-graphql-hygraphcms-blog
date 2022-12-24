import Image from 'next/image';
import React from 'react';

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-indigo-500 bg-opacity-60">
      <div className="absolute flex items-center justify-center left-0 right-0 -top-14">
        <Image
          unoptimized
          alt={author.name}
          height={100}
          width={100}
          src={author.photo.url}
          className="align-middle rounded-full w-[100px] h-[100px]"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-base ">{author.bio}</p>
    </div>
  );
};

export default Author;
