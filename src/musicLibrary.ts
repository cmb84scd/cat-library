import { Recording } from './utils/interfaces'

export class MusicLibrary {
  public items: Array<Recording>
  public genre: string
  public artist: string
  public title: string
  public tracks: number
  public length: number

  constructor(items: Array<Recording> = []) {
    this.items = items
    this.genre = ''
    this.artist = ''
    this.title = ''
    this.tracks = 0
    this.length = 0
  }

  add(
    genre: string,
    artist: string,
    title: string,
    tracks: number,
    length: number
  ): void {
    this.items.push({
      genre: genre,
      artist: artist,
      title: title,
      tracks: tracks,
      length: length,
    })
  }
}