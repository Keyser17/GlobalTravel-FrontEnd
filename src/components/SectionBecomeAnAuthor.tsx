import React, { FC } from "react";
import rightImgDemo from "@/images/BecomeAnAuthorImg.png";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Logo from "@/shared/Logo";
import Image from "next/image";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-20" />
        <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
          Pourquoi nous choisir ?
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
        En nous accompagnant, vous vivrez un voyage riche en expériences. Avec Chisfis, la réservation d'hébergements, de villas de villégiature, d'hôtels, de maisons privées, d'appartements... devient rapide, pratique et facile.
        </span>
        <ButtonPrimary className="mt-6 sm:mt-11">
        Devenez partenaire !
        </ButtonPrimary>
      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
