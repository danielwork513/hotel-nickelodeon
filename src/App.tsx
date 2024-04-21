import { Route, Routes } from "react-router-dom"
import AquaNick from "./pages/AquaNick"
import GaleryPage from "./pages/Galery"
import HomePage from "./pages/Home"
import NotFoundPage from "./pages/NotFound"
import ReservationPage from "./pages/Reservation"
import SuitePage from "./pages/Suite"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="reservacion" element={<ReservationPage />} />
      <Route path="galery" element={<GaleryPage />} />
      <Route path="aqua-nick" element={<AquaNick />} />
      <Route path="suite/:name" element={<SuitePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
