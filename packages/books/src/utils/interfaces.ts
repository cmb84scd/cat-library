import { Genre } from '@cat/types'

export interface Author extends Genre {
  /** The person who wrote the book. */
  author: string
}

export interface Book extends Author {
  /** The title of the book. */
  title: string
}
