export type Coordinate = number[]
export type Polyline = string
export type StepManeuverTypes =
  | "turn"
  | "new name"
  | "depart"
  | "arrive"
  | "merge"
  | "ramp"
  | "on ramp"
  | "off ramp"
  | "fork"
  | "end of road"
  | "use lane"
  | "continue"
  | "roundabout"
  | "rotary"
  | "roundabout turn"
  | "notification"
  | "exit roundabout"
  | "exit rotary"
export type Indication =
  | "uturn"
  | "sharp right"
  | "right"
  | "slight rigth"
  | "straight"
  | "slight left"
  | "left"
  | "sharp left"

export interface LineString {
  type: "LineString"
  coordinates: Coordinate[]
}

export interface Waypoint {
  hint: string
  distance: number
  name: string
  location: Coordinate[]
}

export interface Annotation {
  distance: number[]
  duration: number[]
  datasources: number[]
  nodes: number[]
  weight: number[]
  speed: number[]
}

export interface Intersection {
  location: Coordinate
  bearings: number[]
  classes: string[]
  entry: string[]
  in: number
  out: number
  lanes: Lane
}

export interface Lane {
  indications: Indication[]
  valid: boolean
}

export interface StepManeuver {
  location: Coordinate
  bearing_before: number
  bearing_after: number
  type: StepManeuverTypes
  modifier: Indication
}

export interface RouteStep {
  distance: number
  duration: number
  geometry: Polyline | LineString
  weight: number
  name: string
  ref: string
  pronunciation: string
  destinations: string
  exits: string
  mode: string
  maneuver: StepManeuver
  intersections: Intersection[]
  rotary_name: string
  rotary_pronunciation: string
}

export interface RouteLeg {
  distance: number
  duration: number
  weight: number
  summary: string
  steps: RouteStep[]
  annotation: Annotation
}

export interface Route {
  distance: number
  duration: number
  geometry: string
  weight: number
  weight_name: string
  legs: RouteLeg[]
}

export interface RouteResults {
  code: string
  waypoints: Waypoint[]
  routes: Route[]
}
