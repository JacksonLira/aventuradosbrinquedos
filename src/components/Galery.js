import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'

const Gallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    // Lista de public IDs das imagens armazenadas no Cloudinary
    'sample',
    'sample2',
    'teste/o8njput1iukkf0hing2j',
    'teste/ngvja6erjp9x3zik04il',
    'teste/gbqhq15koxrmqcfoem6n'
    // Adicione mais imagens conforme necessário
  ]

  const handleFullscreen = (image) => {
    setFullscreenImage(image)
  }

  const handleDownload = (image) => {
    const url = `https://res.cloudinary.com/dstywrq5n/image/upload/${image}.jpg` // URL da imagem original
    const link = document.createElement('a')
    link.href = url
    link.download = image
    link.click()
  }

  return (
    <CloudinaryContext cloudName="dstywrq5n">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            {/* Imagem com zoom ao passar o mouse */}
            <Image
              publicId={image}
              width="300"
              crop="scale"
              className="w-full h-auto object-cover transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleFullscreen(image)} // Ao clicar, ativa o fullscreen
            />

            {/* Botão de download */}
            <button
              onClick={() => handleDownload(image)}
              className="absolute bottom-2 right-2 bg-red-600 text-yellow-300 p-1 rounded hover:bg-red-300 transition"
            >
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setFullscreenImage(null)} // Ao clicar fora, fecha o fullscreen
        >
          <div className="relative">
            <Image
              publicId={fullscreenImage}
              className="max-w-full max-h-screen"
              crop="scale"
            />
            {/* Botão de fechar o fullscreen */}
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-2 right-2 bg-white text-black p-1 rounded"
            >
              X
            </button>
          </div>
        </div>
      )}
    </CloudinaryContext>
  )
}

export default Gallery
