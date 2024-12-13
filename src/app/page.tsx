"use client";

import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";

import _VideoHeader from "@/components/_VideoHeader";
import { EmojiProvider, Emoji } from "@/components/react-apple-emojis";
import emojiData from "@/components/react-apple-emojis/data.json";
import { countries } from "@/data/countriesData";


/* const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map/Thailand",
    name: (
      <>
        Thaïland<EmojiProvider data={emojiData}>
          <Emoji name="flag-thailand" width={16} />
          </EmojiProvider>
      </>
    ),
    taxonomy: "category",
    count: 25,
    thumbnail:
      "/Images/cardsPays/Thailand.png",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: (
      <>
        Maroc<EmojiProvider data={emojiData}>
          <Emoji name="flag-morocco" width={16} />
          </EmojiProvider>
      </>
    ),
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/cardsPays/Maroc.png",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: (
      <>
        Phillipine<EmojiProvider data={emojiData}>
          <Emoji name="flag-philippines" width={16} />
          </EmojiProvider>
      </>
    ),
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/cardsPays/Phillipine.png",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: (
      <>
        Grece<EmojiProvider data={emojiData}>
          <Emoji name="flag-grece" width={16} />
          </EmojiProvider>
      </>
    ),
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/cardsPays/Grece.png",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: (
      <>
        France<EmojiProvider data={emojiData}>
          <Emoji name="flag-france" width={16} />
          </EmojiProvider>
      </>
    ),
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/cardsPays/France.png",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: (
      <>
        Mexique<EmojiProvider data={emojiData}>
          <Emoji name="flag-mexico" width={16} />
          </EmojiProvider>
      </>
    ),
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/cardsPays/Mexique.png",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: (
      <>
        Portugal<EmojiProvider data={emojiData}>
          <Emoji name="flag-portugal" width={16} />
          </EmojiProvider>
      </>
    ),
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/cardsPays/Portugal.png",
  },
]; */

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

function PageHome() {

  const handleButtonClick = () => {
    console.log("Button clicked!"); // Action du bouton (naviguer, scroller, etc.)
  };

  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />
      <_VideoHeader 
        videoSrc="/Videos/Global_Travel_Video_Home.mp4"
        title="Welcome to Our Platform"
        subtitle="Discover amazing places and experiences"
        buttonLabel="Get Started"
        onButtonClick={handleButtonClick}
      />
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories categories={countries} />

        <SectionOurFeatures />

        <SectionGridFeaturePlaces cardType="card2" />

        <SectionHowItWork />

        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black/20" />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
          />
        </div>

        <SectionSubscribe2 />

        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>

        <SectionGridCategoryBox />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
        />

        <SectionVideos />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
      </div>
    </main>
  );
}

export default PageHome;
