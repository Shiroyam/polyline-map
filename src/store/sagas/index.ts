import { takeEvery } from "redux-saga/effects"
import { fetchDataSaga } from "./route-map"

export function* watchSaga() {
  yield takeEvery("route-map/fetchData", fetchDataSaga)
}

function* rootSaga() {
  yield watchSaga()
}

export default rootSaga
