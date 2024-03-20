export type Tag =
  | "Product Design"
  | "Guesstimates"
  | "Product Strategy"
  | "Behavioral"
  | "Analytics"
  | "System Design"
  | "Technical"

export type Question = {
  id: string
  title: string
  tags: Tag[]
}

export type FilterOptions = {
  tags: Tag[]
}
