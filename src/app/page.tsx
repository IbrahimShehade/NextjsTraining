"use client";
import React, { useEffect, useState } from "react";
import Loading from "./components/loading";
import Tours from "./components/tours";
import { TourT } from "./types";

interface ToursProps {
  tours: TourT[];
  removeTour: (id: string) => void;
}

const url = "https://www.course-api.com/react-tours-project";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<TourT[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setLoading(false);
      setTours(toursData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <>
        <h1 className="text-2xl  p-8">No Tours Left</h1>
        <button
          onClick={() => {
            fetchTours();
          }}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-4 ml-7"
        >
          &#8634; Refresh
        </button>
      </>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}
