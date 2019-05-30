export interface Page {
  readonly type: string // image, text( caption, normal, subtext, listing ...)
  readonly font: string
  readonly fontSize: number
  readonly text: string
  readonly xOrientation: number
  readonly yOrientation: number
  readonly width: number
  readonly height: number
  readonly align: string
  readonly indent: number
  readonly columns: number
}