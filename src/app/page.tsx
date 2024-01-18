"use client"

import MediaPlayer from '@/components/MediaPlayer'
import Suggestion from '@/components/Suggestion'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex">
        <div className="mr-8">
          <MediaPlayer/>
        </div>
        <div className="flex-grow">
          <Suggestion/>
        </div>
      </div>
    </main>
  )
}
