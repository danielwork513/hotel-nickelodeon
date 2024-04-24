import { Separator } from "@/components/ui/separator"
import { useDataStore } from "@/store/data"
import { setAppSuccessStep } from "@/store/steps"

export default function VerificationStep() {
  const { data } = useDataStore()
  const {
    nombre,
    email,
    suiteName,
    diaReserva,
    diaSalida,
    cantidadDias,
    cantidadHabitaciones,
    cantidadAdultos,
    cantidadNinos,
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
      <div className="bg-neutral-100 rounded-xl p-4 md:p-8 shadow-xl border border-orange-400">
        <h2 className="text-xl md:text-3xl font-bold p-2 md:p-4 border border-neutral-400 rounded-t-md bg-blue-100">
          Verificacion de reservacion
        </h2>

        <div className="p-4 border border-neutral-400 rounded-md rounded-t-none 
      [&>div]:my-2 [&>div>span]:text-black [&>div>span]:font-bold">

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Nombre:
            {nombre && <span>{nombre}</span>}
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Correo Electronico:
            {email && <span>{email}</span>}
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Habitacion reservada:
            {suiteName && (
              <>
                {suiteName === suites[0] ? (
                  <span>Swim Up Oceanfront King Suite</span>
                ) : (
                  <span>Swim Up Oceanfront Queen Suite</span>
                )}
              </>
            )}
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Cantidad de habitaciones:
            {cantidadHabitaciones && <span>{cantidadHabitaciones}</span>}
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Dias de reservacion:
            {cantidadDias && <span>{cantidadDias}</span>}
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Fecha de entrada:
            {diaReserva && <span className="capitalize">{diaReserva}</span>}
          </div>

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
            Fecha de salida:
            {diaReserva && <span className="capitalize">{diaSalida}</span>}
          </div>

          <div className="flex gap-0 md:gap-3 flex-row">
            Cantidad de adultos:
            {cantidadAdultos && <span>{cantidadAdultos}</span>}
          </div>

          {parseInt(cantidadNinos) > 0 && (
            <div className="flex gap-0 md:gap-3 flex-row mb-3">
              Cantidad de niños:
              {cantidadNinos && <span>{cantidadNinos}</span>}
            </div>
          )}

          <Separator />

          <div className="flex gap-0 md:gap-3 md:flex-row flex-col mt-8">
            Monto a pagar:
            {<span>{precioLocal} MXN</span>}
          </div>
        </div>

        <div
          className="p-3 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center mt-4 cursor-pointer hover:bg-orange-500 active:ring-orange-500 ring ring-transparent"
          onClick={() => setAppSuccessStep()}
        >
          Ver Ficha de Pago
        </div>
      </div>
    </>
  )
}
