import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'

const MultipleInstagramEmbeds = () => {
  const instagramUrls = [
    'https://www.instagram.com/reel/DBRYBJQpbd1/',
    'https://www.instagram.com/reel/DBOykTAp54A/', // Post 1
    'https://www.instagram.com/reel/DBMNJpOpKUq/', // Reel 1
    'https://www.instagram.com/reel/DBHDb8gJC6j/',
    'https://www.instagram.com/reel/DA6hO-XPsC_/'
  ]

  return (
    <div className="grid bg-transparent laptop:grid-cols-3 laptop:grid-row-2  mobile:grid-row-5 mobile:py-10 tablet:py-4 mobile:grid-cols-1 tablet:grid-cols-2">
      {instagramUrls.map((url, index) => (
        <div
          key={index}
          className="  laptop:w-[360px] mobile:gap-5 mobile:w-[380px] tablet:w-[390px] tablet:h-full  mobile:mb-24 tablet:mb-1 laptop:gap-4  tablet:p-10 laptop:mb-12 laptop:mr-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)]"
        >
          <InstagramEmbed url={url} />
        </div>
      ))}
    </div>
  )
}

export default MultipleInstagramEmbeds
