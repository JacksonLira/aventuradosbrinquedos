import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'

const MultipleInstagramEmbeds = () => {
  const instagramUrls = [
    'https://www.instagram.com/reel/DBZaQLuPx-q/',
    'https://www.instagram.com/reel/DA6hO-XPsC_/',
    'https://www.instagram.com/reel/DAjqp_cvlDD/',
    'https://www.instagram.com/reel/DAmTspEPY7u/',
    'https://www.instagram.com/reel/DAtTiMZv-1j/',
    'https://www.instagram.com/reel/DA1sLqYPCUO/'
  ]

  return (
    <div className="grid bg-transparent laptop:grid-cols-3 laptop:grid-row-2  mobile:grid-row-5 mobile:px-4 tablet:p-0 tablet:gap-3 mobile:grid-cols-1 tablet:grid-cols-2">
      {instagramUrls.map((url, index) => (
        <div
          key={index}
          className="  laptop:w-[360px] mobile:h-[550px] mobile:w-[320px] tablet:w-full tablet:h-full  mobile:mb-24 tablet:mb-1 laptop:gap-4 mobile:right-10  tablet:gap-4 laptop:mb-12 laptop:mr-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)] "
        >
          <InstagramEmbed url={url} />
        </div>
      ))}
    </div>
  )
}

export default MultipleInstagramEmbeds
