import { Barber, Service } from "@/types";
import { barbers, services } from "./data";

export async function getBarbers():Promise<Barber[]> {
  return new Promise(resolve => resolve(barbers));
}

export async function getServices():Promise<Service[]> {
  return new Promise(resolve => resolve(services));
}