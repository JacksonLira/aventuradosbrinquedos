import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Imgbg from '../assets/toy-story-cloud.jpg'

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    // Lista de public IDs das imagens armazenadas no Cloudinary
    'IMG_9923_oieczj',
    'IMG_9922_ixfb2s',
    'IMG_9921_wmknod',
    'IMG_9920_u42hbh',
    'IMG_9919_e9ovjv',
    'IMG_9918_scau9o',
    'IMG_9917_bfjfvr',
    'IMG_9916_rhfpbj',
    'IMG_9915_t4jytx',
    'IMG_9914_kcowzl',
    'IMG_9913_hadj1v',
    'IMG_9912_zzyopp',
    'IMG_9911_iirs58',
    'IMG_9910_mm2qfc',
    'IMG_9909_insosc',
    'IMG_9908_cdbomb',
    'IMG_9907_dribys',
    'IMG_9906_mescjt',
    'IMG_9905_pq2kd9',
    'IMG_9904_elal8d',
    'IMG_9903_b3fcxm',
    'IMG_9902_cqyx7y',
    'IMG_9901_l0vojs',
    'IMG_9899_vsp4wu',
    'IMG_9898_lhqutg',
    'IMG_9897_e4tu25',
    'IMG_9896_o45jfx',
    'IMG_9895_efbgdo',
    'IMG_9894_sib2bh',
    'IMG_9893_ytcnjt',
    'IMG_9892_nosb5p',
    'IMG_9891_dnngpp',
    'IMG_9890_yqbrfb',
    'IMG_9889_usvvkz',
    'IMG_9888_tquc6n',
    'IMG_9887_tkyw9k',
    'IMG_9886_tjstx0',
    'IMG_9885_p0c0k4',
    'IMG_9883_tcz2th',
    'IMG_9884_nl62ql',
    'IMG_9882_pamje0',
    'IMG_9881_rzkylq',
    'IMG_9880_mmxqpx',
    'IMG_9879_ewmybs',
    'IMG_9878_czv7wf',
    'IMG_9877_jyitj7',
    'IMG_9876_vxicvk',
    'IMG_9875_i2bd0e',
    'IMG_9874_put3h3',
    'IMG_9873_zjvh09',
    'IMG_9872_b6efhn',
    'IMG_9871_jql1oe',
    'IMG_9870_wwvt9t',
    'IMG_9869_i9ifcv',
    'IMG_9868_re1z8i',
    'IMG_9867_sicczk',
    'IMG_9866_g7nr4p',
    'IMG_9865_grlyll',
    'IMG_9864_dz7uod',
    'IMG_9863_eeyr3a',
    'IMG_9862_pr5mxl',
    'IMG_9861_otl0gd',
    'IMG_9860_pm0660',
    'IMG_9859_mdlrel',
    'IMG_9858_te6mmn',
    'IMG_9856_hi1ck8',
    'IMG_9857_qkm6aw',
    'IMG_9851_zqka2o',
    'IMG_9848_bbww2p',
    'IMG_9843_uoznvb',
    'IMG_9842_q9l9vu',
    'IMG_9841_e8be1f',
    'IMG_9840_j4t1ux',
    'IMG_9839_w2gtpt',
    'IMG_9838_bf7238',
    'IMG_9837_bnqulx',
    'IMG_9836_tfoskw',
    'IMG_9835_hzgytg',
    'IMG_9834_ohwicf',
    'IMG_9833_btjz0p',
    'IMG_9832_up4dki',
    'IMG_9831_onxdsn',
    'IMG_9830_fa5eso',
    'IMG_9828_f1hokx',
    'IMG_9829_i5l1bx',
    'IMG_9825_qwt02u',
    'IMG_9827_cafy5t',
    'IMG_9824_bewots',
    'IMG_9826_g9yxwg',
    'IMG_9823_eqarig',
    'IMG_9822_xoiv25',
    'IMG_9821_pa9dws',
    'IMG_9820_mroa48',
    'IMG_9819_quqy1h',
    'IMG_9816_yskjhm',
    'IMG_9818_ohktje',
    'IMG_9817_nwtmkz',
    'IMG_9815_kceenx',
    'IMG_9814_yvyq9e',
    'IMG_9813_u15evv',
    'IMG_9811_ywbmje',
    'IMG_9812_z35uip',
    'IMG_9810_rkdoks',
    'IMG_9809_dm0zi4',
    'IMG_9808_klz6r6',
    'IMG_9807_vxssvw',
    'IMG_9806_x1a8n4',
    'IMG_9805_fkkp1t',
    'IMG_9804_se75uz',
    'IMG_9803_dwewsz',
    'IMG_9802_nc3ns3',
    'IMG_9801_ajufoe',
    'IMG_9799_zjhgf5',
    'IMG_9800_kntz2s',
    'IMG_9798_tfvlsu',
    'IMG_9795_ffriv1',
    'IMG_9797_jp31wp',
    'IMG_9796_i9so9a',
    'IMG_9793_gtyjly',
    'IMG_9794_bafssz'
    // Adicione mais imagens conforme necessário
  ]

  const handleFullscreen = image => {
    setFullscreenImage(image)
  }

  const handleDownload = async image => {
    const url = `https://res.cloudinary.com/dstywrq5n/image/upload/v1730501356/${image}.jpg` // URL da imagem original

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
        Galeria de Imagens: 27/10/2024
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
