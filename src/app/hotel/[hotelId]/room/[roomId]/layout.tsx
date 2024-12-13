// hotel/[hotelId]/[roomId]/layout.tsx
"use client";

import React from "react";

const RoomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>Header pour la chambre</header>
      <div>{children}</div>
      <footer>Footer pour la chambre</footer>
    </div>
  );
};

export default RoomLayout;
