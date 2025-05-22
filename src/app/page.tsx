import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-[20px] font-bold mb-6">Welcome to Barber Shop</h1>
      <Link
        href="/barbers"
        className="px-6 py-3 bg-blue-700 text-white rounded"
      >
        Book a Appointment
      </Link>
    </div>
  );
}
