// hotel/[hotelId]/layout.tsx
"use client";

import BackgroundSection from "@/components/BackgroundSection";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
import MobileFooterSticky from "../(listing-detail)/(components)/MobileFooterSticky";
/* import { imageGallery as listingStayImageGallery } from "../(listing-detail)/listing-stay-detail/constant";*/
/* Test pour rendre mes photos de data en gallery */
import { imageGallery as listingStayImageGallery } from "./gestionPhotos";
import { imageGallery as listingCarImageGallery } from "../(listing-detail)/listing-car-detail/constant";
import { imageGallery as listingExperienceImageGallery } from "../(listing-detail)/listing-experiences-detail/constant"; 
import { Route } from "next";
import { getHotelDataById } from "@/app/hotel/data";





const HotelLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const thisPathname = usePathname();
    const searchParams = useSearchParams();
    const modal = searchParams?.get("modal");
    
    // obtenir l/'id de l/'hotel
    if (thisPathname?.includes("/hotel")) {
      const hotelId = thisPathname?.split("/")[2]; // Récupère l/'id de l/'hotel dans l/'URL
      // split permet de diviser une chaîne de caractères en un tableau de sous-chaînes
      // [2] permet de récupérer le 3ème élément du tableau
      // car les tableaux sont indexés à partir de 0
      // 1 : hotel 2 : id de l/'hotel 3 : layout.tsx 
      console.log("hotelId: ", hotelId);
    }
    // obtenir l/'id de l/'hotel
    const hotel = getHotelDataById("1");

  
    const handleCloseModalImageGallery = () => {
      let params = new URLSearchParams(document.location.search);
      params.delete("modal");
      router.push(`${thisPathname}/?${params.toString()}` as Route);
    };
  
    const getImageGalleryListing = () => {
      if (thisPathname?.includes("/hotel")) {
        return listingStayImageGallery;
      }
      if (thisPathname?.includes("/listing-car-detail")) {
        return listingCarImageGallery;
      }
      if (thisPathname?.includes("/listing-experiences-detail")) {
        return listingExperienceImageGallery;
      }
  
      return [];
    };
    
    console.log("_____________________________________________________");
    console.log("params: ",);
    console.log("app/hotel/layout.tsx");
    console.log("Hotel Data: ", hotel);
    console.log("_____________________________________________________");


    console.log("_____________________________________________________");
    console.log("app/hotel/layout.tsx Pour gerer app/hotel/gestionPhotos.ts");
    console.log("thisPathname: ", thisPathname);
    console.log("router: ", router);
    // obtenir l/'id de l/'hotel 
    console.log("hotel: ", hotel);
    console.log("_____________________________________________________");
    

    return (
      <div className="ListingDetailPage">
        <ListingImageGallery
          isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
          onClose={handleCloseModalImageGallery}
          images={getImageGalleryListing()}
        />
  
        <div className="container ListingDetailPage__content">{children}</div>
  
        {/* OTHER SECTION */}
        <div className="container py-24 lg:py-32">
          <div className="relative py-16">
            <BackgroundSection />
            <SectionSliderNewCategories
              heading="Explore by types of stays"
              subHeading="Explore houses based on 10 types of stays"
              categoryCardType="card5"
              itemPerRow={5}
              sliderStyle="style2"
            />
          </div>
          <SectionSubscribe2 className="pt-24 lg:pt-32" />
        </div>
  
        {/* STICKY FOOTER MOBILE 
            Mettre ce coposant fonctionnele dynamiquement
             en rendant les donner depuis le children 
        
        */}
        <MobileFooterSticky pricePerNight={hotel?.price.current  || 0}/>
        
      </div>
    );
  };
  
  export default HotelLayout;
  
