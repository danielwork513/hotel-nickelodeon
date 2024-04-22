export default function Hero() {
  return (
    <section className="relative flex justify-between items-center gap-20 md:pl-16 pt-20 pb-20 md:pb-0 md:pt-40 font-bold mb-10 bg-blue-100 overflow-hidden">

      <h1 className="flex flex-col gap-8 justify-center items-center z-10  mx-auto">
        <span className="text-4xl md:text-5xl text-balance font-extrabold">
          Bienvenido!
        </span>
        <img src="aquanick-logo.webp" alt="" className="w-10/12" />
      </h1>

      {/* Desktop Image */}
      <video
        className="aspect-video md:w-9/12 md:h-96 md:object-cover md:rounded-tl-3xl -mr-11 md:block hidden"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="AquaNick.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Image */}
      <video
        className="w-full h-full absolute z-0 inset-0 object-cover  md:hidden"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="AquaNick.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="w-full bg-white/60 absolute z-0 inset-0 h-full object-cover md:hidden"
      />
    </section>
  )
}
