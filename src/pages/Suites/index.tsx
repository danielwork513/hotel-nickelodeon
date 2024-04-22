import { suites } from "@/data/suites";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import { Link } from "react-router-dom";

export default function SuitesPage() {
  return (
    <SecondaryLayout>
      <main className="flex flex-col pt-24 md:mt-32 mb-10 md:mb-20">
        <div>
          <h3 className="text-3xl md:text-5xl font-black mb-2">HABITACIONES</h3>
          <h4 className="text-xl md:text-3xl font-extrabold mb-6 md:mb-12 text-orange-600">
            El espacio perfecto para tu estadía
          </h4>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {suites.map((suite) => {
            // numero alatorio entre 1 y 3
            const random = Math.floor(Math.random() * 3) + 1
            const nameWithoutSpaces = suite.name.replace(/\s/g, "-")
            const pathImage = `/suites/${nameWithoutSpaces}/${random}.jpg`

            return (
              <div
                key={suite.id}
                className="flex flex-col border rounded-xl p-3 bg-neutral-200 justify-between gap-3"
              >
                <div className=" aspect-video overflow-hidden rounded-xl">
                  <img
                    className="hover:scale-105 transition-transform duration-500 ease-in-out"
                    src={pathImage}
                    alt={suite.name}
                  />
                </div>
                <h2 className="text-base md:text-lg font-bold mt-5">
                  {suite.name}
                </h2>
                <Link
                  to={`/suites/${nameWithoutSpaces}`}
                  className="bg-orange-500 p-2 rounded-xl flex justify-center items-center text-neutral-200 font-bold cursor-pointer hover:bg-orange-600 ">
                  Ver detalles
                </Link>
              </div>
            )
          })}
        </div>
      </main>
    </SecondaryLayout>
  )
}
