import { cn } from "@/lib/utils"
import ReserveButton from "./ReserveButton"

const linkStyles = "text-lg hover:scale-110 transition-transform duration-500 hover:underline underline-offset-2 hover:text-orange-600 hover:bg-white/30 p-5 py-1.5 rounded-xl"

export default function Navbar() {
  return (
    <header className="flex w-full relative">
      <nav className="fixed z-20 top-8 left-8 right-8 flex items-center justify-between w-full max-w-7xl mx-auto bg-neutral-800/20 backdrop-blur-xl ring-4 ring-orange-800/30 p-2 px-10 rounded-full">
        <div>
          <img
            className="w-28 h-auto"
            src="/Nickelodeon-Hotels-Resort-Logo.webp" alt="logo" />
        </div>
        <div>
          <ul className="flex items-center gap-1">
            <a
              className={cn(
                linkStyles
              )}
              href="/">Inicio</a>
            <a
              className={cn(
                linkStyles
              )}
              href="/#habitaciones">Habitaciones</a>
            <a
              className={cn(
                linkStyles
              )}
              href="/aqua-nick">Aqua Nick</a>
            <a
              className={cn(
                linkStyles
              )}
              href="/galery">Galeria</a>
          </ul>
        </div>
        <div>
          <ReserveButton />
        </div>
      </nav>
    </header>
  )
}
