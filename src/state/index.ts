import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

import application from "./application/reducer"

const store = configureStore({
  reducer: {
    application,
  },
  devTools: true,
})

export default store

type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
