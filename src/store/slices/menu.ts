import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ROUTE_MAP } from "config"

const menu = createSlice({
  name: "menu",
  initialState: {
    route: ROUTE_MAP,
    routeActive: ROUTE_MAP[0],
  },
  reducers: {
    onChangeRoute: (state, { payload }: PayloadAction<number>) => {
      state.routeActive = state.route[payload]
    },
  },
})

export const { reducer: menuReducer, actions: menuActions } = menu
