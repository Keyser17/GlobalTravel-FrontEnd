import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";

export const PHOTOS = [
  "https://www.zenseanaresort.com/images/gallery/overview/1.jpg",
  "https://www.zenseanaresort.com/images/gallery/overview/2.jpg",
  "https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  // Ajoute plus d'images si nécessaire
];

export const Amenities_demos = [
  { name: "la-key", icon: "la-key" },
  { name: "la-luggage-cart", icon: "la-luggage-cart" },
  { name: "la-shower", icon: "la-shower" },
  { name: "la-smoking", icon: "la-smoking" },
  { name: "la-snowflake", icon: "la-snowflake" },
  { name: "la-spa", icon: "la-spa" },
  { name: "la-suitcase", icon: "la-suitcase" },
  { name: "la-suitcase-rolling", icon: "la-suitcase-rolling" },
  { name: "la-swimmer", icon: "la-swimmer" },
  { name: "la-swimming-pool", icon: "la-swimming-pool" },
  { name: "la-tv", icon: "la-tv" },
  { name: "la-umbrella-beach", icon: "la-umbrella-beach" },
  { name: "la-utensils", icon: "la-utensils" },
  { name: "la-wheelchair", icon: "la-wheelchair" },
  { name: "la-wifi", icon: "la-wifi" },
  { name: "la-baby-carriage", icon: "la-baby-carriage" },
  { name: "la-bath", icon: "la-bath" },
  { name: "la-bed", icon: "la-bed" },
  { name: "la-briefcase", icon: "la-briefcase" },
  { name: "la-car", icon: "la-car" },
  { name: "la-cocktail", icon: "la-cocktail" },
  { name: "la-coffee", icon: "la-coffee" },
  { name: "la-concierge-bell", icon: "la-concierge-bell" },
  { name: "la-dice", icon: "la-dice" },
  { name: "la-dumbbell", icon: "la-dumbbell" },
  { name: "la-hot-tub", icon: "la-hot-tub" },
  { name: "la-infinity", icon: "la-infinity" },
];


const hotels = [
  {
    id: "1",
    country: "Thailand", // Pays
    region: "Phuket", // Région ou département
    city: "Patong", // Ville
    category: "Hotel", // Catégorie (ex: hôtel, appartement)
    title: "Zenseana Resort & Spa - SHA Plus", // Titre d'affichage
    name: "Zenseana Resort & Spa - SHA Plus", // Nom officiel
    rating: {
      value: 7.8,
      count: 2552,
      bestRating: 10,
    }, // Note moyenne et nombre d'avis
    price: {
      current: 350,
      old: 400,
      currency: "USD",
      per: "night", // Unité de prix
    }, // Prix actuel, ancien prix et unité
    address: {
      postalCode: "83150",
      street: "147 Prabaramee Road, Patong, Kathu",
      locality: "Patong Beach",
      region: "Phuket",
      country: "Thailand",
    }, // Adresse détaillée
    description:
      "Situé à Patong Beach, à 500 mètres de la plage de Patong, le Zenseana Resort & Spa - SHA Plus propose une piscine extérieure, un parking privé gratuit, une...",
    location: "Phuket, Thailand", // Emplacement résumé
    coordinates: {
      lat: 7.880448,
      lng: 98.392250,
    }, // Coordonnées pour la carte
    host: {
      name: "Zenseana Resort & Spa - SHA Plus",
      avatar: "/path-to-avatar.png",
      superHost: true,
    }, // Informations sur l'hôte
    amenities: [
      "Free WiFi",
      "Outdoor pool",
      "Parking",
      "Air conditioning",
      // Ajoute d'autres équipements ici
    ], // Équipements disponibles
    features: {
      guests: 6,
      beds: 6,
      baths: 3,
      bedrooms: 2,
    }, // Caractéristiques principales
    gallery: {
      general: [
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Main Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Secondary Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Main Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Secondary Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Main Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Secondary Image" },
      ],
    },
    /* amenities: Amenities_demos.slice(0, 10) */
    reviews: [
      {
        id: "1",
        avatar: "/path-to-avatar.png",
        name: "Lina",
        date: "May 2021",
        content:
          "The place was amazing, very clean, and the host was very helpful. I would definitely recommend this place to anyone who wants to visit Phuket.",
      },
      {
        id: "2",
        avatar: "/path-to-avatar2.png",
        name: "John",
        date: "June 2021",
        content:
          "Great location and services! The breakfast was delightful, and the rooms were spotless.",
      },
      // Ajoute d'autres avis ici
    ], // Avis des clients
    image: "https://cf.bstatic.com/xdata/images/hotel/max500/375079842.jpg?k=8a14dc3113ad310983b11436cb86edd169dcd45e28f995a02fa37aac537a414b&o=&hp=1", // URL de l'image principale
    mapLink:
      "https://maps.googleapis.com/maps/api/staticmap?sensor=false&center=7.9051103,98.3008001&markers=color:blue%7c7.9051103,98.3008001&size=1600x1200&zoom=15",
    url: "https://www.booking.com/hotel/th/zen-seana-resort.fr.html", // URL vers la page officielle
  },
  // Ajoute d'autres hôtels ici
];

export const getHotelDataById = (hotelId: string) => {
  return hotels.find((hotel) => hotel.id === hotelId);
};

export default hotels;
