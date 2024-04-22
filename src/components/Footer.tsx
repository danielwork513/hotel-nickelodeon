export default function Footer() {
  return (
    <footer className="bg-neutral-800 flex w-full p-8 text-neutral-100">
      <div className="flex flex-col mx-auto w-full max-w-7xl">
        <div className="py-6">
          <span className="font-extrabold text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r text-balance 
          from-yellow-300
          via-green-600
          to-orange-600 
          bg-purple-300 mb-5">
            Vacaciona como lo sueñas
          </span>
        </div>
        <div className="border-t border-neutral-400 py-6">
          Copyright © 2024 Resort Familiar Riviera Maya - Hotel Nickelodeon
        </div>
      </div>
    </footer>
  )
}
