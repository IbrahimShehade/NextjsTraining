import React from "react";
import Tour from "./Tour";
import { TourT } from "../types";

interface ToursProps {
  tours: TourT[];
  removeTour: (id: string) => void;
}

export default function Tours({ tours, removeTour }: ToursProps) {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-4xl inline-block relative p-4">
          Our Tours
          <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-green-500"></span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {tours.slice(0, 3).map((tour) => (
          <Tour key={tour.id} removeTour={removeTour} tour={tour} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {tours.slice(3).map((tour) => (
          <Tour key={tour.id} removeTour={removeTour} tour={tour} />
        ))}
      </div>
    </div>
  );
}
