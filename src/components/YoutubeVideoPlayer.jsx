"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

const YoutubeVideoPlayer = ({ videoId, width }) => {
  const [domLoading, setDomLoading] = useState(false);

  useEffect(() => {
    setDomLoading(true);
  }, [])

  return (
    <>
      {
        domLoading && <ReactPlayer
          url={videoId}
          width={width}
          height={width * 6 / 9}
          controls
          config={{
            youtube: {
              playerVars: {
                origin: 'https://next-client-server-test.vercel.app'
              }
            }
          }}
          origin={'http://localhost:3000'}
        />
      }

    </>

  );
};

export default YoutubeVideoPlayer;