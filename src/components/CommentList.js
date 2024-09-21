import React, { useState } from 'react';
import CommentItem from './CommentItem';

const CommentList = () => {
  // Estado inicial da lista de comentários
  const [comments, setComments] = useState([
    { id: 1, text: 'Entrada Gratuita', likes: 0, dislikes: 0 },
    { id: 2, text: 'Estacionamento Gratuito', likes: 0, dislikes: 0 },
    { id: 3, text: 'Localize seu assento com os anfitriões.', likes: 0, dislikes: 0 },
    { id: 1, text: 'Este é um ótimo post!', likes: 0, dislikes: 0 },
    { id: 2, text: 'Concordo com você!', likes: 0, dislikes: 0 },
    { id: 3, text: 'Não achei tão interessante.', likes: 0, dislikes: 0 },
    { id: 1, text: 'Este é um ótimo post!', likes: 0, dislikes: 0 },
    { id: 2, text: 'Concordo com você!', likes: 0, dislikes: 0 },
    { id: 3, text: 'Não achei tão interessante.', likes: 0, dislikes: 0 },
    { id: 1, text: 'Este é um ótimo post!', likes: 0, dislikes: 0 },
    { id: 2, text: 'Concordo com você!', likes: 0, dislikes: 0 },
    { id: 3, text: 'Não achei tão interessante.', likes: 0, dislikes: 0 },
  ]);

  // Função para atualizar as avaliações dos comentários
  const updateRating = (commentId, type) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? {
            ...comment,
            likes: type === 'like' ? comment.likes + 1 : comment.likes,
            dislikes: type === 'dislike' ? comment.dislikes + 1 : comment.dislikes,
          }
        : comment
    ));
  };

  return (
    <div className="grid mt-20 gap-2  mobile:grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-4 laptop:grid-cols-4 laptop:grid-rows-6 ">
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} updateRating={updateRating} />
      ))}
    </div>
  );
};

export default CommentList;