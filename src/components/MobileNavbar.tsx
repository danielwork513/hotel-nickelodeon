import { cn } from "@/lib/utils";
import { AlignJustifyIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed z-20 top-4 left-4 right-4 rounded-2xl p-4 md:hidden bg-white/60 ring ring-orange-600/50 backdrop-blur-md flex flex-col gap-4">
      <nav className="flex justify-between items-center">
        <img
          className="w-20 h-auto"
          src="/Nickelodeon-Hotels-Resort-Logo.webp" alt="logo"
        />
        <div className=" flex gap-2 items-center">
          <Link
            to="/reservacion"
            className="p-2 bg-orange-600 text-white rounded-md"
          >
            Reserva
          </Link>
          <div
            className="p-2 flex justify-center items-center border border-neutral-700 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AlignJustifyIcon className="text-neutral-700" size={22} />
          </div>
        </div>
      </nav>
      {isOpen && (
        <nav className="grid gap-2">
          <Link
            className={cn(
              "text-base rounded-md bg-neutral-200 p-2 py-1.5 border border-neutral-400"
            )}
            to="/">Inicio</Link>
          <Link
            className={cn(
              "text-base rounded-md bg-neutral-200 p-2 py-1.5 border border-neutral-400"
            )}
            to="/suites">Habitaciones</Link>
          <Link
            className={cn(
              "text-base rounded-md bg-neutral-200 p-2 py-1.5 border border-neutral-400"
            )}
            to="/aqua-nick">Aqua Nick</Link>
          <Link
            className={cn(
              "text-base rounded-md bg-neutral-200 p-2 py-1.5 border border-neutral-400"
            )}
            to="/galery">Galeria</Link>
          <Link
            className={cn(
              "text-base uppercase rounded-md bg-orange-600 p-2 py-2.5 border border-orange-400 font-bold text-white"
            )}
            to="/reservar">Reservar Ahora!</Link>
        </nav>
      )}
    </header>
  )
}