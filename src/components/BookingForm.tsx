"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingPage() {
  const router = useRouter();
  const { selectedBarber, selectedServices } = useGlobalContext();

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!date || !time || !mobile) {
      alert("Please fill all required fields.");
      return;
    }
    console.log({ selectedBarber, selectedServices, date, time, mobile, description });
    alert("Booking submitted!");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-6">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">Choose a Date</h2>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          inline
          minDate={new Date()}
        />
      </div>
      <div className="flex-1 space-y-4">
        <div>
          <label className="block text-sm font-medium">Preferred Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mobile Number</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
