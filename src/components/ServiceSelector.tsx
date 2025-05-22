"use client";

import React from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { Service } from "@/types";

interface ServiceSelectorProps {
  children: React.ReactNode;
}

export default function ServiceSelector({ children }: ServiceSelectorProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{children}</div>
    </div>
  );
}

interface ServicesOptionsProps {
  service: Service;
  availableServices: string[] | undefined;
}

function ServicesOptions({ service, availableServices }: ServicesOptionsProps) {
  const { selectedServices, toggleService } = useGlobalContext();
  const isEnabled = availableServices?.includes(service.id);

  return (
    <label
      key={service.id}
      className={`flex items-center gap-2 p-3 border rounded ${
        isEnabled ? "border-yellow-300" : "opacity-50 cursor-not-allowed"
      }`}
    >
      <span className="text-sm font-light text-gray-500">{service.duration} min</span>
      <span className="text-[15px] capitalize text-black">{service.name}</span>
      <span className="text-sm ml-auto gap-2 flex">
        ₹{service.price}
        <input
          type="checkbox"
          disabled={!isEnabled}
          checked={selectedServices.includes(service.id)}
          onChange={() => toggleService(service.id)}
          style={{ accentColor: "#d08700" }}
          className="w-4 h-4 rounded"
        />
      </span>
    </label>
  );
}

ServiceSelector.ServicesOptions = ServicesOptions;
