import {Page} from './page.interface'

export interface Lesson {
  readonly index: number
  readonly name: string
  readonly lessonType: string // Vorlesung, Übung, Video, Summmary ...
  readonly pages: [Page]
}