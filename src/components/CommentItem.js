import React from 'react'

import RatingButton from './RatingButton'

const CommentItem = ({ comment, updateRating }) => {
  return (
    <div className="p-9 w-[250px] laptop:h-32  bg-red-300 rounded-lg shadow-md scroll-y-auto overflow-hidden">
      <p className="text-white font-bold">{comment.text}</p>
      <div className="flex items-center mt-3 space-x-3 ">
        {/* Botão de Curtir */}
        <RatingButton
          type="like"
          count={comment.likes}
          onClick={() => updateRating(comment.id, 'like')}
        />
        {/* Botão de Descurtir */}
        <RatingButton
          type="dislike"
          count={comment.dislikes}
          onClick={() => updateRating(comment.id, 'dislike')}
        />
      </div>
    </div>
  )
}

export default CommentItem
