// hotel/[hotelId]/components/RoomDetails.tsx
const RoomDetails = ({ name, description }: { name: string; description: string }) => {
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default RoomDetails;
  