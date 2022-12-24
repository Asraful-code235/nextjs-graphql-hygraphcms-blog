import React, { useState, useEffect, useRef } from 'react';

import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!commentEl || !nameEl || !emailEl) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="rounded-lg bg-stone-100 p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          name="comment"
          id=""
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-stone-200 text-gray-700"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          name="name"
          placeholder="Name"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-stone-200 text-gray-700"
        />
        <input
          type="text"
          ref={emailEl}
          name="email"
          placeholder="Email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-stone-200 text-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeData"
            className=""
            name="storeData"
          />
          <label
            htmlFor="storeData"
            className="text-gray-500 cursor-pointer ml-2"
          >
            Save my e-mail and name{' '}
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          className="transition duration-500 ease-in-out hover:bg-indigo-600 inline-block bg-slate-600 text-lg rounded-full px-8 py-3 cursor-pointer text-white"
          onClick={handleCommentSubmission}
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right mt-3 text-green-500 font-semibold">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
