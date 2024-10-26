import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../App.css'
import logo from '../assets/_MarcaMutante NibGC ToyStory.png'
import Nn from '../assets/99-app-logo.png'
import title from '../assets/asaventuras.png'
import Betty from '../assets/Betty.png'
import Bigreja from '../assets/bigreja.png'
import Buzzy from '../assets/Buzz_Lightyear.png'
import ImgIgreja from '../assets/imgigreja.png'
import Jessy from '../assets/jesspng.png'
import Nuvem from '../assets/nuvemm.webp'
import perso from '../assets/personagens.png'
import Rex from '../assets/Rex.png'
import Sid from '../assets/Sid-Phillips.png'
import Slinky from '../assets/Slinky.png'
import Titletwo from '../assets/titleword.png'
import Bgimg from '../assets/toy-story-cloud.jpg'
import Imgfinal from '../assets/Turma_Toy_Story_6.png'
import Uber from '../assets/uber-logo-11.png'
import Banner from '../assets/woodbuzzy.png'
import woody from '../assets/Woody_KHIII.png'
import Contagem from '../components/Contagem'
import FAQSection from '../components/FAQsection'
import Modal from '../components/Modal'
import Reels from '../components/Reels'
import Video from '../video/nuvem.mp4'

// eslint-disable-next-line import-helpers/order-imports, no-unused-vars
import { Link } from 'react-router-dom'
// import { FacebookIcon, InstapaperIcon } from 'react-share'
// eslint-disable-next-line import-helpers/order-imports
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

function Home() {
  const videoRef = useRef(null)

  useEffect(() => {
    // Garante que o autoplay funcione em dispositivos móveis
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Autoplay foi bloqueado')
      })
    }
  }, [])
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
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <div className="bg-animation flex justify-center items-center bg-cover laptop:h-screen tablet:h-[600px] mobile:h-[510px] w-full overflow-hidden">
        {/* <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 min-w-full h-[510px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/path/to/your-video.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </div> */}
        <div className="absolute bg-cover bg-blue-800 bg-opacity-50 w-full top-0 overflow-hidden">
          <h1 className=" text-[#ffda00]  font-GillCondensedB laptop:text-3xl tablet:text-lg mobile:text-md text-outline-blue">
            19 A 27 DE OUTUBRO
          </h1>
        </div>
        <div>
          <a href="https://nibgrandecircular.com/">
            <img
              className=" mobile:w-24 mobile:mt-[20px] mobile:ml-[120px] tablet:w-48  tablet:mt-[10px] tablet:ml-[105px] laptop:w-[350px] laptop:ml-[40px] laptop:mt-[50px] drop-shadow-[0_20px_20px_rgba(30,10,0,0.55)]"
              href=""
              src={logo}
              alt=""
            />
          </a>
          <h1 className=" text-white mobile:font-bold mobile:mt-[-20px] mobile:ml-[105px] mobile:text-sm tablet:text-md tablet:font-bold tablet:mt-[-40px] tablet:ml-[140px] tablet:text-md laptop:font-bold laptop:text-2xl laptop:ml-[150px]  w-32 laptop:mt-[-87px] font-GillCondensedB drop-shadow-[0_10px_10px_rgba(0,0,0,55)]">
            APRESENTA:
          </h1>
          <img
            className="
                    mobile:w-[350px] mobile:mt-[20px] mobile:ml-[-5px] 
                    tablet:w-[400px] tablet:right-[370px] tablet:top-24 
                    laptop:w-[600px] laptop:ml-[450px] laptop:mt-[-280px]
                    drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)] float"
            src={perso}
            alt=""
          />
          <img
            className="relative drop-shadow-[0_20px_20px_rgba(0,0,0,0.95)]
                    mobile:w-[220px] mobile:mt-[-50px] mobile:ml-[65px]
                    tablet:w-[300px] tablet:top-[-20px] tablet:right-[25px]
                    laptop:w-[400px] laptop:top-[-60px] laptop:ml-[620px]"
            src={title}
            alt=""
          />
          <img
            className="
                    mobile:w-[70px] mobile:ml-[270px] mobile:mt-[-30px]
                    tablet:w-[80px] tablet:ml-[330px] tablet:mt-[-50px] 
                    laptop:w-[90px] laptop:ml-[975px] laptop:mt-[-114px]
                    z-50 drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)]"
            src={Titletwo}
            alt=""
          />
          <div className=" mobile:mt-[25px] w-[290px] laptop:w-[480px] mobile:ml-[40px] tablet:mt-[-10px] laptop:ml-[-25px] laptop:mt-[-110px] rounded-lg overflow-hidden laptop:drop-shadow-[0_5px_5px_rgba(1,1,1,1)]">
            <Contagem />
          </div>
        </div>
      </div>
      <div className="relative bg-cover bg-white-300 mobile:h-96 laptop:h-[450px] w-full overflow-hidden">
        <h3 className="text-2xl mobile:text-sm mt-10 mobile:mt-5 tablet:text-lg laptop:text-3xl laptop:mb-10 font-black font-GillBold">
          {' '}
          CONHEÇA OS NOSSOS PERSONAGENS{' '}
        </h3>
        <Slider className="mx-2 mobile:mt-2 z-10" {...settings}>
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 laptop:hover:border-black border-4">
            <img
              className="laptop:h-72 tablet:w-96 tablet:h-72 laptop:w-96 mobile:w-[170px] mobile:h-[130px] transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
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
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 laptop:hover:border-black border-4">
            <img
              className="laptop:h-72 mobile:w-[32] tablet:w-96 tablet:h-72 mobile:h-[130px] transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
              src={Buzzy}
              alt=""
            />
            <h3 className="absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-[#014d98] text-outline-black font-GillCondensedB">
              Buzz
            </h3>
            <p className=" laptop:absolute tablet:absolute mobile:flex mobile:mt-1 tablet:mb-1 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-lg text-black font-GillMedium font-bold text-outline-white">
              Acredita ser um patrulheiro espacial, mas, ao longo da peça verá
              que no fim é apenas um brinquedo.
            </p>
          </div>
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 laptop:hover:border-black border-4">
            <img
              className="laptop:h-72 mobile:w-[32] mobile:h-[130px] tablet:w-96 tablet:h-72 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
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
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 laptop:hover:border-black border-4">
            <img
              className="laptop:h-72 mobile:h-[130px] tablet:w-96 tablet:h-72 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
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
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 laptop:hover:border-black border-4">
            <img
              className="laptop:h-72 mobile:h-[130px] tablet:w-96 tablet:h-72 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
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
          <div className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 laptop:hover:border-black border-4">
            <img
              className="laptop:h-72 mobile:h-[130px] tablet:w-96 tablet:h-72 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
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
        className="flex justify-center items-center bg-cover mobile:h-24 tablet:h-52 laptop:h-72 w-full z-10 overflow-hidden"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <img
          className="mobile:w-24 tablet:w-48 tablet:mt-[-70px] laptop:w-56 laptop:mt-[-50px]"
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

      {/*   <div className="relative mt-[-15px] mb-[-15px] bg-cover  bg-[#ffda00] laptop:h-screen mobile:h-[540px] tablet:h-96 w-full border-full border-blue-900 border-t-4 rounded-t-[20px] border-b border-blue-900 border-b-4 rounded-b-[20px]">
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
      </div>{' '} */}

      <div className="flex h-screen mobile:h-[590px] w-full bg-animation overflow-hidden">
        <div>
          <div className="grid mobile:mt-5 tablet:ml-[290px] mobile:ml-[135px] laptop:ml-[490px] laptop:mt-10 bg-[#e30024] skew-x-12 mobile:p-3 mobile:w-[130px] tablet:w-[240px] laptop:w-[250px] laptop:h-12 mobile:h-12">
            <h1 className="-skew-x-12 text-white mobile:text-lg mobile:text-center laptop:text-4xl  tablet:text-3xl   font-GillCondensedB">
              Dúvidas?{' '}
            </h1>
            <img
              className="absolute -skew-x-12 mobile:ml-[90px] mobile:w-[80px] tablet:w-[100px] mobile:mt-[-18px]  tablet:ml-[170px] tablet:w-[80px] tablet:mt-[-18px]  laptop:w-24 laptop:ml-[177px] laptop:mt-[-33px] z-20"
              src={Jessy}
              alt=""
            />
          </div>
          <div className="flex rounded rounded-2 mobile:mt-[30px] mobile:ml-[11px] mobile:h-[380px] mobile:w-[360px] tablet:w-[750px] tablet:mt-[25px] tablet:ml-[20px] laptop:ml-[45px] laptop:mt-[30px] laptop:w-[1150px] overflow-y-auto overflow-hidden">
            <FAQSection />
          </div>
          <a
            className="flex  items-end hover:opacity-85 laptop:h-12 laptop:w-[300px] tablet:h-[45px] tablet:w-[300px] tablet:mt-[30px] tablet:ml-[300px] mobile:h-12 mobile:w-[300px] tablet:text-md space-x-3 laptop:mt-[20px] laptop:ml-[460px] mobile:ml-[120px] mobile:mt-[25px] drop-shadow-[0_10px_10px_rgba(0,0,0,10)] overflow-hidden"
            href="https://wa.me/92984590712?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20espet%C3%A1culo%20AS%20AVENTURAS%20DOS%20BRINQUEDOS"
          >
            <FaWhatsapp
              className="bg-[#ffda00] rounded rounded-full"
              size={45}
              color="#e30024"
            />
            <span className="text-[#ffda00] font-GillCondensedB laptop:text-4xl mobile:text-md tablet:text-xl text-outline-blue overflow-hidden">
              Fale Conosco !
            </span>
          </a>
        </div>
      </div>
      <div className="relative bg-cover mt-[-20px] bg-[#ffda00] h-[750px] tablet:h-[850px] w-full border-t border-blue-900 border-t-4 rounded-t-[20px] border-b border-blue-900 border-b-4 rounded-b-[20px]">
        <div className="grid  mobile:mt-2 tablet:ml-[180px] mobile:ml-12 laptop:ml-96 laptop:mt-5 bg-[#e30024] skew-x-12 mobile:p-3 mobile:w-[265px] tablet:w-[440px] laptop:w-[500px] ">
          <h1 className="-skew-x-12 text-white mobile:text-lg mobile:text-left laptop:text-4xl  tablet:text-3xl   font-GillCondensedB">
            Compartilhe nossos videos{' '}
          </h1>
          <img
            className="absolute -skew-x-12 mobile:ml-[220px] mobile:w-[80px] tablet:w-[100px] mobile:mt-[-28px]  tablet:ml-[370px] tablet:w-[80px] tablet:mt-[-28px]  laptop:w-32 laptop:ml-[425px] laptop:mt-[-49px]"
            src={Buzzy}
            alt=""
          />
        </div>
        <div className="laptop:h-[610px] mobile:h-[610px] mobile:p-4 mobile:mt-5 mobile:ml-3 tablet:h-[700px] tablet:mt-3 overflow-y-auto overflow-hidden">
          <Reels />
        </div>
      </div>
      <div
        className="bg-cover laptop:h-screen laptop:mt-[-15px] mobile:mt-[-15px] tablet:h-72 mobile:h-[500px] w-full"
        style={{ backgroundImage: `url(${ImgIgreja})` }}
      >
        <h1 className="text-[#ffda00] font-GillCondensedB laptop:text-5xl mobile:py-4 mobile:text-lg laptop:py-10 tablet:text-xl text-outline-blue">
          Como Chegar ?
        </h1>
        <div className="flex justify-center items-center laptop:mt-1 mobile:mt-1 tablet:mt-[-25px]">
          <iframe
            className="relative laptop:w-[650px] laptop:right-[250px] laptop:h-[300px] mobile:h-[300px] mobile:w-[420px] tablet:right-[250px] tablet:top-10 tablet:w-[450px] tablet:h-[120px] laptop:drop-shadow-[0_10px_10px_rgba(0,0,0,10)] mobile:overflow-hidden"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1681625904985!2d-59.94737492502912!3d-3.049598196926207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b8d7b61c27d%3A0x1d8b8b78d3186636!2sNova%20Igreja%20Batista%20Grande%20Circular!5e0!3m2!1spt-BR!2sbr!4v1725812051612!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-cols  space-x-10 laptop:ml-[280px] laptop:mt-20 mobile:ml-[140px] mobile:mt-10 tablet:mt-12  tablet:ml-32">
          <a
            className="grid grid-flow-col gap-x-2 items-end text-2xl text-white"
            href="https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=-3.0495419437079705&dropoff[longitude]=-59.944822777222164&dropoff[nickname]=Nova_Igreja_Batista"
          >
            <img
              className="w-12 hover:bg-white-100 rounded rounded-full"
              src={Uber}
              alt=""
            />
          </a>
          <a
            className="grid grid-flow-col gap-x-2 items-end text-2xl text-white"
            href="https://www.google.com/maps/dir/?api=1&destination=-3.0495673578322426,-59.94466447820079"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-12" src={Nn} alt="" />
          </a>
        </div>
      </div>
      <div className="bg-animation flex bg-cover h-screen w-full overflow-hidden">
        <img className="absolute  laptop:w-32 mobile:w-24" src={title} alt="" />
        <h1 className="absolute mobile:ml-32 mobile:mt-5 text-[#ffda00] font-GillCondensedB laptop:text-5xl laptop:ml-[370px] tablet:ml-[220px] mobile:text-lg tablet:text-3xl text-outline-blue">
          Baixe suas fotos aqui!
        </h1>
        <div className="grid laptop:mt-24 laptop:ml-10 tablet:ml-24 mobile:ml-5 laptop:space-x-3 laptop:p-8 mobile:space-y-2 tablet:space-y-2 mobile:mt-20  mobile:grid-cols-2 mobile:p-2 laptop:grid-cols-3 laptop:grid-rows-3 justify-center items-center mobile:overflow-hidden ">
          <div className="relative bg-[#e30024] laptop:ml-[3px] laptop:mt-[5px] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:mt-[-15px] mobile:ml-[-10px] text-[#ffda00] font-black hover:mt-[-50px]">
              19
            </h1>
            <Link
              to="/gallery/19"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:ml-[-10px] mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              20
            </h1>
            <Link
              to="/gallery/20"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-[#e30024] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:ml-[-10px] mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
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
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:ml-[-10px] mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
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
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:ml-[-10px] mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
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
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:ml-[-10px] mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
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
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:ml-[-10px] mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              25
            </h1>
            <Link
              to="/gallery/25"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            >
              <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
            </Link>
          </div>
          <div className="relative bg-gray-500 opacity-50 skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:ml-[-10px] mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              26
            </h1>
            {/* <Link
              to="/gallery/26"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            > */}
            <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
          </div>
          <div className="relative bg-gray-500 opacity-50 skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]">
            <h1 className="absolute laptop:mt-[-40px] skew-y-6 -skew-x-12 laptop:text-7xl mobile:text-3xl mobile:ml-[-10px] mobile:mt-[-15px] text-[#ffda00] font-black hover:mt-[-50px]">
              27
            </h1>
            {/* <Link
              to="/gallery/27"
              className="text-white font-black hover:text-blue-700 transition duration-300"
            > */}
            <h2 className=" -skew-x-12 font-GillCondensedB">OUTUBRO</h2>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center bg-cover laptop:h-screen mobile:h-[400px] w-full mobile:overflow-hidden"
        style={{ backgroundImage: `url(${Bigreja})` }}
      >
        <h1 className="absolute mb-96 laptop:mt-[-70px] text-[#ffda00] p-3 mobile:mt-20 font-GillCondensedB laptop:text-5xl tablet:text-3xl text-outline-blue">
          Conheça Nossa Igreja!
        </h1>
        <iframe
          className="static laptop:mt-10 rounded-lg laptop:w-[700px] laptop:h-[400px] tablet:mt-10 tablet:w-[535px] tablet:h-[300px] mobile:w-96 mobile:h-52 drop-shadow-[0_10px_10px_rgba(200,200,1,1)]"
          width="624"
          height="338"
          src="https://www.youtube.com/embed/_OhfUKTOECQ"
          title="0"
          frameBorder="0"
          autoPlay="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="bg-animation relative bg-cover  h-screen w-full overflow-hidden">
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
        <h1 className="text-black border-solid font-semibold laptop:text-md laptop:place-items-center laptop:ml-12 laptop:mt-2 tablet:ml-48 tablet:mt-8 mobile:ml-10 mobile:mt-4 mobile:text-sm ">
          @Nova Igreja Batista 2024.
        </h1>
        <h3 className="text-sm mobile:mt-4 tablet:mt-8 laptop:mt-2">
          Todos os direitos reservados.
        </h3>
      </div>
    </div>
  )
}

export default Home
