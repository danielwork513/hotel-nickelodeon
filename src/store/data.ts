import { create } from "zustand"

interface Data {
  nombre: string
  apellidos: string
}

type DataStore = {
  data: Data,
  setData: (data: Data) => void
}

export const useDataStore = create<DataStore>((set) => ({
  data: {
    nombre: "",
    apellidos: "",
  },
  setData: (data: Data) => set({ data }),
}))


export function setAppDataNombre(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, nombre: data })
}

export function setAppDataApellidos(data: string) {
  useDataStore.getState().setData({ ...useDataStore.getState().data, apellidos: data })
}

export function setAppDataReset() {
  useDataStore.getState().setData({
    nombre: "",
    apellidos: "",
  })
}
