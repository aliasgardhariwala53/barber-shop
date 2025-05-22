"use client";
import React from "react";
import { Barber } from "@/types";
import { useGlobalContext } from "@/context/GlobalContext";

interface BarberSelectorProps {
  children: any;
}

export default function BarberSelector({ children }: BarberSelectorProps) {
  return <div className="flex flex-wrap gap-4">{children}</div>;
}

interface BarberItemsProps {
  barber: Barber;
}

function BarberItems({ barber }: BarberItemsProps) {
  const { selectedBarber, setSelectedBarber } = useGlobalContext();

  return (
    <div
      key={barber.id}
      onClick={() => setSelectedBarber(barber.id)}
      className={"cursor-pointer rounded-lg p-2 flex flex-col items-center"}
    >
      <img
        src={barber.avatar}
        alt={barber.name}
        className={`w-24 h-24 rounded-full object-cover border-4 mb-2  ${
          selectedBarber === barber.id
            ? "border-yellow-500 shadow-lg"
            : "border-transparent hover:border-gray-300"
        }`}
      />
      <span className="text-lg font-medium">{barber.name}</span>
    </div>
  );
}

BarberSelector.BarberItems = BarberItems;

