import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Imgbg from '../assets/toy-story-cloud.jpg'

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    // Lista de public IDs das imagens armazenadas no Cloudinary
    'IMG_1244_kfkivp',
    'IMG_1243_dyx5mk',
    'IMG_1242_tkoihh',
    'IMG_1239_mb2n8v',
    'IMG_1241_qway48',
    'IMG_1237_cwctw6',
    'IMG_1236_ivewng',
    'IMG_1233_uncphx',
    'IMG_1231_lyoqwk',
    'IMG_1232_jjdzk3',
    'IMG_1235_gukdzt',
    'IMG_1230_tx3ifs',
    'IMG_1229_o7or5y',
    'IMG_1227_ros2ml',
    'IMG_1228_lqixcj',
    'IMG_1225_bnd9qj',
    'IMG_1226_cc5sdj',
    'IMG_1222_sd7yyi',
    'IMG_1223_xwgaca',
    'IMG_1224_w5bqyl',
    'IMG_1221_jvahwx',
    'IMG_1220_fcgj5f',
    'IMG_1219_vcimbs',
    'IMG_1216_ndcsxh',
    'IMG_1215_ianwnu',
    'IMG_1218_e7smgp',
    'IMG_1214_zhl9ef',
    'IMG_1217_sy5wkm',
    'IMG_1213_ntsnrt',
    'IMG_1212_so1nmr',
    'IMG_1211_mcjwu4',
    'IMG_1209_se7kcn',
    'IMG_1208_gztssh',
    'IMG_1210_azl4ca',
    'IMG_1206_mbtezb',
    'IMG_1207_sqbvug',
    'IMG_1204_pkkfzn',
    'IMG_1205_g5jfa2',
    'IMG_1203_lkbeub',
    'IMG_1202_yhuksf',
    'IMG_1198_ltao3b',
    'IMG_1199_aurrhv',
    'IMG_1196_qtpojh',
    'IMG_1197_q0dcmc',
    'IMG_1201_sq5b03',
    'IMG_1200_fptnxj',
    'IMG_1195_cggtd5',
    'IMG_1193_gnwbuj',
    'IMG_1192_tnk7tf',
    'IMG_1191_z9uzke',
    'IMG_1190_itqthp',
    'IMG_1189_nqa1re',
    'IMG_1188_hpafoj',
    'IMG_1187_njgo7w',
    'IMG_1185_gesbjw',
    'IMG_1184_vhdcmg',
    'IMG_1183_momuda',
    'IMG_1182_dvevx7',
    'IMG_1180_homeno',
    'IMG_1181_eqhelc',
    'IMG_1175_c9i2hz',
    'IMG_1178_klrfge',
    'IMG_1177_pu0bpu',
    'IMG_1173_krtdom',
    'IMG_1174_dbyoc8',
    'IMG_1176_xv0qry',
    'IMG_1171_awptze',
    'IMG_1170_dlfwpc',
    'IMG_1168_ds6abr',
    'IMG_1165_d7h3qo',
    'IMG_1167_y0yirj',
    'IMG_1158_uetujk',
    'IMG_1155_m2svlc',
    'IMG_1151_q5zk2u',
    'IMG_1153_nlxdhs',
    'IMG_1150_n5wtqw',
    'IMG_1148_agupxr',
    'IMG_1149_whwkub',
    'IMG_1147_okhinm',
    'IMG_1145_pvpgel',
    'IMG_1143_hep5os',
    'IMG_1144_cgw2eo',
    'IMG_1141_xnyzuk',
    'IMG_1142_wee0mf',
    'IMG_1140_yz8bds',
    'IMG_1139_jmrnx4',
    'IMG_1138_q9gwat',
    'IMG_1137_ln0qaq',
    'IMG_1136_ce3k5s',
    'IMG_1135_gegce5',
    'IMG_1134_idwzho',
    'IMG_1133_vrxsnl',
    'IMG_1132_o1ew8c',
    'IMG_1131_if36vw',
    'IMG_1130_qybqcc',
    'IMG_1129_h04drt',
    'IMG_1128_ejp7oy',
    'IMG_1122_dbqet4',
    'IMG_1127_hfvdy3',
    'IMG_1125_quka0c',
    'IMG_1124_hjfczi',
    'IMG_1121_q2pe6t',
    'IMG_1120_yadrrq',
    'IMG_1119_s6zlup',
    'IMG_1118_zx7wro',
    'IMG_1117_j5jtrj',
    'IMG_1116_zendzr',
    'IMG_1114_oxdu82',
    'IMG_1115_gsollt',
    'IMG_1113_m1z8ri',
    'IMG_1112_sgs9xh',
    'IMG_1111_h3p1qt',
    'IMG_1110_iv9axc',
    'IMG_1109_y9bx2g',
    'IMG_1108_myw3vx',
    'IMG_1107_zoyduv',
    'IMG_1106_hgaiex',
    'IMG_1104_hl8mp0',
    'IMG_1105_hswsrs',
    'IMG_1103_yj3e7l',
    'IMG_1101_ugfmze',
    'IMG_1102_vrvi8t',
    'IMG_1100_pnphcw',
    'IMG_1098_yinmri',
    'IMG_1099_iusnif',
    'IMG_1097_rkc0sj',
    'IMG_1095_ucnhth',
    'IMG_1091_pwml7w',
    'IMG_1092_admxps',
    'IMG_1093_stfb4g',
    'IMG_1094_ouybws',
    'IMG_1096_opuvvq',
    'IMG_1090_cvzgsu',
    'IMG_1089_fzlhxi',
    'IMG_1087_iatbqz',
    'IMG_1086_bnbvvp',
    'IMG_1085_trikp2',
    'IMG_1083_s2oyng'
    // Adicione mais imagens conforme necessário
  ]

  const handleFullscreen = image => {
    setFullscreenImage(image)
  }

  const handleDownload = async image => {
    const url = `https://res.cloudinary.com/dstywrq5n/image/upload/v1730500643/${image}.jpg` // URL da imagem original

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
        Galeria de Imagens: 26/10/2024
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
