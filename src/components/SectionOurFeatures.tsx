import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png"; // Vous pouvez remplacer par une image spécifique à la marque
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      {/* Image à droite ou à gauche */}
      <div className="flex-grow">
        <Image src={rightImg} alt="Features Image" className="rounded-lg shadow-lg" />
      </div>

      {/* Texte et points forts */}
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Points forts
        </span>
        <h2 className="font-semibold text-4xl mt-5">Découvrez l'incomparable</h2>

        <ul className="space-y-10 mt-16">
          {/* Première caractéristique */}
          <li className="space-y-4">
            <Badge name="Destinations uniques" />
            <span className="block text-xl font-semibold">
              Explorez des lieux incroyables
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Partez à la découverte de destinations uniques, soigneusement
              sélectionnées pour répondre à toutes vos envies de voyage.
            </span>
          </li>

          {/* Deuxième caractéristique */}
          <li className="space-y-4">
            <Badge color="green" name="Confort et qualité" />
            <span className="block text-xl font-semibold">
              Hébergements d'exception
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Profitez de logements confortables et authentiques, que ce soit
              pour un séjour relaxant ou une aventure hors du commun.
            </span>
          </li>

          {/* Troisième caractéristique */}
          <li className="space-y-4">
            <Badge color="blue" name="Expériences immersives" />
            <span className="block text-xl font-semibold">
              Vivez des expériences inoubliables
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Participez à des activités uniques : safaris, cours de cuisine,
              visites guidées, et bien plus encore.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
