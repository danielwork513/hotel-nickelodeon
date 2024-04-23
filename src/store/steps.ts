import { create } from "zustand"

type StepsStore = {
  status: number,
  setStatus: (status: number) => void
}

export const APP_STATUS = {
  DATA_STEP: 0,
  TIME_STEP: 1,
  VERIFICATION_STEP: 2,
  SUCCESS_STEP: 3,
  ERROR: -1
}

export const useStepsStore = create<StepsStore>((set) => ({
  status: APP_STATUS.DATA_STEP,
  setStatus: (status: number) => set({ status }),
}))

export function setAppDataStep() {
  useStepsStore.getState().setStatus(APP_STATUS.DATA_STEP)
}

export function setAppTimeStep() {
  useStepsStore.getState().setStatus(APP_STATUS.TIME_STEP)
}

export function setAppVerificationStep() {
  useStepsStore.getState().setStatus(APP_STATUS.VERIFICATION_STEP)
}

export function setAppSuccessStep() {
  useStepsStore.getState().setStatus(APP_STATUS.SUCCESS_STEP)
}

export function setAppStatusError() {
  useStepsStore.getState().setStatus(APP_STATUS.ERROR)
}
