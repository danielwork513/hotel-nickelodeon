import ReserveButton from "@/components/ReserveButton";
import { ISuite, suites } from "@/data/suites";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SuiteDetailPage() {
  const [suite, setSuite] = useState<null | ISuite>(null)
  const [selectedImage, setSelectedImage] = useState(1)

  // recuperar el parámetro de la URL
  const { name } = useParams()

  // quitar guiones a la URL y remplazarlos por espacios
  const suiteName = name?.replace(/-/g, " ")

  useEffect(() => {
    const suiteData = suites.find((suite) => suite.name === suiteName)
    if (!suiteData) return
    setSuite(suiteData)
  }, [name])

  return (
    <SecondaryLayout>
      <main className="flex flex-col mt-32 mb-20">
        <div className="flex flex-col md:flex-row gap-5 md:gap-16">

          <div className="flex w-full md:w-6/12">
            <div className="grid gap-2 md:gap-4">
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  className=""
                  src={`/suites/${name}/${selectedImage}.jpg`}
                  alt={suite?.name}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {[1, 2, 3].map((index) => (
                  <div
                    className={cn(
                      "rounded-xl overflow-hidden border-2 p-1 border-transparent cursor-pointer",
                      selectedImage === index && "border-orange-600"
                    )}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      className="hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                      src={`/suites/${name}/${index}.jpg`}
                      alt={suite?.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-full md:w-6/12">
            <div>
              <h3 className="text-3xl md:text-5xl font-black mb-2">{suite?.name}</h3>
              <h4 className="text-xl md:text-3xl font-extrabold text-orange-600">
                El espacio perfecto para tu estadía
              </h4>
            </div>
            <p className="text-base md:text-lg leading-8 text-pretty mb-4">
              {suite?.caracteristics}
            </p>

            <ReserveButton />
          </div>

        </div>

        <div className="my-8 md:my-12">
          <p className="text-xl font-bold">Caracteriaticas de todas las habitaciones y suites</p>
          <ul className="flex flex-wrap gap-2 md:gap-4 mt-5">
            <li className="feature">Experiencias Gourmet</li>
            <li className="feature">Acceso preferencial ilimitado a Aquanick™</li>
            <li className="feature">Piscinas infinitas</li>
            <li className="feature">Aire acondicionado</li>
            <li className="feature">2 Smart TV</li>
            <li className="feature">2 baños completos</li>
            <li className="feature">Radio Bluetooth / Despertador</li>
            <li className="feature">Caja de Seguridad</li>
            <li className="feature">Kit de comodidades</li>
            <li className="feature">Minibar surtido una vez al día</li>
            <li className="feature">Cafetera</li>
            <li className="feature">Teléfono de marcación directa</li>
            <li className="feature">Batas y pantuflas de lujo</li>
            <li className="feature">Baños con lavamanos doble</li>
            <li className="feature">Bañera independiente</li>
            <li className="feature">Ducha con efecto de lluvia</li>
            <li className="feature">Secador de pelo</li>
            <li className="feature">Espejo de vanidad</li>
            <li className="feature">Mesa para planchar</li>
            <li className="feature">Servicio a la habitación las 24 horas</li>
            <li className="feature">Balcón / terraza de gran tamaño</li>
            <li className="feature">Conexión inalámbrica a internet</li>
          </ul>
        </div>

        <div className="mb-4 md:mb-12">
          <p className="text-xl font-bold">Servicion Incluidos para tu bebe</p>
          <ul className="flex flex-wrap gap-2 md:gap-4 mt-5">
            <li className="feature">Comida</li>
            <li className="feature">Cunas</li>
            <li className="feature">Mesas para cambiar</li>
            <li className="feature">Monitores</li>
            <li className="feature">Batas</li>
            <li className="feature">Calentador de biberon</li>
          </ul>
        </div>
      </main>
    </SecondaryLayout>
  )
}
