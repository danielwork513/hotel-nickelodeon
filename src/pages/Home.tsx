import { suites } from "@/data/suites";
import MainLayout from "@/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <main>
        <section className="flex justify-between w-full pt-12">
          <img className="w-5/12" src="/Galeria-1-1.webp" alt="" />
          <div className="px-14">
            <p className="text-orange-600 text-xl font-semibold mb-3">
              NICKELODEON™ HOTELS & RESORTS
            </p>
            <h2 className="text-4xl font-extrabold text-balance">
              RESERVA TUS PRÓXIMAS VACACIONES FAMILIARES
            </h2>
            <p className="text-pretty mt-8 leading-7 text-lg">
              ¡Aumenta el nivel de tus vacaciones familiares! Acompaña a Bob Esponja en Riviera Maya en México, al igual que Leonardo, Raphael, Donatello, Michelangelo y todos tus personajes favoritos de Nickelodeon™, con entretenimiento exclusivo, la mejor diversión en nuestro parque acuático Aqua Nick, experiencias temáticas y mucho más. Nickelodeon™ Hotels & Resorts Riviera Maya está diseñado exclusivamente para las familias que disfrutan de una experiencia de vacaciones premium con el toque de diversión de Nickelodeon™. Bienvenido a las mejores vacaciones familiares en la playa.
            </p>
          </div>
        </section>

        <div className="flex w-full items-center justify-center mt-4">
          <img src="/Banner.webp" alt="" />
        </div>

        <section className="my-20" id="habitaciones">
          <h3 className="text-5xl font-black mb-2">Habitaciones</h3>
          <h4 className="text-3xl font-extrabold mb-12 text-orange-600">
            El espacio perfecto para tu estadía
          </h4>

          <div className="grid grid-cols-3 gap-4 gap-x-7">
            {suites.map((suite) => (
              <img
                key={suite.id}
                className="w-full h-68 object-cover rounded-xl"
                src={suite.image}
                alt={suite.name}
              />
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  )
}
