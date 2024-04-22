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
import { setAppDataDiaReserva, setAppDataSuiteName } from "@/store/data"
import { setAppSuccessStep } from "@/store/steps"
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { ArrowRight, CalendarIcon } from "lucide-react"
import { useState } from "react"

export default function TimeStep() {
  const [suite, setSuite] = useState("")
  const [message, setMessage] = useState("")
  const [date, setDate] = useState<Date>()

  const suites = [
    "Big Kahuna Suite",
    "Lair Suite",
    "Penthouse Swim Up Oceanfront Connecting Suite",
    "Penthouse Swim Up Oceanfront King Suite",
    "Penthouse Swim Up Oceanfront Queen Suite",
    "Swim Up Oceanfront Connecting Suite",
    "Swim Up Oceanfront King Suite",
    "Swim Up Oceanfront Pool Deck Level King Suite",
    "Swim Up Oceanfront Pool Deck Level Queen Suite",
    "Swim Up Oceanfront Queen Suite",
    "Swim Up Pool Deck Level Connecting Suite",
    "The Pineapple Suite"
  ]

  return (
    <div>
      <div className="flex flex-col gap-2 mt-3">
        <span>Fecha de Reserva</span>
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
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <span>Seleccionar Habitacion</span>
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
        <span>Mensaje o Comentario</span>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje o comentario"
        ></Textarea>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-end mt-10 gap-4">
        <Button
          disabled={!suite || !date}
          onClick={() => {
            setAppSuccessStep()
            setAppDataSuiteName(suite)
            setAppDataDiaReserva(format(date as Date, "EEEE dd \'de\' MMMM \'del\' yyyy", { locale: es }) as string)
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