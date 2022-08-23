import { useCallback } from "react"
import { useAppDispatch } from "state"
import { setTheme } from "./reducer"
import { Theme } from "./types"

export const useSetTheme = (theme: Theme) => {
  const dispatch = useAppDispatch()
  return useCallback(() => dispatch(setTheme(theme)), [dispatch, theme])
}
