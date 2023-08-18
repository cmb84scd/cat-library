import { Genre } from '@cat/types'

export interface Band extends Genre {
  artist: string
}

export interface Recording extends Band {
  title: string
  tracks: number
  length: number
}
