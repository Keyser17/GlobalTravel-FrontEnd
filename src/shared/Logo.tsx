import React from "react";
import Image from "next/image";

import logoImg from "@/images/Global_Travel_Logo.png";
import logoLightImg from "@/images/logo-light.png";
import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "w-24",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {/* <LogoSvgLight />
      <LogoSvg />
 */}
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <Image
          className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Logo"
          width={200} // Ajustez la largeur ici
          height={100} // La hauteur sera automatiquement proportionnelle
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <Image
          className="hidden dark:block"
          src={imgLight}
          alt="Logo-Light"
          width={200} // Ajustez la largeur ici
          height={100} // La hauteur sera automatiquement proportionnelle
        />
      )}
    </Link>
  );
};

export default Logo;
