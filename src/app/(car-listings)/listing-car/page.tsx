import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";

export interface ListingCarPageProps {}



// Compare this snippet from src/app/%28car-listings%29/listing-car/page.tsx:
const ListingCarPage: FC<ListingCarPageProps> = () => {
  return (
    <div className="container ">
      <SectionGridFilterCard className="pb-24 lg:pb-28" />

    </div>
  );
};

export default ListingCarPage;
