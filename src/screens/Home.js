import React, { useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../App.css'
import logo from '../assets/_MarcaMutante NibGC ToyStory.png'
import title from '../assets/asaventuras.png'
import Betty from '../assets/Betty.png'
import Bigreja from '../assets/bigreja.png'
import Buzzy from '../assets/Buzz_Lightyear.png'
import ImgIgreja from '../assets/imgigreja.png'
import perso from '../assets/personagens.png'
import Rex from '../assets/Rex.png'
import Sid from '../assets/Sid-Phillips.png'
import Slinky from '../assets/Slinky.png'
import Titletwo from '../assets/titleword.png'
import Bgimg from '../assets/toy-story-cloud.jpg'
import Friends from '../assets/toystorypers.png'
import Imgfinal from '../assets/Turma_Toy_Story_6.png'
import Banner from '../assets/woodbuzzy.png'
import woody from '../assets/Woody_KHIII.png'
import wb from '../assets/woodybannery.png'
import Contagem from '../components/Contagem'
import FAQSection from '../components/FAQsection'
import Modal from '../components/Modal'
import Reels from '../components/Reels'

// eslint-disable-next-line import-helpers/order-imports
import { Link } from 'react-router-dom'
// import { FacebookIcon, InstapaperIcon } from 'react-share'
// eslint-disable-next-line import-helpers/order-imports
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const handleOpenModal = () => {
    setVideoUrl('https://www.youtube.com/embed/1W9i4Q4EyQw') // Altere para a URL desejada
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setVideoUrl('')
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplayspeed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          arrows: true
        }
      }
    ]
  }

  return (
    <div className="App">
      <div className="absolute bg-cover rounded-lg h-23 w-full bg-transparent"></div>
      <div
        className="relative flex justify-center items-center bg-cover laptop:h-screen tablet:h-[700px] mobile:h-[700px] w-full overflow-hidden"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <div className="absolute bg-cover mobile:font-bold  mobile:text-sm tablet:font-bold laptop:font-bold laptop:left-[512px] top-0 font-GillCondensedB drop-shadow-[0_10px_10px_rgba(0,0,40,0.95)] ">
          <h1 className=" text-[#ffda00] font-GillCondensedB laptop:text-3xl tablet:text-lg mobile:text-md text-outline-blue">
            19 A 27 DE OUTUBRO
          </h1>
        </div>
        <img
          className="absolute mobile:w-24 mobile:top-5 tablet:w-24  tablet:top-5 laptop:w-48 laptop:left-0 laptop:top-0 drop-shadow-[0_20px_20px_rgba(30,10,0,0.55)]"
          src={logo}
          alt=""
        />
        <h1 className="absolute text-white mobile:font-bold mobile:top-24 mobile:text-sm tablet:font-bold tablet:top-24 laptop:font-bold laptop:left-10 laptop:top-[150px] font-GillCondensedB drop-shadow-[0_10px_10px_rgba(0,0,0,55)]">
          APRESENTA:
        </h1>
        <img
          className="absolute
                    mobile:w-[600px] mobile:top-32
                    tablet:w-[500px] tablet: tablet:top-24
                    laptop:w-[600px] laptop: laptop:top-20
                    drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)]"
          src={perso}
          alt=""
        />
        <img
          className="absolute z-40 drop-shadow-[0_20px_20px_rgba(0,0,0,0.95)]
                    mobile:w-[300px] mobile:top-[330px]
                    tablet:w-[350px] tablet:top-[280px]
                    laptop:w-[400px] laptop:top-[310px]"
          src={title}
          alt=""
        />
        <img
          className="absolute  
                    mobile:w-[70px] mobile:ml-[280px] mobile:top-[460px]
                    tablet:w-[90px] tablet:ml-[420px] tablet:top-[350px]
                    laptop:w-[90px] laptop:ml-[450px] laptop:top-[450px]
                    z-50 drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)]"
          src={Titletwo}
          alt=""
        />
      </div>
      <div className="absolute tablet:top-[470px] mobile:top-[500px] right-[250px] laptop:top-[500px] laptop:right-[810px] rounded-lg overflow-hidden">
        <Contagem />
      </div>

      <div className="relative bg-cover bg-white-300 mobile:h-96 laptop:h-screen w-full overflow-hidden ">
        <h3 className="text-2xl mobile:text-sm mt-10 mobile:mt-5 tablet:text-lg laptop:text-3xl laptop:mb-10 font-black font-GillBold">
          {' '}
          CONHEÇA OS NOSSOS PERSONAGENS{' '}
        </h3>
        <Slider className="mx-2 mobile:mt-2" {...settings}>
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
            <img
              className="laptop:w-96 mobile:w-[32] transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
              src={woody}
              alt=""
            />
            <h3 className="absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-[#014d98] text-outline-black font-GillBold font-extrabold">
              Woody
            </h3>
            <p className="laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-lg text-black font-GillMedium font-bold text-outline-white">
              Xerife da cidade, Woody tem um grande apreço pelo seu maior amigo,
              Andy.
            </p>
          </div>
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
            <img
              className="laptop:w-96 mobile:w-[32] transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
              src={Buzzy}
              alt=""
            />
            <h3 className="absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-[#014d98] text-outline-black font-GillCondensedB">
              Buzz
            </h3>
            <p className=" laptop:absolute tablet:absolute mobile:flex mobile:mt-1 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-lg text-black font-GillMedium font-bold text-outline-white">
              Acredita ser um patrulheiro espacial, mas, ao longo da peça verá
              que no fim é apenas um brinquedo.
            </p>
          </div>
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
            <img
              className="laptop:w-96 mobile:w-[32] transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
              src={Betty}
              alt=""
            />
            <h3 className="absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-2 p-1 laptop:text-2xl font-bold mb-2 text-[#014d98] text-outline-black ">
              Betty
            </h3>
            <p className="laptop:absolute tablet:absolute mobile:flex mobile:mt-1 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-lg  text-black font-GillMedium font-bold text-outline-white">
              Uma boneca de porcelana retratando uma pastora de ovelhas, e tem
              um romance com Woody.
            </p>
          </div>
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
            <img
              className="laptop:h-72 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
              src={Rex}
              alt=""
            />
            <h3 className="absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-[#014d98] text-outline-black">
              Rex
            </h3>
            <p className="laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-lg text-black font-bold text-outline-white">
              Valente e destemido um grande amigo para Woody e Buzz, com certeza
              traz bastante alegria.
            </p>
          </div>
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
            <img
              className="laptop:h-72 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
              src={Slinky}
              alt=""
            />
            <h3 className="absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-[#014d98] text-outline-black">
              Slinky
            </h3>
            <p className="laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-lg text-black font-bold text-outline-white">
              O cachorro mola que irá tirar várias gargalhadas de seus amigos,
              sempre fiel ao Woody.
            </p>
          </div>
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
            <img
              className="laptop:h-72 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
              src={Sid}
              alt=""
            />
            <h3 className="absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-[#014d98] text-outline-black">
              Sid
            </h3>
            <p className="laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-lg text-black font-bold text-outline-white">
              Sid está sempre pensando no mal, mas que Woody e seus amigos o
              transformarão em um rapaz amado.
            </p>
          </div>
        </Slider>
      </div>

      <div
        className="flex justify-center items-center bg-cover mobile:h-24 tablet:h-52 laptop:h-72 w-full overflow-hidden"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <img
          className="mobile:w-24 tablet:w-48 tablet:mt-[-70px] laptop:w-56 laptop:mt-[-50px] "
          src={logo}
          alt=""
        />
        <button
          onClick={handleOpenModal}
          className="absolute tablet:mt-[100px] tablet:px-2 tablet:py-1 laptop:mt-[140px] px-3 py-3 bg-[#e30024]  text-white rounded hover:bg-red-300 font-GillCondensedB"
        >
          Assista ao Trailer
        </button>

        {showModal && <Modal videoUrl={videoUrl} onClose={handleCloseModal} />}
      </div>

      <div className="relative mt-[-15px] mb-[-15px] bg-cover  bg-[#ffda00] laptop:h-screen mobile:h-[540px] tablet:h-96 w-full border-full border-blue-900 border-t-4 rounded-t-[20px] border-b border-blue-900 border-b-4 rounded-b-[20px]">
        <div className="flex justify-center items-center mt-10">
          <div className="relative bg-[#e30024] mb-[400px]  mobile:w-30 skew-x-12 p-5 laptop:w-90 laptop:px-20">
            <h1 className="-skew-x-12 text-white mobile:text-sm laptop:text-2xl  laptop:font-GillCondensedB laptop:text-left">
              CONHEÇA NOSSA HISTÓRIA
            </h1>
            <img
              className="absolute -skew-x-12 laptop:w-60 mobile:w-32 mobile:ml-[145px] mobile:mt-[-75px] laptop:ml-[284px] laptop:mt-[-114px] mt-[-108px]"
              src={wb}
              alt=""
            />
          </div>

          <img
            className="absolute w-48 min-[200px]:m-20 laptop:w-72 laptop:mb-5  opacity-40 "
            src={Friends}
            alt=""
          />

          <p
            className="absolute mobile:text-sm tablet:text-md mobile:p-12 mobile:mt-20 laptop:mt-0 laptop:text-lg font-GillCondensedB tablet:p-24 
                              text-[#014d98] font-800 overflow-hidden"
          >
            A AVENTURA DOS BRINQUEDOS CONTA A HISTÓRIA DO XERIFE WOODY, SR.
            BATATA, REX E CIA, QUE VIVEM CERCADOS PELO MEDO DE SEREM TROCADOS
            PELO SEU DONO, ANDY, ACABARA DE GANHAR SEU MAIS NOVO PRESENTE DE
            ANIVERSÁRIO: BUZZ, UM PATRULHEIRO ESPACIAL, CHEIO DE CORAGEM E MUITO
            AVENTUREIRO QUE SE JUNTA AOS OUTROS BRINQUEDOS E GANHA A PREFERENCIA
            DE ANDY, GERANDO CIÚMES NOS DEMAIS.
          </p>
        </div>
      </div>

      <div
        className="flex bg-cover  h-screen mobile:h-[590px] w-full"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <h1 className="absolute mt-10 laptop:left-[500px] mobile:left-[200px] tablet:left-[300px]  text-[#ffda00] font-GillCondensedB mobile:text-3xl laptop:text-5xl text-outline-blue">
          Duvidas?
        </h1>
        <div className="absolute p-10 mobile:mt-20 laptop:mt-32 laptop:h-72 mobile:h-96 mobile:overflow-y-auto tablet:mt-20 mobile:ml-[7px]  tablet:mr-10  laptop:ml-1  overflow-y-scroll">
          <FAQSection />
        </div>

        <a
          className="flex h-24 mt-[450px] mobile:mt-[450px] mb-10 laptop:ml-[450px] tablet:ml-48 mobile:ml-20 grid-flow-col gap-x-2 items-end laptop:text-5xl mobile:text-sm text-white drop-shadow-[0_10px_10px_rgba(0,0,0,10)] overflow-hidden"
          href="https://web.whatsapp.com/"
        >
          <FaWhatsapp size={72} color="#e30024" />
          <span className="text-[#ffda00] font-GillCondensedB text-4xl mobile:text-md text-outline-blue">
            Fale Conosco !
          </span>
        </a>
      </div>

      <div className="relative bg-cover mt-[-20px] bg-[#ffda00] h-screen w-full border-t border-blue-900 border-t-4 rounded-t-[20px] border-b border-blue-900 border-b-4 rounded-b-[20px]">
        <div className="grid ml-96 mobile:mt-2 tablet:ml-32 mobile:ml-20 laptop:ml-96 laptop:mt-5 bg-[#e30024] skew-x-12 mobile:p-3 mobile:w-[265px] tablet:w-[440px] laptop:w-[500px] ">
          <h1 className="-skew-x-12 text-white mobile:text-sm mobile:text-left laptop:text-4xl  tablet:text-3xl   font-GillCondensedB">
            Compartilhe nossos videos{' '}
          </h1>
          <img
            className="absolute -skew-x-12 mobile:ml-[220px] mobile:w-[80px] tablet:w-[100px] mobile:mt-[-28px]  tablet:ml-[370px] tablet:w-[80px] tablet:mt-[-28px]  laptop:w-32 laptop:ml-[425px] laptop:mt-[-49px]"
            src={Buzzy}
            alt=""
          />
        </div>
        <div className="laptop:h-[410px] mobile:h-[670px]  mobile:p-4 mobile:mt-10 tablet:h-[400px] tablet:p-2 tablet:mt-5 overflow-hidden overflow-y-auto">
          <Reels />
        </div>
      </div>
      <div
        className="bg-cover laptop:h-screen laptop:mt-[-15px] mobile:mt-[-15px] tablet:h-72 mobile:h-96 w-full"
        style={{ backgroundImage: `url(${ImgIgreja})` }}
      >
        <h1 className="text-[#ffda00] font-GillCondensedB laptop:text-5xl mobile:py-10 mobile:text-lg laptop:py-10 tablet:text-xl text-outline-blue">
          Como Chegar ?
        </h1>
        <div className="flex justify-center items-center laptop:mt-1 mobile:mt-5 tablet:mt-[-25px]">
          <iframe
            className="laptop:w-[1100px] laptop:h-[400px] mobile:h-[200px] mobile:w-[380px] tablet:w-[600px] tablet:h-[180px] laptop:drop-shadow-[0_10px_10px_rgba(0,0,0,10)] mobile:overflow-hidden"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1681625904985!2d-59.94737492502912!3d-3.049598196926207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b8d7b61c27d%3A0x1d8b8b78d3186636!2sNova%20Igreja%20Batista%20Grande%20Circular!5e0!3m2!1spt-BR!2sbr!4v1725812051612!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div
        className="flex bg-cover h-screen w-full"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <img className="absolute  laptop:w-32 mobile:w-24" src={title} alt="" />
        <h1 className="absolute mobile:ml-32 mobile:mt-5 text-[#ffda00] font-GillCondensedB laptop:text-5xl laptop:ml-[370px] tablet:ml-[220px] mobile:text-lg tablet:text-3xl text-outline-blue">
          Baixe suas fotos aqui!
        </h1>
        <div className="grid laptop:mt-24 laptop:ml-10 tablet:ml-20 laptop:space-x-3 laptop:p-8 mobile:space-y-2 tablet:space-y-2 mobile:mt-20  mobile:grid-cols-2 mobile:p-2 laptop:grid-cols-3 laptop:grid-rows-4 justify-center items-center mobile:overflow-hidden ">
          <div className="relative bg-[#e30024] laptop:ml-[3px] laptop:mt-[5px] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              19
            </h1>
            <Link
              to="/gallery/19"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB ">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024]  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              20
            </h1>
            <Link
              to="/gallery/20"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024]  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              21
            </h1>
            <Link
              to="/gallery/21"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              22
            </h1>
            <Link
              to="/gallery/22"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              23
            </h1>
            <Link
              to="/gallery/23"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              24
            </h1>
            <Link
              to="/gallery/24"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              25
            </h1>
            <Link
              to="/gallery/25"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              26
            </h1>
            <Link
              to="/gallery/26"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-48 mobile:ml-20 tablet:left-10 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-4xl mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              27
            </h1>
            <Link
              to="/gallery/27"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center bg-cover laptop:h-screen mobile:h-[400px] w-full mobile:overflow-hidden"
        style={{ backgroundImage: `url(${Bigreja})` }}
      >
        <h1 className="absolute mb-96 laptop:mt-[-70px] text-[#ffda00] p-3 mobile:mt-20 font-GillCondensedB laptop:text-5xl tablet:xl text-outline-blue">
          Conheça Nossa Igreja!
        </h1>
        <iframe
          className="static laptop:mt-10 rounded-lg laptop:w-[700px] laptop:h-[400px] mobile:w-96 mobile:h-52"
          width="624"
          height="338"
          src="https://www.youtube.com/embed/kcohHcu_2es"
          title="0"
          frameBorder="0"
          autoPlay="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div
        className="relative bg-cover  h-screen w-full overflow-hidden"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <div className="flex justify-center items-center">
          <img
            className="mobile:w-48 mobile:mt-5 laptop:w-72 "
            src={title}
            alt=""
          />
          <img
            className="mobile:w-24 mobile:mt-5 laptop:w-24 "
            src={Titletwo}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start space-y-5 laptop:ml-32 mobile:ml-14 mobile:mt-96 tablet:mt-10">
          <a
            className="grid grid-flow-col gap-x-2 items-end text-2xl text-white"
            href="https://www.facebook.com/NIBGrandeCircular"
          >
            <FaFacebook size={52} color="white" />
            /NIBGrandeCircular
          </a>
          <a
            className="grid grid-flow-col gap-x-2 items-end text-2xl text-white"
            href="https://www.instagram.com/nibgrandecircular/"
          >
            <FaInstagram size={52} color="white" />
            @nibgrandecircular
          </a>
          <a
            className="grid grid-flow-col gap-x-2 items-end text-2xl text-white"
            href="https://www.youtube.com/@NIBGrandeCircular"
          >
            <FaYoutube size={52} color="white" />
            /@NIBGrandeCircular
          </a>

          <img
            className="absolute laptop:left-96 laptop:top-32 laptop:w-[590px] mobile:w-[400px] mobile:top-32 mobile:left-1 tablet:w-[360px] tablet:top-24 tablet:left-[330px] drop-shadow-[0_20px_20px_rgba(0,0,40,0.95)]"
            src={Imgfinal}
            alt=""
          />
        </div>
      </div>

      <div className="laptop:flex mobile:flex laptop:justify-center laptop:items-center laptop:h-24 mobile:h-12 w-full bg-[#014d98]  tablet:h-24 ">
        <h1 className="text-black border-solid font-semibold laptop:text-md laptop:place-items-center mobile:place-items-center tablet:ml-48 tablet-mt-10 mobile:text-sm ">
          @Nova Igreja Batista 2024.
        </h1>
        <h3 className="text-sm">Todos os direitos reservados.</h3>
      </div>
    </div>
  )
}

export default Home
