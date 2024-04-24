import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select, SelectContent,
  SelectGroup, SelectItem,
  SelectLabel, SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import {
  setAppDataCantidadAdultos,
  setAppDataCantidadDias,
  setAppDataCantidadHabitaciones,
  setAppDataCantidadNinos,
  setAppDataDiaReserva,
  setAppDataDiaSalida,
  setAppDataSuiteName
} from "@/store/data"
import { setAppVerificationStep } from "@/store/steps"
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { ArrowRight, CalendarIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function TimeStep() {
  const [suite, setSuite] = useState("")
  const [message, setMessage] = useState("")
  const [date, setDate] = useState<Date>()
  const [days, setDays] = useState("1")
  const [adults, setAdults] = useState("1")
  const [children, setChildren] = useState("0")

  const suites = [
    "Swim Up Oceanfront King Suite - $10,200 x noche",
    "Swim Up Oceanfront Queen Suite - $9,200 x noche",
  ]

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  const disabledDays = [
    {
      from: new Date(currentYear, currentMonth, currentDate.getDate() - 1),
      to: new Date(2024, 1, 0)
    }
  ];

  // En las habitaciones solo puede haber maximo dos adultos y dos niños
  // Si la cantidad de la suma de adultos y niños es mayor a 4, se aumenta la cantidad de habitaciones

  useEffect(() => {
    if (parseInt(adults) + parseInt(children) > 4) {
      setAppDataCantidadHabitaciones("2")
    } else {
      setAppDataCantidadHabitaciones("1")
    }
  }, [adults, children])

  return (
    <div>
      <div className="flex flex-col gap-2 mt-3">
        <span>Fecha de Reserva</span>
        <span className="text-sm text-orange-600">
          Entrada a las 03:00 PM y salida a las 12:00 AM
        </span>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "justify-start h-12 bg-neutral-100 border-orange-400",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? (
                format(date as Date, "EEEE dd \'de\' MMMM \'del\' yyyy", { locale: es }) as string
              ) : (
                <span>Elegir fecha</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              locale={es}
              disabled={disabledDays}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <span>Seleccionar Habitacion</span>
        <span className="text-sm text-orange-600">
          La cantidad maxima de personas por habitacion es 2 adultos y 2 niños, si la cantidad de personas es mayor a 4 se aumentara la cantidad de habitaciones
        </span>
        <Select
          onValueChange={(value) => {
            setSuite(value)
          }}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Suites Disponibes</SelectLabel>
              {suites.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <span>Cantidad de adultos</span>
        <Select
          onValueChange={(value) => {
            setAdults(value)
          }}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <span>Cantidad de niños</span>
        <Select
          onValueChange={(value) => {
            setChildren(value)
          }}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <span>Dias de hospedaje</span>
        <Select
          onValueChange={(value) => {
            setDays(value)
          }}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Selecciona los dias de hospedaje</SelectLabel>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <span>Mensaje o Comentario</span>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje o comentario"
        ></Textarea>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
        <Button
          disabled={!suite || !date || !days || !adults}
          onClick={() => {
            setAppVerificationStep()
            setAppDataSuiteName(suite)
            setAppDataCantidadDias(days)
            setAppDataCantidadAdultos(adults)
            setAppDataCantidadNinos(children)
            setAppDataDiaReserva(format(date as Date, "EEEE dd \'de\' MMMM \'del\' yyyy", { locale: es }) as string)

            if (!date) return

            const diaSalida = date?.getDate() + parseInt(days)
            setAppDataDiaSalida(format(new Date(date?.setDate(diaSalida)), "EEEE dd \'de\' MMMM \'del\' yyyy", { locale: es }) as string)
          }}
          className="px-10 bg-green-700 py-6 text-base font-bold"
        >
          Reservar Ahora
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}