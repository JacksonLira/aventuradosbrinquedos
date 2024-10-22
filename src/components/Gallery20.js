import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/_MarcaMutante NibGC ToyStory.png'
import Imgbg from '../assets/toy-story-cloud.jpg'

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    // Lista de public IDs das imagens armazenadas no Cloudinary
    'IMG_78_mmmr5j',
    'IMG_77_rxnoda',
    'IMG_76_bty4jc',
    'IMG_75_rxhiyz',
    'IMG_74_ek9ifi',
    'IMG_73_ehrkzw',
    'IMG_72_k4a5fm',
    'IMG_71_gmvnu3',
    'IMG_70_om3itc',
    'IMG_69_pdwk9g',
    'IMG_68_le3n9k',
    'IMG_67_ii4t4m',
    'IMG_66_zshici',
    'IMG_65_qv2dki',
    'IMG_64_xhpkol',
    'IMG_63_ivr6rl',
    'IMG_62_rhiv2b',
    'IMG_61_bzxc3x',
    'IMG_60_ckcsto',
    'IMG_59_xfdo1t',
    'IMG_58_hl3mhk',
    'IMG_57_lx9cbh',
    'IMG_56_o0d1n1',
    'IMG_55_lgwr8q',
    'IMG_54_xujklb',
    'IMG_53_a3nytw',
    'IMG_52_pwslkw',
    'IMG_51_grrp3x',
    'IMG_50_sfwqfj',
    'IMG_49_bh8ufx',
    'IMG_48_s5nhzk',
    'IMG_47_df5ngh',
    'IMG_46_rkrhgb',
    'IMG_45_ihd39z',
    'IMG_44_jbb83f',
    'IMG_43_drilhn',
    'IMG_42_e21ybn',
    'IMG_41_mctvjp',
    'IMG_40_zasij9',
    'IMG_39_n5vier',
    'IMG_38_fwcz9o',
    'IMG_37_ienprb',
    'IMG_36_rckxqh',
    'IMG_35_lem9wj',
    'IMG_34_lvglmc',
    'IMG_33_b9aicp',
    'IMG_32_zq0xqw',
    'IMG_31_dk2jyh',
    'IMG_30_ssxtzv',
    'IMG_29_bq9umv',
    'IMG_28_u4q6oh',
    'IMG_27_vxiuff',
    'IMG_26_ydgwst',
    'IMG_25_bqtagc',
    'IMG_24_spffre',
    'IMG_23_tyj3gc',
    'IMG_22_dqva4v',
    'IMG_19_doimlh',
    'IMG_21_trea70',
    'IMG_20_h3dywf',
    'IMG_18_db2x6v',
    'IMG_17_varxcv',
    'IMG_16_okebep',
    'IMG_15_t57bih',
    'IMG_14_lp7u2o',
    'IMG_13_tppsuc',
    'IMG_12_yohr50',
    'IMG_11_tvnwlw',
    'IMG_10_yg9ziv',
    'IMG_9_c2brb5',
    'IMG_8_ddiydi',
    'IMG_7_hwi63i',
    'IMG_6_juamk3',
    'IMG_5_lu3jxp',
    'IMG_4_dmnmar',
    'IMG_3_uvpro1',
    'IMG_2_e0kttj',
    'IMG_1_qsetvo'

    // Adicione mais imagens conforme necessário
  ]

  const handleFullscreen = image => {
    setFullscreenImage(image)
  }

  const handleDownload = async image => {
    const url = `https://res.cloudinary.com/dstywrq5n/image/upload/v1729557613/${image}.jpg` // URL da imagem original

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
        Galeria de Imagens: 20/10/2024
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
