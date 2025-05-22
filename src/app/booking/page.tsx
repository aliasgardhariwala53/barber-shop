import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <div className="w-full mx-auto mt-10 px-10">
      <h1 className="text-[20px] font-bold  text-center">Book Your Appointment</h1>
      <BookingForm />
    </div>
  );
}