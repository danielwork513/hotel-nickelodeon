import Footer from "@/components/Footer";
import Hero from "@/pages/Home/Hero";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Hero />
      <Background />
      <main className="flex w-full">
        <div className="flex flex-col w-full max-w-6xl  mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}