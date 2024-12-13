"use client";

import { MapPinIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, useRef, FC } from "react";
import { EmojiProvider, Emoji } from "@/components/react-apple-emojis";
import emojiData from "@/components/react-apple-emojis/data.json";
import countriesWithEmojis from "@/data/countriesWithEmojis";

interface Props {
  onClick?: () => void;
  onChange?: (value: string) => void;
  className?: string;
  defaultValue?: string;
  headingText?: string;
}


const LocationInput: FC<Props> = ({
  onChange = () => {},
  className = "",
  defaultValue = "United States",
  headingText = "Où aller ?",
}) => {
  const [value, setValue] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleSelectLocation = (item: { name: string; emojiName?: string }) => {
    setTimeout(() => {
      setValue(item.name);
      onChange && onChange(item.name);
    }, 0);
  };

  const renderSearchValues = ({
    heading,
    items,
  }: {
    heading: string;
    items: { name: string; emojiName?: string }[];
  }) => {
    return (
      <>
        <p className="block font-semibold text-base">{heading}</p>
        <div className="mt-3">
          {items.map((item, index) => (
            <div
              className="py-2 mb-1 flex items-center space-x-3 text-sm cursor-pointer"
              onClick={() => handleSelectLocation(item)}
              key={index}
            >
              <MapPinIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
              <span className="flex items-center">
                {item.emojiName && (
                  <EmojiProvider data={emojiData}>
                    <Emoji name={item.emojiName} width={16} className="mr-2" />
                  </EmojiProvider>
                )}
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className={`${className}`} ref={containerRef}>
      <div className="p-5">
        <span className="block font-semibold text-xl sm:text-2xl">
          {headingText}
        </span>
        <div className="relative mt-5">
          <input
            className="block w-full bg-transparent border px-4 py-3 pr-12 border-neutral-900 dark:border-neutral-200 rounded-xl focus:ring-0 focus:outline-none text-base leading-none placeholder-neutral-500 dark:placeholder-neutral-300 truncate font-bold placeholder:truncate"
            placeholder={"Destinations"}
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            ref={inputRef}
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2">
            <MagnifyingGlassIcon className="w-5 h-5 text-neutral-700 dark:text-neutral-400" />
          </span>
        </div>
        <div className="mt-7">
          {value ? (
            renderSearchValues({
              heading: "All Countries",
              items: countriesWithEmojis,
            })
          ) : (
            renderSearchValues({
              heading: "Destinations Populaires",
              items: [
                { name: "Thailand", emojiName: "flag-thailand" },
                { name: "Morocco", emojiName: "flag-morocco" },
                { name: "Germany", emojiName: "flag-germany" },
                { name: "United Kingdom", emojiName: "flag-united-kingdom" },
                { name: "United Arab Emirates", emojiName: "flag-united-arab-emirates" },
              ],
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationInput;
