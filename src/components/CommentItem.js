import PropTypes from 'prop-types'
import React from 'react'

import RatingButton from './RatingButton'

const CommentItem = ({ comment, updateRating }) => {
  return (
    <div className="p-9 w-[250px] laptop:h-32 bg-red-300 rounded-lg shadow-md scroll-y-auto overflow-hidden">
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

// Definindo as PropTypes para o componente CommentItem
CommentItem.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired // ou PropTypes.number se o ID for numérico
  }).isRequired,
  updateRating: PropTypes.func.isRequired
}

export default CommentItem
