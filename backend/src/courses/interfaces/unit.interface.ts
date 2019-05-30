import {Lesson} from './lesson.interface'

export interface Unit {
  readonly name: string
  readonly lessons: [Lesson]
}