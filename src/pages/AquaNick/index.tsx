import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "./Hero"
import Background from "@/components/Background"

export default function AquaNick() {
  return (
    <>
      <Navbar />
      <Hero />
      <Background />
      <main className="flex w-full">
        <div className="flex flex-col w-full max-w-6xl mx-auto">
          <main className="flex flex-col text-base md:text-lg leading-relaxed">
            <p>
              Diversión increíble para toda la familia, es la experiencia cuando visita el primer parque Aqua Nick en América del Norte. Ubicado en uno de los destinos más paradisíacos del mundo, la Riviera Maya, Aqua Nick es el lugar perfecto para disfrutar de emociones salvajes y experiencias increíbles. Ya sea que esté siendo bañado en Slime con toda la familia, conquistando los vertiginosos toboganes en Soak Summit Tower o simplemente relajarse en un paseo por el Lazy River, encontrará formas ilimitadas de disfrutar de experiencias inolvidables en Aqua Nick®.
            </p>

            <p>
              Aqua Nick® es un extenso parque acuático temático Nickelodeon™ de seis acres rodeado de exuberantes jardines tropicales y más de 500 metros de aventuras y ríos lentos. Los huéspedes disfrutan de un increíble programa de entretenimiento para que sonrían durante todo el día. No se pierda la diversión en el mejor resort para familias en la Riviera Maya, ubicado a solo 17 millas al sur del Aeropuerto de Cancún. Las ofertas de bebidas y Gourmet Inclusive® de Aqua Nick incluyen Aqua Bite, nuestros puestos de comida al aire libre con todos sus bocadillos favoritos.
            </p>

            <p>
              Además, reserve su propia cabaña junto a la piscina con servicio de mayordomo para la mejor experiencia VIP, el parque cuenta con brazaletes que puede cargar con fondos para cubrir cualquier transacción durante su estadía.
            </p>

            <p>
              Los huéspedes de Nickelodeon™ Hotels& Resorts Riviera Maya disfrutan de acceso ilimitado de cortesía a Aqua Nick® que incluye acceso anticipado exclusivo durante su estadía.
            </p>

            <img src="/Aqua-N.webp" alt="" className=" my-5 md:my-16" />

            <p className=" my-5 md:my-10">
              Cada rincón de Aqua Nick está lleno de diversión, desde emocionantes sensaciones en la playa de Fondo de Bikini hasta increíbles aventuras acuáticas en la piscina de actividades, ¡No te puedes perder los encuentros con tus personajes favoritos y un súper evento de Slime!
            </p>
          </main>
        </div>
      </main>
      <Footer />
    </>

  )
}