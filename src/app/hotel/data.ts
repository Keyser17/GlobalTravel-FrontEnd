// hotel/[hotelId]/data.ts
// Types pour clarifier la structure des données
interface Address {
  postalCode: string;
  street: string;
  locality: string;
  region: string;
  country: string;
}

interface Rating {
  value: number;
  count: number;
  places: number;
  bestRating: number;
}

interface Price {
  current: number;
  old?: number;
  currency: string;
  per: string; // ex: "night"
  sign?: string; // ex: "$"
}

interface Host {
  name: string;
  avatar: string;
  superHost: boolean;
}

interface Features {
  guests: number;
  beds: number;
  baths: number;
  bedrooms: number;
}

interface Image {
  src: string;
  alt: string;
}

interface Review {
  id: string;
  avatar: string;
  name: string;
  date: string;
  content: string;
}

interface Room {
  id: string;
  name: string;
  description: string;
  price: Price;
  features: Features;
  gallery: Image[];
}
interface Amenity {
  name: string; // Nom de l'équipement
  icon: string; // Classe d'icône associée
}

interface Hostinformation {
  name: string;
  avatar: string;
  superHost: boolean;
  responseRate: number; // Taux de réponse en pourcentage
  joinedDate: string; // Date d'inscription
  reviews: {
    rating: number; // Note moyenne
    count: number; // Nombre d'avis
    places: number; // Nombre de lieux
  };
}

interface HostReview {
  name: string;
  avatar?: string;
  date: string;
  comment: string;
  starPoint: number;
}


export interface Hotel {
  id: string;
  country: string;
  region: string;
  city: string;
  category: string;
  title: string;
  name: string;
  rating: Rating;
  price: Price;
  address: Address;
  description: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  host: Host;
  amenities: Amenity[];
  features: Features;
  gallery: {
    general: Image[];
    [key: string]: Image[];
  };
  reviews: Review[];
  image: string;
  mapLink: string;
  url: string;
  rooms: Room[]; // Liste des chambres associées
  hostinformation: Hostinformation;
  hostreviews: HostReview[];
}

// Exemple de données
const hotels: Hotel[] = [
  {
    id: "1",
    country: "Thailand",
    region: "Phuket",
    city: "Patong",
    category: "Hotel",
    title: "Zenseana Resort & Spa - SHA Plus",
    name: "Zenseana Resort & Spa - SHA Plus",
    rating: {
      value: 7.8,
      count: 2552,
      bestRating: 10,
      places: 12, // Nombre de lieux
    },
    price: {
      current: 50,
      sign: "€",
      currency: "USD",
      per: "Nuit",
    },
    address: {
      postalCode: "83150",
      street: "147 Prabaramee Road, Patong, Kathu",
      locality: "Patong Beach",
      region: "Phuket",
      country: "Thailand",
    },
    description: "A luxurious resort in the heart of Patong Beach.",
    location: "Phuket, Thailand",
    coordinates: {
      lat: 7.880448,
      lng: 98.39225,
    },
    host: {
      name: "Zenseana Resort & Spa - SHA Plus",
      avatar: "../../images/avatars_etablissements/Image_Zenseana.png",
      superHost: true,
    },
    amenities: [
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
    ],
    features: {
      guests: 100,
      beds: 50,
      baths: 25,
      bedrooms: 50,
    },
    gallery: {
      general: [
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Main Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/2.jpg", alt: "Secondary Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Main Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/2.jpg", alt: "Secondary Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Main Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/2.jpg", alt: "Secondary Image" },
        { src: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg", alt: "Main Image" },
        
      ],
    },
    reviews: [
      {
        id: "1",
        avatar: "/path-to-avatar.png",
        name: "Lina",
        date: "May 2021",
        content: "Amazing service and location!",
      },
    ],
    image: "https://www.zenseanaresort.com/images/gallery/overview/1.jpg",
    mapLink: "https://maps.google.com",
    url: "https://booking.com",
    rooms: [
      {
        id: "101",
        name: "Deluxe Room",
        description: "A spacious room with sea view.",
        price: {
          current: 120,
          currency: "USD",
          per: "night",
        },
        features: {
          guests: 2,
          beds: 1,
          baths: 1,
          bedrooms: 1,
        },
        gallery: [
          { src: "https://example.com/room1.jpg", alt: "Room 1" },
          { src: "https://example.com/room2.jpg", alt: "Room 2" },
        ],
      },
      {
        id: "102",
        name: "Family Suite",
        description: "Perfect for families, with extra space and amenities.",
        price: {
          current: 200,
          currency: "USD",
          per: "night",
        },
        features: {
          guests: 4,
          beds: 2,
          baths: 2,
          bedrooms: 2,
        },
        gallery: [
          { src: "https://example.com/family1.jpg", alt: "Family Room 1" },
          { src: "https://example.com/family2.jpg", alt: "Family Room 2" },
        ],
      },
    ],
    hostinformation: {
      name: "Kevin Francis",
      avatar: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/260150006.jpg?k=019c4643947bbb8bb41192d68ca9d1f1c954d37489f329681ec81fa1ac026675&o=",
      superHost: true,
      responseRate: 100, // Taux de réponse
      joinedDate: "Mars 2001", // Date d'inscription
      reviews: {
        rating: 4.5, // Note moyenne
        count: 112, // Nombre d'avis
        places: 12, // Nombre de lieux
      },

    },
    hostreviews: [
      {
        name: "Test Test",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "May 20, 2021",
        comment: "The host was incredibly helpful and friendly!",
        starPoint: 5,
      },
      {
        name: "Ici cest paname",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        date: "June 15, 2021",
        comment: "The accommodations were perfect for our needs.",
        starPoint: 4,
      },
    ],
    
  },
];

export const getHotelDataById = (id: string): Hotel | undefined => {
  return hotels.find((hotel) => hotel.id === id);
};

export const getRoomDataById = (hotelId: string, roomId: string): Room | undefined => {
  const hotel = getHotelDataById(hotelId);
  return hotel?.rooms.find((room) => room.id === roomId);
};
