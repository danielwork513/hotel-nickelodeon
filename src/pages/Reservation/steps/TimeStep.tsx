import {
  Select, SelectContent,
  SelectGroup, SelectItem,
  SelectLabel, SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { setAppSuccessStep } from "@/store/steps"
import { setAppDataSuiteName } from "@/store/data"
import { Textarea } from "@/components/ui/textarea"

export default function TimeStep() {
  const [suite, setSuite] = useState("")
  const [message, setMessage] = useState("")

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
      <div className="flex flex-col gap-2">
        <span>Seleccionar Habitacion</span>
        <Select
          onValueChange={(value) => {
            setSuite(value)
          }}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccione la hora de la cita" />
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
          disabled={!suite}
          onClick={() => {
            setAppSuccessStep()
            setAppDataSuiteName(suite)
          }}
          className="px-10 bg-green-700 py-6 text-base font-bold"
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}