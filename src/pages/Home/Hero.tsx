import ReserveButton from "@/components/ReserveButton";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'Nik-0.webp',
    'Nik-1.webp',
    'Nik-2.webp',
    'Nik-3.webp',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);


  return (
    <section className="flex relative justify-between gap-20 px-8 md:px-0 md:pl-16 pt-28 md:pt-40 font-bold md:mb-10 mb-0 pb-10 md:pb-0 bg-orange-100 overflow-hidden">
      <h1 className="flex flex-col gap-5 z-10">
        <span className="text-xl md:text-3xl">
          ENTRE MÁS HABITACIONES RESERVES
        </span>
        <span className="text-3xl md:text-6xl text-balance font-extrabold">
          ¡MÁS BENEFICIOS PODRAS ELEGIR!
        </span>
        <span className="text-xl md:text-3xl">
          HASTA EL 35% DE DESCUENTO
        </span>
        <span className="text-lg md:text-2xl mb-8">
          reservaciones@hotelnickelodeon-rivieramaya.com
        </span>

        <ReserveButton />
      </h1>

      {/* Desktop Image */}
      <img
        className={cn(
          "md:w-7/12 md:-mr-11 md:block md:rounded-tl-3xl hidden transition-all duration-500"
        )}
        src={images[imageIndex]}
        alt=""
      />

      {/* Mobile Image */}
      <img
        className="w-full absolute z-0 inset-0 h-full object-cover md:hidden"
        src={images[imageIndex]}
        alt=""
      />

      <div
        className="w-full bg-white/60 absolute z-0 inset-0 h-full object-cover md:hidden"
      />
    </section>
  )
}