import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Imgbg from '../assets/toy-story-cloud.jpg'

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    'IMG_0780_dojbdz',
    'IMG_0775_ie4ocz',
    'IMG_0777_jldpde',
    'IMG_0779_xt8cuv',
    'IMG_0778_cdpbhd',
    'IMG_0771_ttnoam',
    'IMG_0776_ewh55f',
    'IMG_0755_bs0iay',
    'IMG_0754_cztrvb',
    'IMG_0774_b72aod',
    'IMG_0773_dpibnq',
    'IMG_0772_i7pnxf',
    'IMG_0770_zmkqqc',
    'IMG_0769_gypqta',
    'IMG_0753_kjzqtm',
    'IMG_0763_stpdga',
    'IMG_0750_jarkcj',
    'IMG_0751_rkwzxl',
    'IMG_0752_adq1ox',
    'IMG_0765_sjfgyr',
    'IMG_0768_pqi8gn',
    'IMG_0766_oet2cx',
    'IMG_0764_wfcihl',
    'IMG_0749_wh1fha',
    'IMG_0761_jbew3k',
    'IMG_0762_vgviac',
    'IMG_0748_sifae0',
    'IMG_0748_sifae0',
    'IMG_0760_bvxhra',
    'IMG_0758_yvv3d2',
    'IMG_0747_vgsyop',
    'IMG_0745_d8ekyk',
    'IMG_0756_txfduj',
    'IMG_0746_ctqriq',
    'IMG_0744_arwrau',
    'IMG_0744_arwrau',
    'IMG_0743_lh6yg6'
  ]

  const handleFullscreen = image => {
    setFullscreenImage(image)
  }

  const handleDownload = async image => {
    const url = `https://res.cloudinary.com/dstywrq5n/image/upload/v1729727647/${image}.jpg` // URL da imagem original

    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = `${image}.jpg` // Nome do arquivo para download
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('Erro ao fazer download da imagem:', error)
    }
  }

  return (
    <div
      className="relative inset-0 bg-cover h-screen w-full bg-fixed overflow-y-scroll "
      style={{ backgroundImage: `url(${Imgbg})` }}
    >
      <h1 className="text-yellow-300 font-GillCondensedB font-semibold text-3xl drop-shadow-[0_10px_10px_rgba(0,0,0,10)]">
        Galeria de Imagens: 22/10/2024
      </h1>
      <div className=" items-end bg-red-500 laptop:ml-[15px] skew-x-12 laptop:p-4 laptop:w-20 laptop: mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
        <Link
          to="/"
          className="text-white font-black hover:text-blue-700 transition duration-300"
        >
          <h2 className=" -skew-x-12">Home</h2>
        </Link>
      </div>
      <div>
        <CloudinaryContext cloudName="dstywrq5n">
          <div className="p-10 grid  mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md"
              >
                {/* Imagem com zoom ao passar o mouse */}
                <Image
                  publicId={image}
                  width="300"
                  height="200"
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
      </div>
    </div>
  )
}

export default ImageGallery
