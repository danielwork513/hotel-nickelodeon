import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function SecondaryLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="flex w-full">
        <div className="flex flex-col w-full max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}