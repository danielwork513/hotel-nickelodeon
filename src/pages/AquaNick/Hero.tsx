export default function Hero() {
  return (
    <section className="flex justify-between gap-20 pl-16 pt-20 md:pt-40 font-bold mb-10 bg-blue-100 overflow-hidden">
      <h1 className="flex flex-col gap-8 justify-center items-center">
        <span className="text-6xl text-balance font-extrabold">
          Bienvenido!
        </span>
        <img src="aquanick-logo.webp" alt="" className="" />
      </h1>

      <video
        className="aspect-video w-9/12 h-96 object-cover rounded-tl-3xl -mr-11"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="AquaNick.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}