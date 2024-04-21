import ReserveButton from "../../components/ReserveButton"

export default function Hero() {
  return (
    <section className="flex justify-between gap-20 pl-16 pt-40 font-bold mb-10 bg-orange-100 overflow-hidden">
      <h1 className="flex flex-col gap-5">
        <span className="text-3xl">
          ENTRE MÁS HABITACIONES RESERVES
        </span>
        <span className="text-6xl text-balance font-extrabold">
          ¡MÁS BENEFICIOS PODRAS ELEGIR!
        </span>
        <span className="text-3xl">
          HASTA EL 35% DE DESCUENTO
        </span>
        <span className="text-2xl mb-8">
          reservaciones@hotelnickelodeon-rivieramaya.com
        </span>

        <ReserveButton />
      </h1>
      <img className="w-7/12 rounded-tl-3xl -mr-11" src="/Nick-0.webp" alt="" />
    </section>
  )
}