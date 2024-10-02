import React from 'react'

const RatingButton = ({ type, count, onClick }) => {
  // Define o ícone e o rótulo com base no tipo de botão (curtir ou descurtir)
  const isLike = type === 'like'
  const icon = isLike ? '👍' : '👎'
  const colorClass = isLike ? 'text-green-500' : 'text-red-500'

  return (
    <button
      onClick={onClick}
      className={`flex items-center ${colorClass} hover:text-opacity-75`}
    >
      <span className="mr-1">{icon}</span>
      <span>{count}</span>
    </button>
  )
}

export default RatingButton
