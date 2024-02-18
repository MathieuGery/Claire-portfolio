import YouTube from 'react-youtube'

export default function ({videoId}: {videoId: string}) {
  const onReady = (event: any) => {
    // Access the player instance
    const player = event.target
  }

  const onError = (error: any) => {
    console.error('YouTube Player Error:', error)
  }

  return (
    <YouTube
      className="sm:overflow-x-auto"
      videoId={videoId}
      onReady={onReady}
      onError={onError}
    />
  )
}