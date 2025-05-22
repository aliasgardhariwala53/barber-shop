import { getBarbers, getServices } from "@/mock/fetchData";
import BarberList from "./BarbersList";

export default async function BarberSelectionPage() {
  const barbers = await getBarbers();
  const services = await getServices();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Choose Your Barber
      </h1>
      <BarberList barbers={barbers} services={services} />
    </div>
  );
}
