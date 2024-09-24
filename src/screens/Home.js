import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import Modal from '../components/Modal';
import Reels from '../components/Reels';
import Contagem from '../components/Contagem';
import { BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import PhotoGallery from '../components/Galery';
import CommentList from '../components/CommentList';
import logo from '../assets/_MarcaMutante NibGC ToyStory.png';
import Bgimg from '../assets/toy-story-cloud.jpg';
import perso from '../assets/personagens.png';
import title from '../assets/asaventuras.png';
import woody from '../assets/Woody_KHIII.png';
import Buzzy from '../assets/Buzz_Lightyear.png';
import Betty from '../assets/Betty.png';
import Rex from '../assets/Rex.png';
import Slinky from '../assets/Slinky.png';
import Ian from '../assets/AlMcWhiggin.png';
import Sid from '../assets/Sid-Phillips.png';
import Banner from '../assets/woodbuzzy.png';
import Historia from '../assets/historia.png';
import Friends from '../assets/toystorypers.png';
import Titletwo from '../assets/titleword.png';
import bannertwo from '../assets/wallpaperroomtwo.jpg';
import wb from '../assets/woodybannery.png';
import Breserva from '../assets/333921.jpg';
import Jessy from '../assets/jesspng.png';
import ImgIgreja from '../assets/imgigreja.png';
import Bigreja from '../assets/bigreja.png';
import Imgfinal from '../assets/Turma_Toy_Story_6.png';
import { FacebookIcon, InstapaperIcon } from 'react-share';
import { FaFacebook, FaInstagram, FaVimeo, FaWhatsapp, FaYoutube } from 'react-icons/fa';


function Home() {

  
  const openImagePanel = (e) => {
    e.preventDefault();
    window.open('/gallery', '_blank', 'width=800,height=600');
  };

  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleOpenModal = () => {
    setVideoUrl('https://www.youtube.com/embed/1W9i4Q4EyQw'); // Altere para a URL desejada
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVideoUrl('');
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    autoplay:true,
    autoplayspeed: 300,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],

    
  }

  return (
    <div className='App' >
      
      <div className='absolute bg-cover bg-red-300 rounded-lg h-23 w-full sm:h-full bg-transparent'>
        <h1 className=' text-yellow-300 font-semibold text-3xl drop-shadow-[0_10px_10px_rgba(0,0,0,10)]'> 19 A 27 DE OUTUBRO</h1>
        </div>

         <div  className='flex justify-center items-center bg-cover h-screen' style={{backgroundImage:`url(${Bgimg})`}} >
                    <img className='absolute   
                                    mobile:w-24 mobile:top-5
                                    tablet:w-24 tablet:top-5
                                    laptop:w-48 laptop:left-0 laptop:top-0 
                                    drop-shadow-[0_20px_20px_rgba(0,0,0,0.55)]' src={logo} alt="" />
                      <h1 className='absolute text-white
                                      mobile:font-bold mobile:top-24 mobile:text-sm 
                                       tablet:font-bold tablet:top-24
                                       laptop:font-bold laptop:left-10 laptop:top-[150px]
                                      font-GillMedium drop-shadow-[0_10px_10px_rgba(0,0,0,55)]'>APRESENTA:</h1>
                        <img className='absolute 
                                        mobile:w-[600px] mobile:top-32
                                        tablet:w-[500px] tablet:top-24
                                        laptop:w-[600px] laptop: laptop:top-20
                                        
                                        drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)]' src={perso} alt="" />
                          <img className='absolute  drop-shadow-[0_20px_20px_rgba(0,0,0,0.95)]
                                          mobile:w-[300px] mobile:top-[330px]
                                          tablet:w-[350px] tablet:top-[280px]
                                          laptop:w-[400px] laptop:top-[310px]' src={title} alt="" /> 
                          <img className='absolute  
                                        mobile:w-[70px] mobile:ml-[280px] mobile:top-[460px]
                                        tablet:w-[90px] tablet:ml-[420px] tablet:top-[350px]
                                        laptop:w-[90px] laptop:ml-[450px]  laptop:top-[450px] 
                                        
                                        drop-shadow-[0_20px_20px_rgba(0,0,0,0.85)]' src={Titletwo} alt="" />   
                                         
          </div>
          <div className='absolute bg-fixed tablet:top-8 mobile:top-[550px] mobile:right-20 right-0 top-0 rounded-lg overflow-hidden'>
                                <Contagem/>
                                </div> 

            <div className='relative bg-cover bg-white-300 mobile:h-96 laptop:h-screen w-full overflow-hidden '>
               <h3 className='text-2xl mobile:text-sm mt-10 mobile:mt-5 tablet:text-lg laptop:text-2xl laptop:mb-10 font-GillHeavy'> CONHEÇA OS NOSSOS PERSONAGENS </h3>
                    <Slider className='mx-2 mobile:mt-2' {...settings}>     
      
                              <div  className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
                                <img className='laptop:w-96 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent' src={woody} alt="" />    
                                  <h3 className='absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-white '>Woody</h3> 
                                  <p className='laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-2xl text-blue-900 font-bold'>Xerife da cidade, Woody tem um grande
                                    apreço pelo seu maior amigo, Andy.
                                  </p>    
                                </div>
                                <div  className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
                                <img className='laptop:w-96 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent' src={woody} alt="" />    
                                  <h3 className='absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-white '>Woody</h3> 
                                  <p className='laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-2xl text-blue-900 font-bold'>Xerife da cidade, Woody tem um grande
                                    apreço pelo seu maior amigo, Andy.
                                  </p>    
                                </div>
                                <div  className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
                                <img className='laptop:w-96 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent' src={woody} alt="" />    
                                  <h3 className='absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-white '>Woody</h3> 
                                  <p className='laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-2xl text-blue-900 font-bold'>Xerife da cidade, Woody tem um grande
                                    apreço pelo seu maior amigo, Andy.
                                  </p>    
                                </div>
                                <div  className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
                                <img className='laptop:w-96 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent' src={woody} alt="" />    
                                  <h3 className='absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-white '>Woody</h3> 
                                  <p className='laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-2xl text-blue-900 font-bold'>Xerife da cidade, Woody tem um grande
                                    apreço pelo seu maior amigo, Andy.
                                  </p>    
                                </div>
                                <div  className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
                                <img className='laptop:w-96 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent' src={woody} alt="" />    
                                  <h3 className='absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-white '>Woody</h3> 
                                  <p className='laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-2xl text-blue-900 font-bold'>Xerife da cidade, Woody tem um grande
                                    apreço pelo seu maior amigo, Andy.
                                  </p>    
                                </div>
                                <div  className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
                                <img className='laptop:w-96 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent' src={woody} alt="" />    
                                  <h3 className='absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-white '>Woody</h3> 
                                  <p className='laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-2xl text-blue-900 font-bold'>Xerife da cidade, Woody tem um grande
                                    apreço pelo seu maior amigo, Andy.
                                  </p>    
                                </div>
                                <div  className="relative bg-yellow-300  mobile:h-72   max-w-xs  overflow-hidden rounded-2xl shadow-lg group border border-blue-900 hover:border-black border-4">
                                <img className='laptop:w-96 transition-transform group-hover:scale-110 duration-200 inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent' src={woody} alt="" />    
                                  <h3 className='absolute inset-0 flex laptop:items-center mobile:mt-20 tablet:text-2xl tablet:mt-32 laptop:mt-4 p-1 laptop:text-2xl font-bold mb-2 text-white '>Woody</h3> 
                                  <p className='laptop:absolute tablet:absolute mobile:flex mobile:mt-5 tablet:mb-5 inset-0 flex laptop:items-end tablet:items-end tablet:text-lg  mobile:text-sm laptop:text-2xl text-blue-900 font-bold'>Xerife da cidade, Woody tem um grande
                                    apreço pelo seu maior amigo, Andy.
                                  </p>    
                                </div>
                               

                      </Slider>
              </div>
                    
              <div className='flex justify-center items-center bg-cover mobile:h-24 tablet:h-52 laptop:h-72 w-full overflow-hidden' style={{backgroundImage:`url(${Banner})`}}>     
                      <img className="
                                      mobile:w-24
                                      tablet:w-48 tablet:mt-[-70px]
                                      laptop:w-56 laptop:mt-[-50px] " src={logo} alt="" />
                        <button
                          onClick={handleOpenModal}
                          className="absolute 
                                      tablet:mt-[100px] tablet:px-2 tablet:py-1      
                                      laptop:mt-[140px] px-3 py-3 bg-red-600  text-white rounded hover:bg-red-300 font-yellow"
                        >
                          Assista ao Trailer
                        </button>
                      
                      {showModal && <Modal videoUrl={videoUrl} onClose={handleCloseModal} />}
    
                       
               </div>

                <div className='relative mt-[-15px] mb-[-15px] bg-cover  bg-yellow-300 laptop:h-screen mobile:h-[540px] tablet:h-96 w-full border-full border-blue-900 border-t-4 rounded-t-[20px] border-b border-blue-900 border-b-4 rounded-b-[20px]'>  
                             <div className='flex justify-center items-center mt-10'>
                             <div className='relative bg-red-500 mb-[400px]  mobile:w-30 skew-x-12 p-5 laptop:w-90 laptop:px-20'>
                              <h1 className='-skew-x-12 text-white mobile:text-sm laptop:text-2xl  laptop:font-bold laptop:text-left'>CONHEÇA NOSSA HISTÓRIA</h1>
                              <img className='absolute -skew-x-12 laptop:w-60 mobile:w-32 mobile:ml-[145px] mobile:mt-[-75px] laptop:ml-[275px] laptop:mt-[-114px] mt-[-108px]' src={wb} alt="" />
                             </div>
                             
                          
                              <img className='absolute w-48 min-[200px]:m-20 laptop:w-72 laptop:mb-5  opacity-40 ' src={Friends} alt="" />

                              <p className='absolute mobile:text-sm tablet:text-md mobile:p-12 mobile:mt-20 laptop:mt-0 laptop:text-lg font-GillBold tablet:p-24 
                              text-blue-900 font-semibold overflow-hidden'>
                               A AVENTURA DOS BRINQUEDOS CONTA A HISTÓRIA DO XERIFE WOODY, SR. BATATA, REX E CIA, QUE VIVEM CERCADOS PELO MEDO DE SEREM TROCADOS PELO SEU DONO,
                               ANDY, ACABARA DE GANHAR SEU MAIS NOVO PRESENTE DE ANIVERSÁRIO: BUZZ, UM PATRULHEIRO ESPACIAL, CHEIO DE CORAGEM E MUITO AVENTUREIRO QUE SE JUNTA
                               AOS OUTROS BRINQUEDOS E GANHA A PREFERENCIA DE ANDY, GERANDO CIÚMES NOS DEMAIS.
                                </p>
                            </div>
                  </div>

                  <div  className='flex bg-cover  h-screen w-full' style={{backgroundImage:`url(${Bgimg})`}} >
                        <h1 className='absolute mt-10 laptop:left-[500px] mobile:left-[150px]  text-yellow-300 font-semibold mobile:text-sm laptop:text-4xl drop-shadow-[0_10px_10px_rgba(0,0,0,10)]'>Duvidas?</h1> 
                         
                        <a className='grid mb-10 ml-[450px] mobile:ml-20 grid-flow-col gap-x-2 items-end text-2xl text-white overflow-hidden' href='https://web.whatsapp.com/'><FaWhatsapp size={72} color='red'/><span className='text-yellow-300 font-semibold text-2xl drop-shadow-[0_10px_10px_rgba(0,0,0,10)]'>Fale Conosco !</span></a>
                          <div className="absolute mobile:mt-20 laptop:mt-32 laptop:h-72 mobile:h-96 mobile:overflow-y-auto mt-40 tablet:mt-20 laptop:ml-20 mobile:ml-[60px] tablet:ml-24 justify-center items-center bg-transparent overflow-y-auto overflow-y-scroll">
                           ;
                            <CommentList />
                           </div>
                      </div>

                      <div className='relative bg-cover mt-[-20px] bg-yellow-300 h-screen w-full border-t border-blue-900 border-t-4 rounded-t-[20px] border-b border-blue-900 border-b-4 rounded-b-[20px]'>  
                      <div className='grid ml-96 mobile:mt-2 tablet:ml-32 mobile:ml-20 laptop:ml-96 laptop:mt-5 bg-red-500 skew-x-12 mobile:p-3 mobile:w-[265px] laptop:w-[500px] '>
                              <h1 className='-skew-x-12 text-white mobile:text-sm mobile:text-left laptop:text-2xl laptop:ml-5   font-bold'>COMPARTILHE NOSSOS VIDEOS </h1>
                              <img className='absolute -skew-x-12 mobile:ml-[220px] mobile:w-[80px] mobile:mt-[-28px] laptop:w-32 laptop:ml-[400px] laptop:mt-[-57px]' src={Buzzy} alt="" />
                             </div>
                          <div className='laptop:h-[410px] mobile:h-[670px] mobile:p-4 mobile:mt-10 tablet:h-[300px] tablet:p-10 tablet:mt-10 overflow-hidden overflow-y-auto'><Reels/></div>
                              
                            
                        </div>

                        <div  className='mt-[-15px] bg-cover h-screen mobile:h-48 tablet:h-96 w-full ' style={{backgroundImage:`url(${Breserva})`}} >
                        
                      <img className="absolute mobile:w-12 mobile:py-5 tablet:w-24 tablet:py-10 flex 
                                      " src={logo} alt="" />
                          
                        <div className='flex justify-center items-center mt-[-10px]'>
                        <div className='relative mobile:mt-20 mobile:hidden laptop:block mobile:w-30 mobile:p-2 tablet:mt-10 bg-red-500 skew-x-12 tablet:p-3 laptop:p-5 w-80'>
                              <h1 className='-skew-x-12 text-white laptop:text-2xl  font-bold'>Reserve já seu assento</h1>
                              <img className='absolute -skew-x-12 laptop:w-[130px] laptop:mt-[-86px] mobile:w-[90px] mobile:mt-[-70px] tablet:w-[100px] tablet:mt-[-70px] ml-[250px] mt-[-108px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.95)]' src={Jessy} alt="" />
                             </div>
                            <button type="button" class="absolute mobile:mt-48  laptop:mt-72 focus:outline-none text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2">Reserve seu assento</button> 
                        </div>
                          </div>

                          <div  className='bg-cover laptop:h-screen tablet:h-72 mobile:h-96 w-full' style={{backgroundImage:`url(${ImgIgreja})`}} >
                      <h1 className='text-yellow-300 font-semibold laptop:text-3xl mobile:text-lg tablet:text-xl drop-shadow-[0_10px_10px_rgba(0,0,0,10)]'>COMO CHEGAR ?</h1>
                        <div className='flex justify-center items-center mt-20 mobile:mt-5 tablet:mt-5'>
                        <iframe className='laptop:w-[900px] laptop:h-[400px] mobile:h-[200px] mobile:w-[340px] tablet:w-[600px] tablet:h-[150px] laptop:drop-shadow-[0_10px_10px_rgba(0,0,0,10)] mobile:overflow-hidden' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1681625904985!2d-59.94737492502912!3d-3.049598196926207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b8d7b61c27d%3A0x1d8b8b78d3186636!2sNova%20Igreja%20Batista%20Grande%20Circular!5e0!3m2!1spt-BR!2sbr!4v1725812051612!5m2!1spt-BR!2sbr"
                          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className='absolute justify-center items-end laptop:mt-[500px] mobile:mt-[300px] tablet:mt-52'>
                          <button
                          onClick={handleOpenModal}
                          className="
                                            
                                     lg: lg:mt-[140px] px-3 py-3 bg-red-600  text-white rounded hover:bg-red-300 font-yellow"
                        >
                          Video No Youtube
                        </button>
                      {showModal && <Modal videoUrl={videoUrl} onClose={handleCloseModal} />}
                      </div>
                        </div>
                    
                            </div>

                            <div  className='flex bg-cover h-screen w-full' style={{backgroundImage:`url(${Bgimg})`}} >
                <img className='absolute  laptop:w-32 mobile:w-24' src={title} alt="" /> 
        
                <h1 className='absolute mobile:ml-32 mobile:mt-5 text-yellow-300 font-semibold laptop:text-3xl laptop:ml-[400px] mobile:text-lg tablet:text-xl drop-shadow-[0_10px_10px_rgba(0,0,0,10)]'>Baixe suas fotos aqui!</h1>
                          <div className='grid laptop:mt-24 laptop:ml-10 laptop:space-x-3 laptop:p-8 mobile:space-y-2 mobile:mt-20  mobile:grid-cols-2 mobile:p-2 laptop:grid-cols-3 laptop:grid-rows-4 justify-center items-center mobile:overflow-hidden '>
                               
                             <div className='relative bg-red-500 laptop:ml-[3px] laptop:mt-[5px] skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]'>
                             <h1 className='absolute mt-[-40px] skew-y-6 -skew-x-12 text-7xl text-yellow-400 font-black border-font border-blue-80 hover:mt-[-50px]'>19</h1>
                              <Link to="/gallery" onClick={openImagePanel} className="text-white font-black hover:text-blue-700 transition duration-300"
                                ><h2 className=' -skew-x-12'>OUTUBRO</h2>                              
                                </Link>
                             </div>
                             <div className='relative bg-red-500  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]'>
                             <h1 className='absolute mt-[-40px] skew-y-6 -skew-x-12 text-7xl text-yellow-400 font-black border-font border-blue-80 hover:mt-[-50px]'>20</h1>
                              <Link to="/gallery/20" className="text-white font-black hover:text-blue-700 transition duration-300"
                                ><h2 className=' -skew-x-12'>OUTUBRO</h2>                              
                                </Link>
                             </div>
                             <div className='relative bg-red-500  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]'>
                             <h1 className='absolute mt-[-40px] skew-y-6 -skew-x-12 text-7xl text-yellow-400 font-black border-font border-blue-80 hover:mt-[-50px]'>21</h1>
                              <Link to="/gallery/21" className="text-white font-black hover:text-blue-700 transition duration-300"
                                ><h2 className=' -skew-x-12'>OUTUBRO</h2>                              
                                </Link>
                             </div>
                             <div className='relative bg-red-500  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]'>
                             <h1 className='absolute mt-[-40px] skew-y-6 -skew-x-12 text-7xl text-yellow-400 font-black border-font border-blue-80 hover:mt-[-50px]'>22</h1>
                              <Link to="/gallery/22" className="text-white font-black hover:text-blue-700 transition duration-300"
                                ><h2 className=' -skew-x-12'>OUTUBRO</h2>                              
                                </Link>
                             </div>
                             <div className='relative bg-red-500  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]'>
                             <h1 className='absolute mt-[-40px] skew-y-6 -skew-x-12 text-7xl text-yellow-400 font-black border-font border-blue-80 hover:mt-[-50px]'>23</h1>
                              <Link to="/gallery/23" className="text-white font-black hover:text-blue-700 transition duration-300"
                                ><h2 className=' -skew-x-12'>OUTUBRO</h2>                              
                                </Link>
                             </div>
                             <div className='relative bg-red-500  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]'>
                             <h1 className='absolute mt-[-40px] skew-y-6 -skew-x-12 text-7xl text-yellow-400 font-black border-font border-blue-80 hover:mt-[-50px]'>24</h1>
                              <Link to="/gallery/24" className="text-white font-black hover:text-blue-700 transition duration-300"
                                ><h2 className=' -skew-x-12'>OUTUBRO</h2>                              
                                </Link>
                              
                             </div>
                             <div className='relative bg-red-500  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]'>
                             <h1 className='absolute mt-[-40px] skew-y-6 -skew-x-12 text-7xl text-yellow-400 font-black border-font border-blue-80 hover:mt-[-50px]'>25</h1>
                              <Link to="/gallery/25" className="text-white font-black hover:text-blue-700 transition duration-300"
                                ><h2 className=' -skew-x-12'>OUTUBRO</h2>                              
                                </Link>
                             </div>
                             <div className='relative bg-red-500  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-[150px] mobile:ml-5 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]'>
                             <h1 className='absolute mt-[-40px] skew-y-6 -skew-x-12 text-7xl text-yellow-400 font-black border-font border-blue-80 hover:mt-[-50px]'>26</h1>
                              <Link to="/gallery/26" className="text-white font-black hover:text-blue-700 transition duration-300"
                                ><h2 className=' -skew-x-12'>OUTUBRO</h2>                              
                                </Link>
                             </div>
                             <div className='relative bg-red-500  skew-x-12 laptop:p-4 laptop:w-80 mobile:w-48 mobile:ml-20 tablet:w-52 drop-shadow-[0_10px_10px_rgba(0,0,0,9)]'>
                             <h1 className='absolute mt-[-40px] skew-y-6 -skew-x-12 text-7xl text-yellow-400 font-black border-font border-blue-80 hover:mt-[-50px]'>27</h1>
                              <Link to="/gallery/27" className="text-white font-black hover:text-blue-700 transition duration-300"
                                ><h2 className=' -skew-x-12'>OUTUBRO</h2>                              
                                </Link>
                             </div>
                              
                          </div>             
                              </div>
                      
                              <div  className='flex justify-center items-center bg-cover laptop:h-screen mobile:h-[400px] w-full mobile:overflow-hidden' style={{backgroundImage:`url(${Bigreja})`}} >                
                <h1 className='absolute mb-96 laptop:mt-[-70px] text-yellow-300 p-3 font-semibold laptop:text-3xl tablet:xl drop-shadow-[0_10px_10px_rgba(0,0,0,10)]'>CONHEÇA A NOSSA IGREJA!</h1>
                <iframe  className='static laptop:mt-10 rounded-lg laptop:w-[700px] laptop:h-[400px] mobile:w-72 mobile:h-48' width="624" height="338" src="https://www.youtube.com/embed/kcohHcu_2es" title="0" frameborder="0" autoplay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                          


            
                                </div>

                                <div  className='relative bg-cover  h-screen w-full overflow-hidden' style={{backgroundImage:`url(${Bgimg})`}} >
                      <div className='flex justify-center items-center'>
                      <img className='mobile:w-48 mobile:mt-5 laptop:w-72 ' src={title} alt="" />
                      <img className='mobile:w-24 mobile:mt-5 laptop:w-24 ' src={Titletwo} alt="" /> 
                      </div>
                      <div className='flex flex-col items-start space-y-5 laptop:ml-32 mobile:ml-12 mobile:mt-72 tablet:mt-10'>
                      
                            <a className='grid grid-flow-col gap-x-2 items-end text-2xl text-white' href='https://www.facebook.com/NIBGrandeCircular'>
                              <FaFacebook size={52} color='white'/>/NIBGrandeCircular
                            </a>
                            <a className='grid grid-flow-col gap-x-2 items-end text-2xl text-white' href='https://www.instagram.com/nibgrandecircular/'>
                              <FaInstagram size={52} color='white'/>@nibgrandecircular
                            </a>
                            <a className='grid grid-flow-col gap-x-2 items-end text-2xl text-white' href='https://www.youtube.com/@NIBGrandeCircular'>
                              <FaYoutube size={52} color='white'/>/@NIBGrandeCircular
                            </a>
                            
                          
                        <img className='absolute laptop:left-96 laptop:top-32 laptop:w-[590px] mobile:w-[400px] mobile:top-32 mobile:left-1 tablet:w-[400px] tablet:top-40 tablet:right-5 drop-shadow-[0_20px_20px_rgba(0,0,40,0.95)]' src={Imgfinal} alt="" />
                      </div>             
                                  </div>

                                  <div  className='laptop:flex justify-center items-center bg-cover mobile:h-72 w-full bg-blue-200  tablet:h-32 ' >
                        <h1 className='text-black border-solid font-semibold laptop:place-items-center mobile:place-items-start mobile:text-sm '>@Nova Igreja Batista 2024.</h1>  
                        <h3 >Todos os direitos reservados.</h3>

                                    </div>                             
    </div>
  );
}

export default Home;
