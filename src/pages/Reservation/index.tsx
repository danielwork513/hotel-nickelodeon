import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { APP_STATUS, useStepsStore } from "@/store/steps";
import Hero from "./Hero";
import DataStep from "./steps/DataStep";
import SuccessStep from "./steps/SuccessStep";
import TimeStep from "./steps/TimeStep";

export default function ReservationPage() {
  const { status } = useStepsStore()

  return (
    <>
      <Navbar />
      <Hero />
      <Background />
      <main className="flex w-full">
        <div className="flex flex-col w-full max-w-3xl mx-auto mb-8">
          {status === APP_STATUS.DATA_STEP && (
            <DataStep />
          )}
          {status === APP_STATUS.TIME_STEP && (
            <TimeStep />
          )}
          {status === APP_STATUS.SUCCESS_STEP && (
            <SuccessStep />
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
