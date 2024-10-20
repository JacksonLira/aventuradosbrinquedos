import { CloudinaryContext, Image } from 'cloudinary-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/_MarcaMutante NibGC ToyStory.png'
import Imgbg from '../assets/toy-story-cloud.jpg'

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null) // Para controlar o fullscreen

  const images = [
    // Lista de public IDs das imagens armazenadas no Cloudinary
    'dia19/19102024/ywkzlnubdyna65l9fn68',
    'dia19/19102024/zhokilj1koekgyg7pftp',
    'dia19/19102024/zztlwepu1tebgozwiler',
    'dia19/19102024/atmww1uwnfihbiiywzcw',
    'dia19/19102024/b2ullwcr2cuplob8fuu3',
    'dia19/19102024/b33srxh1v92s162colop',
    'dia19/19102024/bfrkzvc6uhgs3lo3mmg9',
    'dia19/19102024/bkdce0gai6hox3z8yv4r',
    'dia19/19102024/bkh7cxzgdhoseefsogsb',
    'dia19/19102024/bqc6by19ngy7jkzf0hvs',
    'dia19/19102024/cgh7q039hjndjzqp2xeh',
    'dia19/19102024/cuhwjq0uthbd6qgg94pl',
    'dia19/19102024/dhakdso0blbpiafvicv1',
    'dia19/19102024/dtfttbibm4uluuospo5g',
    'dia19/19102024/e8zh5qevtxuceuzuljpk',
    'dia19/19102024/ehq61fcwdnd7e2pnqp03',
    'dia19/19102024/fqpudahs1ht36nzmygvw',
    'dia19/19102024/fta3kzgaiz5l7qnqjztn',
    'dia19/19102024/h7a3igavpwubm9wrceb4',
    'dia19/19102024/hiqeelis7p7pv6lba5mu',
    'dia19/19102024/hllfavvwouyey1jbf0fw',
    'dia19/19102024/hquyb6khiy99b4ey6cy1',
    'dia19/19102024/iadyy8fvliex2jl0d6fk',
    'dia19/19102024/inymbw2hsc5rgsvkzuag',
    'dia19/19102024/irvmus74yano4ooyqx40',
    'dia19/19102024/iwone3l6kin2asaucfft',
    'dia19/19102024/jm7ale77hx3ru3a70nmq',
    'dia19/19102024/k00xor6jgbw9jdf0f9em',
    'dia19/19102024/lejbwapf6bdn3qtwucwc',
    'dia19/19102024/leleeukdcjhd7ohckab8',
    'dia19/19102024/lx5zxjtnmbmiecqu6jw6',
    'dia19/19102024/m2ghmsvvoqwftdcgfwsy',
    'dia19/19102024/m4nycp9zvv90ecdarapi',
    'dia19/19102024/mkkykqhrtqej3aukbmmk',
    'dia19/19102024/n1geeau5qxucynvd1axq',
    'dia19/19102024/nlxlfs56t4mqorw9crfe',
    'dia19/19102024/ntmowjookfu403wqyzby',
    'dia19/19102024/oeew7wcw18q1bcrnq9ff',
    'dia19/19102024/oienmkrlq6psrby5wmyf',
    'dia19/19102024/oifrvzgdcdgrwhgpgpp1',
    'dia19/19102024/ph3seakkspkbjhnks5vd',
    'dia19/19102024/pkws9nwqn3o2v9nwpwuh',
    'dia19/19102024/q7ecsk7y7wl0pt80foyn',
    'dia19/19102024/qkw0ok6slvphzgzfulxm',
    'dia19/19102024/qlfqh2eifo3isvqt8vab',
    'dia19/19102024/qvhjt7dk3kcfveot2a0v',
    'dia19/19102024/qvupwwu8xm8k0fxy1ifv',
    'dia19/19102024/r6gjmjn4jnw5umrelujs',
    'dia19/19102024/rqsxb4v0jmevjmqgzfma',
    'dia19/19102024/rw4fem35h65zib7rpiho',
    'dia19/19102024/tbunjh6jonhaqqicvcpl',
    'dia19/19102024/te4xusx7aap8keyctbob',
    'dia19/19102024/tsi6hhhbooyvfm5tpzlr',
    'dia19/19102024/u41simcbnauxqng3rs7q',
    'dia19/19102024/ua2nsltuuev9mzzvqwbp',
    'dia19/19102024/uchfaex1bzfgj45g1mne',
    'dia19/19102024/uj1u84dnoxqw8sburag0',
    'dia19/19102024/uopmf9p6u9sac32pnypc',
    'dia19/19102024/uy48yo7xohflkxge9nbr',
    'dia19/19102024/vkugxdiv9qmv97furybt',
    'dia19/19102024/vr5ahhusy9k6niyactnt',
    'dia19/19102024/vsd2pztdnwhiiyyimges',
    'dia19/19102024/vzgr4aftqp6jyt0memu6',
    'dia19/19102024/w2wcfaoxtlcl5jw16emv',
    'dia19/19102024/waporqf4ec5fxms3esfv',
    'dia19/19102024/wy6pn1wc6hsjgz5mguf6',
    'dia19/19102024/x21u9anh3lcv2re4iqzw',
    'dia19/19102024/xdcnkvv0duj2gl62opjv',
    'dia19/19102024/xqpblkhbwm6egwufejz0',
    'dia19/19102024/y91z5hdswwnhpbsb8obc',
    'dia19/19102024/ye8tsq9psccndja8zlef',
    'dia19/19102024/yq282ozujait4ec2khk2',
    'dia19/19102024/ytpekhry6e8fftdpq8si'

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
      <h1 className="text-yellow-300 font-GillCondensedB font-semibold tablet:text-2xl tablet:ml-72 laptop:text-3xl laptop:ml-96 mobile:text-lg mobile:ml-24 drop-shadow-[0_10px_10px_rgba(0,0,0,10)]">
        Galeria de Imagens: 19/10/2024
      </h1>
      <div className=" laptop:items-end bg-red-500 laptop:ml-[15px] skew-x-12 laptop:p-4 laptop:w-20 laptop: mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
        <Link
          to="/"
          className="text-white font-black hover:text-blue-700 transition duration-300"
        >
          <h2 className=" -skew-x-12 mobile:text-center">Home</h2>
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
