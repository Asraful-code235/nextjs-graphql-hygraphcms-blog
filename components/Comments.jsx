import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, []);

  return (
    <div>
      {comments.length > 0 && (
        <div className="bg-stone-100 rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-slate-600">
            {comments.length}
            <span className="mx-2 text-slate-600 text-lg">Comment</span>
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className=" bg-white p-4 rounded-lg  border-stone-300 mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold flex items-center capitalize text-slate-700">
                  {comment.name}
                  <span className="mx-2"> </span>
                  <span className="text-xs text-slate-500">
                    {moment(comment.createdAt).format('MMM DD, YYYY')}
                  </span>
                </span>
              </p>
              <p className="whitespace-pre-line text-sm text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
