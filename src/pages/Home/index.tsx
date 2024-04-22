import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";
import bigKakunaSuite from "@/assets/Big-Kakuna-Suite.webp";
import lairSuite from "@/assets/Lair-Suite.webp";
import pineappleSuite from "@/assets/The-Pineapple-Suite.webp";

export default function HomePage() {
  return (
    <MainLayout>
      <main className="flex flex-col">
        <section className="flex flex-col md:flex-row justify-between w-full pt-6 md:pt-12">
          <img className="w-full md:w-5/12 md:mb-0 mb-4" src="/Galeria-1-1.webp" alt="" />
          <div className="md:px-14">
            <p className="text-orange-600 text-base md:text-xl font-semibold mb-3">
              NICKELODEON™ HOTELS & RESORTS
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-balance">
              RESERVA TUS PRÓXIMAS VACACIONES FAMILIARES
            </h2>
            <p className="text-pretty mt-8 leading-7 text-base md:text-lg">
              ¡Aumenta el nivel de tus vacaciones familiares! Acompaña a Bob Esponja en Riviera Maya en México, al igual que Leonardo, Raphael, Donatello, Michelangelo y todos tus personajes favoritos de Nickelodeon™, con entretenimiento exclusivo, la mejor diversión en nuestro parque acuático Aqua Nick, experiencias temáticas y mucho más. Nickelodeon™ Hotels & Resorts Riviera Maya está diseñado exclusivamente para las familias que disfrutan de una experiencia de vacaciones premium con el toque de diversión de Nickelodeon™. Bienvenido a las mejores vacaciones familiares en la playa.
            </p>
          </div>
        </section>

        <div className="flex w-full items-center justify-center mt-4">
          <img src="/Banner.webp" alt="" />
        </div>

        <section className="my-10 md:my-20" id="habitaciones">
          <h3 className="text-2xl md:text-5xl font-black mb-4">
            JUEGO SIN FIN, TODO EL DIA, ¡TODO INCLUIDO!
          </h3>
          <h4 className="text-lg md:text-3xl font-bold md:font-extrabold mb-12 text-orange-600">
            DISFRUTA DE UN MUNDO LLENO DE DIVERSIÓN FAMILIAR EN NICKELODEON HOTELS & RESORTS RIVIERA MAYA.
          </h4>

          <div className="grid">
            <video
              className=" aspect-video object-cover rounded-xl"
              loop
              autoPlay
              muted
            >
              <source src="Nickelodeon.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-between w-full pt-12">
          <img
            className="w-full md:w-6/12 rounded-xl object-cover md:mb-0 mb-4"
            src="/a.webp"
            alt=""
          />
          <div className="md:px-14">
            <p className="text-orange-600 text-lg md:text-xl font-semibold mb-3">
              NICKELODEON™ HOTELS & RESORTS
            </p>
            <h2 className="text-xl md:text-3xl font-extrabold text-balance">
              CREA RECUERDOS ÚNICOS CON NICKELODEON™
            </h2>
            <p className="text-pretty mt-8 leading-7 text-base md:text-lg">
              En el primer resort Nickelodeon™ de México, con increíbles experiencias todo incluido que ofrecen:
            </p>
            <ul className="list-disc text-base md:text-lg mt-3 text-neutral-800 grid gap-3">
              <li>
                <span className="font-bold text-orange-600">Todas las suites Swim-up frente al mar:</span>
                Diseñadas para familias de cinco con dos baños.
              </li>
              <li>
                <span className="font-bold text-orange-600">Aqua Nick®:</span>
                La mejor diversión en el agua como nunca lo habías visto (Más de 20 toboganes).
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-between w-full md:pt-6">
          <div className="md:pr-14">
            <ul className="list-disc text-base md:text-lg mt-3 text-neutral-800 grid gap-3">
              <li>
                <span className="font-bold text-orange-600">Nickelodeon™ Place:</span>
                Experiencias con los personajes y entretenimiento para todas las edades (20 de tus personajes favoritos)..
              </li>
              <li>
                Nickelodeon™ Fun con experiencias <span className="font-bold text-orange-600">Karisma Gourmet Inclusive®</span> de clase mundial: Todo incluido, lleno de diversión.
              </li>
              <li>
                <span className="font-bold text-orange-600">Juega por Días:</span>
                Nuestro Club Nick (Un increíble lugar de reunión solo para tus hijos), Plaza Orange (Disfruta de la mejor diversión con fiestas de baile), estupendas experiencias de teatro, ¡Slime! y mucho más.
              </li>
              <li>
                <span className="font-bold text-orange-600">Lujo Cinco Estrellas: </span>
                Experimente la alegría y la cálida hospitalidad que hacen de México un destino único.
              </li>
            </ul>
          </div>
          <img
            className="w-full md:w-6/12 rounded-xl object-cover md:mt-0 mt-4"
            src="/b.webp"
            alt=""
          />
        </section>

        <section className="my-14 md:my-20" id="habitaciones">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black mb-2">HABITACIONES</h3>
              <h4 className="text-xl md:text-3xl font-bold md:font-extrabold md:mb-12 mb-5 text-orange-600">
                El espacio perfecto para tu estadía
              </h4>
            </div>
            <div>
              <Link to="/suites" className="text-base md:text-lg text-orange-600 font-bold bg-neutral-200 rounded-md hover:bg-neutral-300 p-2 md:p-4">
                Ver todas las habitaciones
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-x-7">
            <img
              className="w-full h-68 object-cover rounded-xl"
              src={bigKakunaSuite}
              alt="Big Kakuna Suite"
            />
            <img
              className="w-full h-68 object-cover rounded-xl"
              src={lairSuite}
              alt="Lair Suite"
            />
            <img
              className="w-full h-68 object-cover rounded-xl"
              src={pineappleSuite}
              alt="The Pineapple Suite"
            />
          </div>
        </section>
      </main>
    </MainLayout>
  )
}
