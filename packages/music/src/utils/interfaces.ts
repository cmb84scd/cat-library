import { Genre } from '@cat/types'

export interface Band extends Genre {
  /** The artist who plays the album. */
  artist: string
}

export interface Recording extends Band {
  /** The title of the album. */
  title: string
  /** The number of tracks on the album. */
  tracks: number
  /** How long the album is in minutes. */
  length: number
}
