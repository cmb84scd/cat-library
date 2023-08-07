export interface Genre {
  genre: string
}

export interface Band extends Genre {
  artist: string
}

export interface Recording extends Band {
  title: string
  tracks: number
  length: number
}
