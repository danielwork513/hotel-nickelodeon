import { setAppDataReset, useDataStore } from "@/store/data"
import { setAppDataStep } from "@/store/steps"

export default function SuccessStep() {
  const { data } = useDataStore()
  const {
    nombre,
    suiteName,
    cantidadDias,
    cantidadHabitaciones
  } = data

  const suites = [
    "Swim Up Oceanfront King Suite - $10,200 x noche",
    "Swim Up Oceanfront Queen Suite - $9,200 x noche",
  ]

  // calcular el precio de cada suite
  const precio = suiteName === suites[0] ? 10200 : 9200

  // calcular el precio total
  const precioTotal = precio * parseInt(cantidadDias) * parseInt(cantidadHabitaciones)

  // convertirlo a moneda local
  const precioLocal = precioTotal.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return (
    <>
      <h3 className="font-bold md:text-3xl text-xl mb-4">
        Estimado(a): {nombre}
      </h3>

      <div className="bg-neutral-100 rounded-xl p-4 md:p-8 shadow-xl border border-orange-400">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Ficha de pago</h2>

        <div className="p-4 border border-neutral-400 rounded-md 
      [&>div]:my-2 [&>div>span]:text-black [&>div>span]:font-bold">

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Monto a pagar:
            {<span>{precioLocal} MXN</span>}
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            CLABE interbancaria:
            <span>0000 0000 0000 0000 00</span>
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Institucion bancaria:
            <span>STP</span>
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Beneficiario:
            <span>Nombre del beneficiario</span>
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Concepto de pago:
            <span>CONCEPTO</span>
          </div>
        </div>

        <div
          className="p-3 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center mt-4 cursor-pointer active:ring-orange-500 ring ring-transparent"
          onClick={() => {
            setAppDataReset()
            setAppDataStep()
          }}
        >
          Finalizar
        </div>

        <div className="text-red-600 p-4 flex gap-3 items-center mt-3 rounded-md">
          <p className="font-bold text-sm md:text-base">
            NOTA: Una vez realizado el pago mande su comprobante de pago ó captura de pantalla al correo ejemplo@ejemplo.com
          </p>
        </div>
      </div>
    </>
  )
}
