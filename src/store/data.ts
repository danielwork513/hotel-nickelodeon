import { create } from "zustand"

interface Data {
  nombre: string
  email: string
  telefono: string
  suiteName: string
  diaReserva: string
  cantidadDias: string
  cantidadHabitaciones: string
  diaSalida: string
  cantidadAdultos: string
  cantidadNinos: string
  precioTotal: string
}

type DataStore = {
  data: Data,
  setData: (data: Data) => void
}

export const useDataStore = create<DataStore>((set) => ({
  data: {
    nombre: "",
    email: "",
    telefono: "",
    suiteName: "",
    diaReserva: "",
    cantidadDias: "",
    cantidadHabitaciones: "",
    diaSalida: "",
    cantidadAdultos: "",
    cantidadNinos: "",
    precioTotal: "",
  },
  setData: (data: Data) => set({ data }),
}))


export function setAppDataNombre(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, nombre: data })
}

export function setAppDataEmail(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, email: data })
}

export function setAppDataTelefono(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, telefono: data })
}

export function setAppDataSuiteName(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, suiteName: data })
}

export function setAppDataDiaReserva(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, diaReserva: data })
}

export function setAppDataCantidadDias(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, cantidadDias: data })
}

export function setAppDataCantidadHabitaciones(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, cantidadHabitaciones: data })
}

export function setAppDataDiaSalida(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, diaSalida: data })
}

export function setAppDataCantidadAdultos(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, cantidadAdultos: data })
}

export function setAppDataCantidadNinos(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, cantidadNinos: data })
}

export function setAppDataPrecioTotal(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, precioTotal: data })
}

export function setAppDataReset() {
  useDataStore.getState().setData({
    nombre: "",
    email: "",
    telefono: "",
    suiteName: "",
    diaReserva: "",
    cantidadDias: "",
    cantidadHabitaciones: "",
    diaSalida: "",
    cantidadAdultos: "",
    cantidadNinos: "",
    precioTotal: "",
  })
}
