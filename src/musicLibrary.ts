import { Recording } from './utils/interfaces'
import { printInfo } from './utils/printInfo'

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

  list_by_titles() {
    const titles: string[] = []
    this.items.forEach((item) => {
      titles.push(item.title)
    })

    return titles
  }

  list_by_artist(artist: string) {
    const titlesByArtist: string[] = []
    this.items.forEach((item) => {
      if (item.artist === artist) {
        titlesByArtist.push(item.title)
      }
    })
    console.log(titlesByArtist)
    return printInfo('artist', artist, titlesByArtist)
  }
}
