import { StarIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import Avatar from "@/shared/Avatar";

import { getHotelDataById } from "../app/hotel/data";


interface CommentListingDataType {
  name: string;
  avatar?: string;
  date: string;
  comment: string;
  starPoint: number;
}

export interface CommentListingProps {
  className?: string;
  data?: CommentListingDataType;
  hasListingTitle?: boolean;
}

const DEMO_DATA: CommentListingDataType = {
  name: "Cody Fisher",
  date: "May 20, 2021",
  comment:
    "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
  starPoint: 5,
};


console.log("/src/components/CommentListing.tsx _______ src/components/CommentListing.tsx  ______ src/components/CommentListing.tsx");  


interface HostReview {
  name: string;
  avatar?: string;
  date: string;
  comment: string;
  starPoint: number;
}



export const hotelData = getHotelDataById("1");
console.log(" src/components/CommentListing.tsx");
console.log("Hotel Reviews data: ", hotelData?.hostreviews);
console.log("juste les src: ", hotelData?.hostreviews.map((item : HostReview ) => item));


const reviews: HostReview[] = hotelData?.hostreviews.map((review: HostReview) => ({
  name: review.name,
  // avatar: review.avatar || "", // Gestion d'une valeur par défaut si l'avatar est manquant
  date: review.date,
  comment: review.comment,
  starPoint: review.starPoint,
})) || [];


const CommentListing: FC<CommentListingProps> = ({
  className = "",
  data = DEMO_DATA,
  hasListingTitle,

  
}) => {

  const hotelData = getHotelDataById("1");
  const reviews = hotelData?.hostreviews || []; // Défaut : tableau vide si pas de données
  return (
    <div
      className={`nc-CommentListing flex space-x-4 ${className}`}
      data-nc-id="CommentListing"
    >
      <div className="pt-0.5">
        <Avatar
          sizeClass="h-10 w-10 text-lg"
          radius="rounded-full"
          userName={data.name}
          imgUrl={data.avatar}
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between space-x-3">
          <div className="flex flex-col">
            <div className="text-sm font-semibold">
              <span>{data.name}</span>
              {hasListingTitle && (
                <>
                  <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                    {` review in `}
                  </span>
                  <a href="/">The Lounge & Bar</a>
                </>
              )}
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {data.date}
            </span>
          </div>
          <div className="flex text-yellow-500">
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
          </div>
        </div>
        <span className="block mt-3 text-neutral-6000 dark:text-neutral-300">
          {data.comment}
        </span>

        <h1>
          Ici le test pour rajouter les commentaire dynamique 
        </h1>
          <h1>
          Ici le test pour rajouter les commentaire dynamique 
          reviews.map((review, index
        CommentListing
          key=index
          data=
            name review.name,
            avatar review.avatar,
            date review.date,
            comment review.comment,
            starPoint review.starPoint,
          
        </h1>



      </div>
{/* 
      <div className="space-y-6">
      {reviews.map((review, index) => (
        <CommentListing
        key={index}
        data={{
          name: review.name,
          avatar: review.avatar,
          date: review.date,
          comment: review.comment,
          starPoint: review.starPoint,
        }}
        />
      ))}
      </div> */}
    </div>
  );
};

export default CommentListing;
