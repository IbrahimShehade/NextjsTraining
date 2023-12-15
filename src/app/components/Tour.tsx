import React, { useState } from "react";
import { TourT } from "../types";
interface ToursProps {
  tour: TourT;
  removeTour: (id: string) => void;
}

const Tour = ({ tour, removeTour }: ToursProps) => {
  const { id, name, info, image, price, className } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <article
      className={`rounded overflow-hidden shadow-lg my-4 ${className} w-full md:w-1/4`}
    >
      <img className="w-full h-96 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">{name}</h1>
        <p className="text-gray-700 text-base max-h-sm">
          {readMore ? info : `${info.substring(0, 200)}...`}
        </p>
        <button
          className="text-blue-700"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "show less" : "read more"}
        </button>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">${price}</p>
        </div>
      </div>

      <button
        onClick={() => removeTour(id)}
        className="mb-10 border border-red-700 text-red-700 font-bold py-2 px-4 rounded "
      >
        Not Intersted
      </button>
    </article>
  );
};

export default Tour;
