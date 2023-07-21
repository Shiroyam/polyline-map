import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { menuReducer, routeMapReducer } from "./slices"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  route: routeMapReducer,
  menu: menuReducer,
})

const storeSetup = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  })

export const store = storeSetup()

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof storeSetup>
export type AppDispatch = AppStore["dispatch"]
