
import YoutubeVideoPlayer from '../components/YoutubeVideoPlayer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <YoutubeVideoPlayer 
          width={300}
          videoId={'https://youtu.be/1Yzr3XNRZM8'}
        />
      </div>
    </main>
  )
}
