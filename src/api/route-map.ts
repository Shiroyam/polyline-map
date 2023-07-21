import { AxiosPromise } from "axios"
import { apiInstance } from "./base"
import { LatLngExpression } from "leaflet"
import { RouteResults } from "types"

export const getRouteMap = (
  point: LatLngExpression[]
): AxiosPromise<RouteResults> => {
  const urlRoute = () => point.map((value) => `${value};`)

  const path = urlRoute().join("").slice(0, -1)

  return apiInstance.get(`/route/v1/driving/${path}`)
}
