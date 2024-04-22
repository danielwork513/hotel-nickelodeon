import { create } from "zustand"

interface Data {
  nombre: string
  email: string
  telefono: string
  suiteName: string
  diaReserva: string
  cantidadDias: string
  cantidadAdultos: string
  cantidadNinos: string
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
    cantidadAdultos: "",
    cantidadNinos: "",
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

export function setAppDataCantidadAdultos(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, cantidadAdultos: data })
}

export function setAppDataCantidadNinos(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, cantidadNinos: data })
}

export function setAppDataReset() {
  useDataStore.getState().setData({
    nombre: "",
    email: "",
    telefono: "",
    suiteName: "",
    diaReserva: "",
    cantidadDias: "",
    cantidadAdultos: "",
    cantidadNinos: "",
  })
}
