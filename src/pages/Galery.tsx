import SecondaryLayout from "@/layouts/SecondaryLayout";
import "@/styles/galery.css";

export default function GaleryPage() {
  return (
    <SecondaryLayout>
      <main className="py-20 md:pt-40">
        {(new Array(45)).fill(0).map((_, index) => (
          <div
            key={index}
            className="galery-item"
          >
            <img
              src={`/galery/${index + 1}.jpg`}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-md duration-300 transform hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </main>
    </SecondaryLayout>
  )
}