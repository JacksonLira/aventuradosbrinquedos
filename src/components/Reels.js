import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'

const MultipleInstagramEmbeds = () => {
  const instagramUrls = [
    'https://www.instagram.com/reel/DBRYBJQpbd1/',
    'https://www.instagram.com/reel/DBOykTAp54A/', // Post 1
    'https://www.instagram.com/reel/DBMNJpOpKUq/', // Reel 1
    'https://www.instagram.com/reel/DBHDb8gJC6j/',
    'https://www.instagram.com/reel/DA6hO-XPsC_/',
    'https://www.instagram.com/reel/DA1sLqYPCUO/'
  ]

  return (
    <div className="grid bg-transparent laptop:grid-cols-3 laptop:grid-row-2  mobile:grid-row-5 mobile:py-10 mobile:grid-cols-1">
      {instagramUrls.map((url, index) => (
        <div
          key={index}
          className="  laptop:w-[360px] mobile:p-5 mobile:w-[550px] laptop:gap-4  mb-12 mr-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)]"
        >
          <InstagramEmbed url={url} />
        </div>
      ))}
    </div>
  )
}

export default MultipleInstagramEmbeds
