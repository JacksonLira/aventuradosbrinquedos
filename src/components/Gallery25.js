import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/_MarcaMutante NibGC ToyStory.png'
import Imgbg from '../assets/toy-story-cloud.jpg'

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    // Lista de public IDs das imagens armazenadas no Cloudinary
    'IMG_1073_cp7lxz',
    'IMG_1074_fspzjr',
    'IMG_1072_qrjuik',
    'IMG_1071_mjxdjv',
    'IMG_1070_imttfc',
    'IMG_1068_y7c0l1',
    'IMG_1069_ave8fn',
    'IMG_1067_hl1w1n',
    'IMG_1064_ozbnxo',
    'IMG_1061_xuqjji',
    'IMG_1057_cockwh',
    'IMG_1062_falzdm',
    'IMG_1060_g34ziw',
    'IMG_1059_qwjcxj',
    'IMG_1058_mx2auv',
    'IMG_1056_zflgao',
    'IMG_1055_pg5345',
    'IMG_1054_mkj6ep',
    'IMG_1053_mmvvfp',
    'IMG_1042_kmha56',
    'IMG_1035_jlzsgr',
    'IMG_1050_fu8w6b',
    'IMG_1048_fr0fxs',
    'IMG_1049_voko7u',
    'IMG_1051_lrdafy',
    'IMG_1047_smzxij',
    'IMG_1041_i9iy0t',
    'IMG_1044_bgcft2',
    'IMG_1045_qxcqii',
    'IMG_1043_jdwqzs',
    'IMG_1046_d6pgax',
    'IMG_1038_tw5yrp',
    'IMG_1028_dohsaq',
    'IMG_1033_fjgmzn',
    'IMG_1037_rqc0pm',
    'IMG_1039_sahses',
    'IMG_1052_qjkmsz',
    'IMG_1040_efkirq',
    'IMG_1034_so0b7x',
    'IMG_1036_g9hoyr',
    'IMG_1026_g9jmpu',
    'IMG_1031_i7ytee',
    'IMG_1029_j7nkul',
    'IMG_1032_ovnnm5',
    'IMG_1027_eobxab',
    'IMG_1011_qhkbgb',
    'IMG_1010_aeyzju',
    'IMG_1025_tfuogg',
    'IMG_1030_mubm9d',
    'IMG_1008_c82t9d',
    'IMG_1023_soemhm',
    'IMG_1021_ekmnvv',
    'IMG_1022_wy2qrv',
    'IMG_1024_hhnf6e',
    'IMG_1009_kr0zts',
    'IMG_1007_mbnrr3',
    'IMG_1019_qz420b',
    'IMG_1016_nu9dpx',
    'IMG_1018_rjox7l',
    'IMG_1020_ybj4ql',
    'IMG_1004_x6ea6w',
    'IMG_1005_hoyent',
    'IMG_1017_q8biqa',
    'IMG_1006_nh8mr0',
    'IMG_1014_e7zusb',
    'IMG_1015_txuhzh',
    'IMG_1002_sx7aqk',
    'IMG_1003_gvr98m',
    'IMG_1013_ebruqz',
    'IMG_1012_lggv81',
    'IMG_1001_sl9hju',
    'IMG_1000_zjaedm'
    // Adicione mais imagens conforme necessário
  ]

  const handleFullscreen = image => {
    setFullscreenImage(image)
  }

  const handleDownload = async image => {
    const url = `https://res.cloudinary.com/dstywrq5n/image/upload/${image}.jpg` // URL da imagem original

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
        Galeria de Imagens: 25/10/2024
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
        <img
          className="absolute bg-fixed opacity-60 top-48 right-56 w-[700px]"
          src={Logo}
          alt=""
        />
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
