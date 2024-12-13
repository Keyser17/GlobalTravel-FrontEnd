import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";
import { getHotelDataById } from "./data";
import { useRouter, usePathname } from "next/navigation";



// PHOTOS est un tableau de chaînes de caractères 
// qui contient les URL des images
// qui seront utilisées pour la galerie d'images
// dans la page de détail de l'hôtel via 
// le composant ListingImageGallery

console.log("/app/hotel/gestionPhotos _______ /app/hotel/gestionPhotos  ______ /app/hotel/gestionPhotos");  



export const hotelData = getHotelDataById("1");
console.log(" /app/hotel/gestionPhotos");
console.log("Hotel data: ", hotelData);
console.log("data.gallery.general: ", hotelData?.gallery.general || "no data dans gallery.general"); 
console.log("juste les src: ", hotelData?.gallery.general.map((item) => item.src));


// console.log("data.gallery.general: ", data.gallery.general);

/* export const PHOTOS: string[] = data.gallery.general.map((item : src ) => item.src);
console.log("PHOTOS: ", PHOTOS); */
  
export const PHOTOS: string[] = [
  /* "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", */

/*   "https://www.zenseanaresort.com/images/gallery/overview/1.jpg",
  "https://www.zenseanaresort.com/images/gallery/overview/2.jpg",
  "https://www.zenseanaresort.com/images/gallery/overview/1.jpg",
  "https://www.zenseanaresort.com/images/gallery/overview/2.jpg",
  "https://www.zenseanaresort.com/images/gallery/overview/1.jpg",
  "https://www.zenseanaresort.com/images/gallery/overview/2.jpg",
  "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", */
      
  ...(hotelData?.gallery.general?.map((item) => item.src) || [])

];

// imageGallery est un tableau d'objets
// qui contient les URL des images
// qui seront utilisées pour la galerie d'images
// dans la  page de détail de l'hôtel via
// le composant ListingImageGallery



export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
  (item, index): ListingGalleryImage => {
    
    
    
    
    return {
      id: index,
      url: item,
    };
  }
);
/* 
import { Hotel } from "./data";

export const generateImageGallery = (hotel: Hotel): ListingGalleryImage[] => {
  if (!hotel.gallery?.general) {
    return []; // Retourne une galerie vide si aucune image n'existe
  }

  return hotel.gallery.general.map((item, index) => ({
    id: index,
    url: item.src,
  }));
}; */