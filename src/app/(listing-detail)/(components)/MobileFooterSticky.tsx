import React, { useState } from "react";
import ModalSelectDate from "@/components/ModalSelectDate";
import ButtonPrimary from "@/shared/ButtonPrimary";
import converSelectedDateToString from "@/utils/converSelectedDateToString";
import ModalReserveMobile from "./ModalReserveMobile";
import { FC } from "react";



interface MobileFooterStickyProps {
  pricePerNight: number; // Prix par nuit
  defaultStartDate?: Date; // Date de début par défaut
  defaultEndDate?: Date; // Date de fin par défaut
}





const MobileFooterSticky: FC<MobileFooterStickyProps> = ({
  pricePerNight,
  defaultStartDate = new Date(), // Valeur par défaut si aucune date n'est fournie
  defaultEndDate = new Date(),
}) => {
  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate);

  return (
    <div className="block lg:hidden fixed bottom-0 inset-x-0 py-2 sm:py-3 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-6000 z-40">
      <div className="container flex items-center justify-between">
        <div className="">
          <span className="block text-xl font-semibold">
            {pricePerNight}€
            <span className="ml-1 text-sm font-normal text-neutral-500 dark:text-neutral-400">
              /nuit
            </span>
          </span>
          <ModalSelectDate
            renderChildren={({ openModal }) => (
              <span
                onClick={openModal}
                className="block text-sm underline font-medium"
              >
                {converSelectedDateToString([startDate, endDate])}
              </span>
            )}
          />
        </div>
        <ModalReserveMobile
          renderChildren={({ openModal }) => (
            <ButtonPrimary
              sizeClass="px-5 sm:px-7 py-3 !rounded-2xl"
              onClick={openModal}
            >
              Reserve
            </ButtonPrimary>
          )}
        />
      </div>
    </div>
  );
};

export default MobileFooterSticky;
