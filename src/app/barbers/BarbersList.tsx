"use client";
import BarberSelector from "@/components/BarberSelector";
import ServiceSelector from "@/components/ServiceSelector";
import { useGlobalContext } from "@/context/GlobalContext";
import { Barber, Service } from "@/types";
import { useRouter } from "next/navigation";

interface BarberList {
  barbers: Barber[];
  services: Service[];
}
export default function BarberList({ barbers, services }: BarberList) {
  const router = useRouter();
  const { selectedBarber, selectedServices } = useGlobalContext();
  const selectedBarberObj = barbers.find((el) => el.id === selectedBarber);
  return (
    <>
      <div className="flex justify-around gap-6 mb-8">
        <BarberSelector>
          {barbers.map((barber) => (
            <BarberSelector.BarberItems key={barber.id} barber={barber} />
          ))}
        </BarberSelector>
      </div>

      {selectedBarber && (
        <>
          <ServiceSelector>
            {services.map((service) => (
              <ServiceSelector.ServicesOptions
                key={service.id}
                availableServices={selectedBarberObj?.availableServices}
                service={service}
              />
            ))}
          </ServiceSelector>
          <button
            className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded disabled:bg-gray-400"
            disabled={!selectedServices?.length}
            onClick={() => {
              router.push("/booking");
            }}
          >
            Next
          </button>
        </>
      )}
    </>
  );
}
