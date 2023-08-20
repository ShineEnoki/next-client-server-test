'use client'
import YoutubeVideoPlayer from './components/YoutubeVideoPlayer'
import Nav from './components/Nav'

export default function Home() {
  return (
    <main className="">
      <div>
        <Nav />
        <YoutubeVideoPlayer 
          width={300}
          videoId={'https://youtu.be/1Yzr3XNRZM8'}
        />
      </div>
    </main>
  )
}
