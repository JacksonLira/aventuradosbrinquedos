import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/_MarcaMutante NibGC ToyStory.png'
import Imgbg from '../assets/toy-story-cloud.jpg'

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    // Lista de public IDs das imagens armazenadas no Cloudinary
    'dia24/nywelgwokyg0um8jgkyt',
    'dia24/muomdyfh4wmwmptgclh5',
    'dia24/kv7oqsfoxxkepf00mp2r',
    'dia24/uxewcwfbufrzxrp2wlmg',
    'dia24/cdtz7fjozgfkkzbzr6nm',
    'dia24/lkjmzc0aepiw18mpppoh',
    'dia24/twqht8seamrunsiplytn',
    'dia24/x8nwhmjilsihdl7wo1jx',
    'dia24/ywksycr5negchsayksmb',
    'dia24/nr9p9mgncwj3fo2lcii1',
    'dia24/loaqqjr51yjjtxblgnsd',
    'dia24/dgdiepleexmvoq6ef3j6',
    'dia24/wbfnh5vghsdcdyynvl7j',
    'dia24/ej1w8cbkuhsgdsgmrtxd',
    'dia24/lsat6kqinirsidcofu5z',
    'dia24/tlru7f8tvj1h4ik1gjpk',
    'dia24/pqngpklphjipqdu2hebu',
    'dia24/npbedgldiijnujqvfqq6',
    'dia24/yjz5veu0axtbjc94misd',
    'dia24/bkzvyrhkcfilixectnse',
    'dia24/yag0odgksqxltg8irzva',
    'dia24/zq3nb8nmbifyesphoui9',
    'dia24/eiaaqpb9ogaralgkerne',
    'dia24/sb4wc7xbkqk15p49yuq0',
    'dia24/u2z10b4l4wtnnamjs4ci',
    'dia24/wuagz1wnr72pwq2q15bc',
    'dia24/d5ckn0bdmgourn5dkrfl',
    'dia24/xwkurquhtped87sb6nf4',
    'dia24/gzii8t4u3ywxndkdlxuq',
    'dia24/dthuxnkc8udqnuwonm2c',
    'dia24/srz1v5p8joidysoe1xfh',
    'dia24/yes14owhsqg5phvbqvkv',
    'dia24/o2n22p7ldkafaz9jjbar',
    'dia24/midepdarzkjyqahpq6wx',
    'dia24/vgneftewpsxiadud7chh',
    'dia24/p99f8rzsfakkclucdvoj',
    'dia24/dfsflvh3c7btcojer2fv',
    'dia24/dbr1ccrrlkmiorl8v6tq',
    'dia24/amgl08rmrfsalax0xeht',
    'dia24/mbygrjinh4plcsxctmix',
    'dia24/ymd5glqgisdtxnv7auhu',
    'dia24/btoofp6ou817vzp3pfbq',
    'dia24/vazgvoiwcoex7htmckct',
    'dia24/jsusv2aulg47qboiwp2d',
    'dia24/vee2p81rpaqkzqttfjrt',
    'dia24/brywhwvwetcrivysa0p7',
    'dia24/e0jmkxyaxlzlppzgrlrl',
    'dia24/ylggpngtnioc3l9uewxf',
    'dia24/onap6nm2hhjiwcowg1yl',
    'dia24/l6dahqf376cffswum0oo',
    'dia24/lsjpvdbnhxwlentzxqdd',
    'dia24/mngrt1oubzcn3h1io7lz',
    'dia24/jg4qdqxxaxs0tkcvtkaf',
    'dia24/twivipeg1irqebjiktgg',
    'dia24/wfw4gcjbwjrloopuvfde',
    'dia24/d87kssyzbgdsfqamq2te',
    'dia24/beo4ho74cehg09gwhrmx',
    'dia24/agg6jsxgmkfjpahiaoyk',
    'dia24/akqsuho8xavqcq9ok88z',
    'dia24/bcxgmbz576noakovfeir',
    'dia24/onvi3jivk50iz5n5v1vn',
    'dia24/cg7xon2x714yqtcxyni9',
    'dia24/cxqqip8rpakqxvboqaiw',
    'dia24/rj6rqpvddggwdinszobg',
    'dia24/dqvzs6u4oande2piwjyh',
    'dia24/elkxmswrjkt5mlqinjmm',
    'dia24/c4qimxrn3xwidb1065s3',
    'dia24/nf7lz7owbi9algldts0c',
    'dia24/hkznwjazsodogoiuhv3a',
    'dia24/y42d3emkmkmnymmwszyc',
    'dia24/ux4imqild7rymt5ditoe',
    'dia24/wiijxzan625qwka1itfx',
    'dia24/nzu4emvdcx7lkvwnl12e',
    'dia24/dfe3w4pwlj2demgrwxse',
    'dia24/kgpvsbppdaqxc220xx5r',
    'dia24/jehoc94q09sbvxf9pocl',
    'dia24/wosrorzyuo4zwemca06x',
    'dia24/muaxxa8idadu6v0plswp',
    'dia24/gfuyo2edjqedx19we8xy',
    'dia24/qxhf4bxn6x3khf0kfneu',
    'dia24/mvpmabok6wlo50mz5xra',
    'dia24/t2eztanzoj98fyoyk5z5',
    'dia24/iysqagidamunvh7io28r',
    'dia24/jev3eckduqd5i006j7i1',
    'dia24/pvbkqbfreczhnivpvis1',
    'dia24/fvwkfi7ynb3nfbonbkpl',
    'dia24/bvxjorfoxa9sufwzlmfd',
    'dia24/owynxbwhzb5snmvokswd',
    'dia24/eishsojcp8rn3d24hjg7',
    'dia24/bchcffhxk88mfyrpwxul',
    'dia24/xxoy1vkwkjshhqhvzyum',
    'dia24/hzkrzxxjxee7sh0pcg9d',
    'dia24/kqmdbizubc1pkrs116hg',
    'dia24/rjmcpxxcmsjyvjui1eze',
    'dia24/ysa5rf2dzknykudruyzo',
    'dia24/vjtnjdyjz1xwu1tq4svx',
    'dia24/wm9j5roax7qw4uvzup9i',
    'dia24/pfkxz59rqyrt0ol143vt',
    'dia24/mzui3dnhqivcuozbxww3',
    'dia24/nwqt8jr9312uia1u9y2r',
    'dia24/mgtagk69m9og6slg9zhu',
    'dia24/iuq6hywi21psqvj8mys2',
    'dia24/tbk9zctslg2oigy9gatt',
    'dia24/r5yrmeetnmugzc4sf4bs',
    'dia24/hgucio6j2gm2km6xrmzw',
    'dia24/hiue5yydewsrp4aiddbi',
    'dia24/stca2zhgbkbptyprz0ev',
    'dia24/jrqvqtyylxmnwxm8rpgy',
    'dia24/urudhdhu9nk91kmvide0',
    'dia24/h1eaxtyekgmpose1ceu4',
    'dia24/aqxqb9dbgjuwbdzysn7m',
    'dia24/mmzwppbhsetr8nyhmxae',
    'dia24/rylzxutn2xepe0indf4n',
    'dia24/fhkebxyaqaxduj69x5cx',
    'dia24/gxtjqnloangkz0ojhxks',
    'dia24/ndpno7k7crgjry8euv69',
    'dia24/mhz6zt4muf0ntp2hsurz',
    'dia24/kkgeb5qzidmm55gsqekb',
    'dia24/tuofwf0s8xvbbwjbaoje',
    'dia24/qxr8yrpz6skhvrhag3pj',
    'dia24/rykektuybhq1ghoiobun',
    'dia24/i5trcicu8j6uowf3580x',
    'dia24/ih0pmsswai4j96qwwris',
    'dia24/edqagbysvksn7wmouahg',
    'dia24/d9ffz1icrufgwbaq2uxy',
    'dia24/ny0yrrorsws8mo8qj2ai'
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
        Galeria de Imagens: 24/10/2024
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
