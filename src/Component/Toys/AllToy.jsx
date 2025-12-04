import React from "react";
import useToys from "../../hook/useToys";
import ToyCard from "./ToyCard/ToyCard";
import { HashLoader } from "react-spinners";

const AllToy = () => {
  const { toys, loading } = useToys();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <HashLoader size={150} color="rgba(232, 89, 79, 1)" />
      </div>
    );
  }

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-8">
            Explore Popular Toys
          </h2>
        </div>
        {/* Map All Toys  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllToy;
