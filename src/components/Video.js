// src/components/CharacterSlider.js
import React, { useState } from 'react'

// Array com dados dos personagens e vídeos
const characters = [
  {
    id: 1,
    name: 'Character 1',
    image: 'https://via.placeholder.com/150', // Imagem do card
    video: '/assets/videos/character1.mp4' // Vídeo de fundo
  },
  {
    id: 2,
    name: 'Character 2',
    image: 'https://via.placeholder.com/150',
    video: '/assets/videos/character2.mp4'
  },
  {
    id: 3,
    name: 'Character 3',
    image: 'https://via.placeholder.com/150',
    video: '/assets/videos/character3.mp4'
  }
]

const CharacterSlider = () => {
  const [activeVideo, setActiveVideo] = useState(null) // Estado para o vídeo ativo

  return (
    <div
      className="relative w-full h-96 overflow-hidden"
      style={{
        background: activeVideo
          ? `url(${activeVideo}) no-repeat center/cover`
          : '#000' // Vídeo de fundo
      }}
    >
      {/* Slider Container */}
      <div className="flex w-full h-full whitespace-nowrap animate-scroll-infinite">
        {characters.map((character) => (
          <div
            key={character.id}
            className="inline-block w-64 h-80 mx-4 bg-white rounded-lg shadow-lg cursor-pointer"
            onMouseEnter={() => setActiveVideo(character.video)}
            onMouseLeave={() => setActiveVideo(null)}
          >
            {/* Card de Personagem */}
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{character.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharacterSlider
