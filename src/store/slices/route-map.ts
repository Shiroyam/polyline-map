import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RouteMap } from "config"
import { RouteResults } from "types"

interface State {
  loading: boolean
  succuss: boolean
  error: null
  response: RouteResults
}

const initialState: State = {
  loading: false,
  succuss: false,
  error: null,
  response: {
    code: "",
    routes: [],
    waypoints: [],
  },
}

const routeMap = createSlice({
  name: "route-map",
  initialState,
  reducers: {
    fetchData: (state, { payload }: PayloadAction<RouteMap>) => {
      state.loading = true
      state.succuss = false
      state.error = null
    },
    fetchDataSuccess: (state, { payload }: PayloadAction<RouteResults>) => {
      state.loading = false
      state.succuss = true
      state.error = null
      state.response = payload
    },
    fetchDataFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { reducer: routeMapReducer, actions: routeMapActions } = routeMap
