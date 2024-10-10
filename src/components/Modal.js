import React from 'react'

// eslint-disable-next-line react/prop-types
const Modal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl">
        <div className="relative">
          <iframe
            width="100%"
            height="500"
            src={videoUrl}
            title="0"
            autoPlay="1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full p-2"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
