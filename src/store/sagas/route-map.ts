import { put } from "redux-saga/effects"
import { routeMapActions } from "../slices"
import { routeMapAsync } from "services"
import { PayloadAction } from "@reduxjs/toolkit"
import { RouteMap } from "config"
import { RouteResults } from "types"

export function* fetchDataSaga({
  payload,
}: PayloadAction<RouteMap>): Generator {
  try {
    const data = yield routeMapAsync(payload.point)
    yield put(routeMapActions.fetchDataSuccess(data as RouteResults))
  } catch (error) {
    yield put(routeMapActions.fetchDataFailure(error))
  }
}
