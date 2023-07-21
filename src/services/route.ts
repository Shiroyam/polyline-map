import { getRouteMap } from "api"
import { LatLngExpression } from "leaflet"

export async function routeMapAsync(point: LatLngExpression[]) {
  const { data } = await getRouteMap(point)

  return data
}
