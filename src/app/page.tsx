import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-cyan-100 text-gray-800 p-6">
      <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 drop-shadow-sm">
        Fennikka
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl mb-8 px-4">
        Authentic Lakshadweep products — from dried tuna and coconut shell crafts to fish pickle and traditional island sweets.
      </p>
      <button className="bg-green-700 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-green-800 transition">
        Explore Products
      </button>
    </main>
  );
}


