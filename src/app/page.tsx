"use client"
// pages/index.js
import React from 'react';
import MediaPlayer from '@/components/MediaPlayer';
import Suggestion from '@/components/Suggestion';
import DisplayComments from '@/components/DisplayComments';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">StreamSpace</h1>
        <div className="flex space-x-4">
          {/* Placeholder for navigation or actions */}
        </div>
        <div>
          {/* Placeholder for user profile or actions */}
        </div>
      </header>

      <main className="flex-grow p-4">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 col-span-12">
            <div className="p-4 rounded-lg shadow-lg bg-gray-800">
              <MediaPlayer />
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            <div className="p-4 space-y-4">
              <Suggestion />
              {/* Duplicate <Suggestion /> components as needed for more suggestions */}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="shadow-lg rounded-lg bg-gray-800 p-4">
            <DisplayComments />
          </div>
        </div>
      </main>

      <footer className="p-4 text-center shadow-inner bg-gradient-to-b from-gray-800 to-gray-900">
        <p>© 2024 StreamSpace. All rights reserved.</p>
      </footer>
    </div>
  );
}
