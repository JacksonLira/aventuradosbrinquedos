import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/_MarcaMutante NibGC ToyStory.png'
import Imgbg from '../assets/toy-story-cloud.jpg'

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    // Lista de public IDs das imagens armazenadas no Cloudinary
    'IMG_0551_ywzrze',
    'IMG_0539_kyfcf1',
    'IMG_0549_gap2z6',
    'IMG_0547_xo5qwq',
    'IMG_0548_khg4qn',
    'IMG_0535_aw2nvh',
    'IMG_0545_fahxmg',
    'IMG_0542_tyltlb',
    'IMG_0537_ofdjht',
    'IMG_0536_ucowqo',
    'IMG_0544_uj35gv',
    'IMG_0546_amlfv4',
    'IMG_0534_rztw3d',
    'IMG_0541_mwk7iq',
    'IMG_0540_lafeok',
    'IMG_0543_abo7re',
    'IMG_0532_necxna',
    'IMG_0530_qwknci',
    'IMG_0533_d9tvl0',
    'IMG_0529_inpnz2',
    'IMG_0531_pjnua0',
    'IMG_0525_fsyvgm',
    'IMG_0527_nvsgjn',
    'IMG_0526_wylvsf',
    'IMG_0528_ooptwg',
    'IMG_0523_cyiofv',
    'IMG_0524_jffofv',
    'IMG_0522_hcc7fb',
    'IMG_0519_kznpdy',
    'IMG_0520_fmxhjt',
    'IMG_0521_pjqltl',
    'IMG_0514_mspzms',
    'IMG_0509_sdkiqj',
    'IMG_0517_e9wxnn',
    'IMG_0515_m6atra',
    'IMG_0516_kyidlf',
    'IMG_0518_uywulf',
    'IMG_0513_h0cobd',
    'IMG_0511_ee8pdw',
    'IMG_0512_rrzjsm',
    'IMG_0510_oiweye',
    'IMG_0508_orin8b',
    'IMG_0507_wjzizo',
    'IMG_0506_k4aqwd',
    'IMG_0502_pihv2i',
    'IMG_0503_v35cun',
    'IMG_0495_pplogd',
    'IMG_0505_bw4qbh',
    'IMG_0498_afumhj',
    'IMG_0497_mdzfm0',
    'IMG_0501_x2gqhd',
    'IMG_0499_lja1ah',
    'IMG_0504_q1e1hy',
    'IMG_0500_rldatk',
    'IMG_0496_evbcoe',
    'IMG_0492_lacjun',
    'IMG_0494_oge5bb',
    'IMG_0493_ckdvq5'
    // Adicione mais imagens conforme necessário
  ]

  const handleFullscreen = image => {
    setFullscreenImage(image)
  }

  const handleDownload = async image => {
    const url = `https://res.cloudinary.com/dstywrq5n/image/upload/v1729638679/${image}.jpg` // URL da imagem original

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
        Galeria de Imagens: 21/10/2024
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
