import { useEffect } from "react"
import { routeMapActions, useAppDispatch, useAppSelector } from "store"
import { MapContainer, Polyline, TileLayer, useMap } from "react-leaflet"
import { decode } from "@mapbox/polyline"
import styles from "./map.module.scss"
import "leaflet/dist/leaflet.css"

const limeOptions = { color: "lime" }

export const Map = () => {
  const dispatch = useAppDispatch()
  const menu = useAppSelector((state) => state.menu)

  useEffect(() => {
    dispatch(routeMapActions.fetchData(menu.routeActive))
  }, [dispatch, menu])

  return (
    <MapContainer
      className={styles.map}
      center={[59.84660399, 30.29496392]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <RouteMap />
    </MapContainer>
  )
}

const RouteMap = () => {
  const map = useMap()

  const dispatch = useAppDispatch()
  const menu = useAppSelector((state) => state.menu)
  const route = useAppSelector((state) => state.route)

  useEffect(() => {
    dispatch(routeMapActions.fetchData(menu.routeActive))
  }, [dispatch, menu])

  useEffect(() => {
    if (route.succuss) {
      const decoded = decode(route.response.routes[0].geometry)
      const lat = decoded[10][0]
      const lon = decoded[10][1]
      map.setView([lat, lon])
    }
  }, [map, route])

  return route.succuss ? (
    <Polyline
      pathOptions={limeOptions}
      positions={decode(route.response.routes[0].geometry)}
    />
  ) : null
}
