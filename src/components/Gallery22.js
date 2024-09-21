import React, { useState } from 'react';
import Imgbg from '../assets/toy-story-cloud.jpg';
import Logo from '../assets/_MarcaMutante NibGC ToyStory.png';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div className="static bg-fixed bg-cover h-screen w-full " style={{backgroundImage:`url(${Imgbg})`}}>
      <h1 className='text-yellow-300 mb-42 font-semibold text-3xl drop-shadow-[0_10px_10px_rgba(0,0,0,10)]'>Galeria de Imagens 22</h1>
      <div>
        <img className='absolute  w-32' src={Logo} alt="" />
      </div>
      {/* Input de Upload */}
      <input
        type="file"
        multiple
        onChange={handleImageUpload}
        className="mb-4 mt-12 p-2 border rounded"
      />

      {/* Galeria de Imagens */}
      <div className="grid grid-cols-3 gap-4 overflow-y-scroll h-96">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img src={src} alt={`Imagem ${index + 1}`} className=" w-full h-40 object-cover rounded shadow border border-blue-900" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;