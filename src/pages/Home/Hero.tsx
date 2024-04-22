import ReserveButton from "../../components/ReserveButton"

export default function Hero() {
  return (
    <section className="flex relative justify-between gap-20 px-8 md:px-0 md:pl-16 pt-14 md:pt-40 font-bold md:mb-10 mb-0 pb-10 md:pb-0 bg-orange-100 overflow-hidden">
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
        className="md:w-7/12 md:-mr-11 md:block md:rounded-tl-3xl hidden"
        src="/Nick-0.webp"
        alt=""
      />

      {/* Mobile Image */}
      <img
        className="w-full absolute z-0 inset-0 h-full object-cover md:hidden"
        src="/Nick-0.webp"
        alt=""
      />

      <div
        className="w-full bg-white/60 absolute z-0 inset-0 h-full object-cover md:hidden"
      />
    </section>
  )
}