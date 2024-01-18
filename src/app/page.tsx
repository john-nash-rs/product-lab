"use client"
import React from 'react';
import MediaPlayer from '@/components/MediaPlayer';
import Suggestion from '@/components/Suggestion';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold">Stream Video</h1>
      </header>
      <main className="flex justify-center items-center p-8">
        <div className="flex">
          <div className="mr-8">
            <MediaPlayer />
          </div>
          <div className="flex-grow">
            <Suggestion />
          </div>
        </div>
      </main>
      <footer className="text-center py-4 bg-gray-800">
        <p>&copy; 2024 Stream Video. All rights reserved.</p>
      </footer>
    </div>
  );
}
