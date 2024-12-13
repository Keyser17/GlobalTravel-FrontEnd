"use client"


// Component _VideoHeader
// Ce composant affiche une vidéo en arrière-plan avec un titre, un sous-titre et un bouton.


import React from "react";

interface _VideoHeaderProps {
  videoSrc: string; // Chemin de la vidéo
  title: string; // Titre principal
  subtitle?: string; // Sous-titre (optionnel)
  buttonLabel: string; // Texte du bouton
  onButtonClick: () => void; // Fonction appelée au clic du bouton
}


const _VideoHeader: React.FC<_VideoHeaderProps> = ({
    videoSrc,
    title,
    subtitle,
    buttonLabel,
    onButtonClick,
  }) => {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
        />
  
        {/* Overlay pour rendre le texte lisible */}
        <div className="absolute inset-0 " />
  
        {/* Contenu centré */}
        <div className="absolute bottom-4 w-full flex justify-center">
          {/* <h1 className="text-4xl md:text-6xl font-bold">{title}</h1> */}
         {/*  {subtitle && <p className="mt-4 text-lg md:text-2xl">{subtitle}</p>} */}
          <button
            className="px-6 py-3 bg-white text-black font-medium text-lg rounded-lg shadow-lg hover:bg-gray-200"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    );
  };
export default _VideoHeader