import {Unit} from './unit.interface'

export interface Course {
  readonly title: string
  readonly subject: string
  readonly creator: string
  readonly units: [Unit]
}