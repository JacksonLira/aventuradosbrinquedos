import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Imgbg from '../assets/toy-story-cloud.jpg'

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    // Lista de public IDs das imagens armazenadas no Cloudinary
    'IMG_0837_p2cbnp',
    'IMG_0835_m7q51x',
    'IMG_0834_tt2agy',
    'IMG_0833_u4gmpu',
    'IMG_0832_u1rvgm',
    'IMG_0831_lukhy1',
    'IMG_0830_n86g2m',
    'IMG_0828_qkqkdd',
    'IMG_0829_a9xxsf',
    'IMG_0827_dqhvqw',
    'IMG_0826_xbi3mp',
    'IMG_0825_oqfkov',
    'IMG_0822_unychv',
    'IMG_0824_atlk4u',
    'IMG_0823_gvxwdr',
    'IMG_0821_zvzvdh',
    'IMG_0820_ikefvk',
    'IMG_0819_mr6mnq',
    'IMG_0817_xrhvjv',
    'IMG_0818_te1g5g',
    'IMG_0816_daqc74',
    'IMG_0815_ogsd45',
    'IMG_0814_tiuupv',
    'IMG_0813_ejw3yc',
    'IMG_0812_fryxhb',
    'IMG_0811_dgfnnh',
    'IMG_0810_atohtz',
    'IMG_0808_fo723w',
    'IMG_0807_fe6zle',
    'IMG_0809_jke2w1',
    'IMG_0806_ant4ko',
    'IMG_0805_walu4l',
    'IMG_0801_q9dek7',
    'IMG_0800_u1hl8b',
    'IMG_0804_mpbkbe',
    'IMG_0799_pk0th0',
    'IMG_0803_px3dhu',
    'IMG_0802_oy5iew',
    'IMG_0798_ekyvqo',
    'IMG_0795_ksyevb',
    'IMG_0797_rm0i8o',
    'IMG_0794_oqepxq',
    'IMG_0793_me8fsd',
    'IMG_0792_j6ojz5',
    'IMG_0791_dm1ror',
    'IMG_0790_zlbrlw',
    'IMG_0789_riaiw7',
    'IMG_0788_lxacxu',
    'IMG_0787_d2bwdu',
    'IMG_0785_wk4n02',
    'IMG_0786_vnyscm',
    'IMG_0784_tmkmuv'
    // Adicione mais imagens conforme necessário
  ]

  const handleFullscreen = image => {
    setFullscreenImage(image)
  }

  const handleDownload = async image => {
    const url = `https://res.cloudinary.com/dstywrq5n/image/upload/v1729813826/${image}.jpg` // URL da imagem original

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
        Galeria de Imagens: 23/10/2024
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
