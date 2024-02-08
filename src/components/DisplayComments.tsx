import React from 'react';
import Comment from './Comment';

const commentsList = [
  { name: 'John Doe', comment: 'Great work on the project!' },
  { name: 'Jane Smith', comment: 'I love the design and layout.' },
  { name: 'Bob Johnson', comment: 'Nice use of colors.' },
];

export default function DisplayComments() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Comments</h2>
      <div className="space-y-4">
        {commentsList.map((comment, index) => (
          <Comment key={index} name={comment.name} comment={comment.comment} />
        ))}
      </div>
    </div>
  );
};
