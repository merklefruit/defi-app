import { createSlice } from "@reduxjs/toolkit"

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    theme: "dark",
  },
  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload
    },
  },
})

export const { setTheme } = applicationSlice.actions
export default applicationSlice.reducer
