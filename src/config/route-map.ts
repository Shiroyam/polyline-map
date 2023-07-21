import { LatLngExpression } from "leaflet"

export interface RouteMap {
  id: string
  title: string
  point: LatLngExpression[]
}

export const ROUTE_MAP: RouteMap[] = [
  {
    id: "0",
    title: "Маршрут №1",
    point: [
      [30.29496392, 59.84660399],
      [30.42423701, 59.82934196],
      [30.38064206, 59.83567701],
    ],
  },
  {
    id: "1",
    title: "Маршрут №2",
    point: [
      [30.42423701, 59.82934196],
      [30.41705607, 59.82761295],
      [30.29496392, 59.84660399],
    ],
  },
  {
    id: "2",
    title: "Маршрут №3",
    point: [
      [30.38064206, 59.83567701],
      [30.29496392, 59.84660399],
      [30.41705607, 59.82761295],
    ],
  },
]
