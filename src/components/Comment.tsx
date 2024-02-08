import React from 'react';

export default function Comment(props) {
  const { name, comment } = props;
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4">
      <strong className="block font-semibold">{name}</strong>
      <p className="text-sm">{comment}</p>
      <hr className="my-2 border-gray-700" />
    </div>
  );
};
