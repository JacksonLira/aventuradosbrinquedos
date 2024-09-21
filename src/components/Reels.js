import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { FaShareAlt, FaExpand } from 'react-icons/fa';

const VideoPanel = () => {
  // Lista de URLs dos vídeos do YouTube
  const [videos, setVideos] = useState([
    'https://www.youtube.com/embed/00MWmbMknbw?autoplay=1&controls=0&loop=1&mute=1&rel=0&modestbranding=1&playsinline=1',
    'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    "https://youtu.be/gz7VWvylzWE?list=PLucwtx8SlRymhzjmR9ilIEVcWC_tq2Upb",
    "https://youtu.be/juWT7f1-ehQ?list=PLucwtx8SlRymhzjmR9ilIEVcWC_tq2Upb",
    "https://youtu.be/hEkGQqUzIfQ?list=PLucwtx8SlRymhzjmR9ilIEVcWC_tq2Upb",
    "https://youtu.be/tcbAX-aMD6o?list=PLucwtx8SlRymhzjmR9ilIEVcWC_tq2Upb",
    "https://www.youtube.com/watch?v=uAQQWHU1Vc0&list=PLucwtx8SlRymhzjmR9ilIEVcWC_tq2Upb&index=6&pp=iAQB",
    "https://www.youtube.com/watch?v=zn7U6uVyG18&list=PLucwtx8SlRymhzjmR9ilIEVcWC_tq2Upb&index=7&pp=iAQB",
    "https://www.youtube.com/watch?v=D6ndA8m41Kw&list=PLucwtx8SlRykF54Zv8Jjse23iDT1lQrZN&index=7&pp=iAQB"


  ]);

  const [fullscreenVideoId, setFullscreenVideoId] = useState(null);

  // Extrair o ID do vídeo do URL do YouTube
  const extractVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Opções de configuração do YouTube Player
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
      
    },
  };

  const handleShare = (url) => {
    // Copia o URL do vídeo para a área de transferência
    navigator.clipboard.writeText(url);
    alert('Link do vídeo copiado para a área de transferência!');
  };

  const handleFullscreen = (videoId) => {
    setFullscreenVideoId(videoId);
  };

  return (
    <div className="grid laptop:grid-cols-5 mobile:grid-cols-2 mobile:mx-1 tablet:grid-cols-3 grid-rows-3 laptop:mx-4  tablet:ml-10 tablet:mt-1">
      {videos.map((videoUrl, index) => {
        const videoId = extractVideoId(videoUrl);

        return (
          <div key={index} className="relative w-full mobile:h-[470px] mobile:px-1 tablet:w-48 laptop:w-52">
            {videoId && (
              <YouTube
                videoId={videoId}
                opts={opts}
                className="rounded-md shadow-lg overflow-hidden"
                onReady={(e) => e.target.pauseVideo()}
              />
            )}

            {/* Botões de Compartilhar e Tela Cheia */}
            <div className="flex justify-between mt-4 mb-3">
              <button
                onClick={() => handleShare(videoUrl)}
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
              >
                <FaShareAlt />
                <span>Compartilhar</span>
              </button>
              <button
                onClick={() => handleFullscreen(videoId)}
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
              >
                <FaExpand />
                
              </button>
            </div>

            {/* Modo Tela Cheia */}
            {fullscreenVideoId === videoId && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <YouTube videoId={videoId} opts={{ height: '530', width: '100%' }} />
                <button
                  onClick={() => setFullscreenVideoId(null)}
                  className="absolute top-5 right-5 text-white text-lg"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VideoPanel;