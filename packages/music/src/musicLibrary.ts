import { Recording } from './utils/interfaces'
import { printInfo } from '@cat/shared-utils'

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

  listByTitles() {
    const titles: string[] = []
    this.items.forEach((item) => {
      titles.push(item.title)
    })

    return titles
  }

  listByArtist(artist: string) {
    const titlesByArtist: string[] = this.getTitleByInfo(artist)
    return printInfo('artist', artist, 'albums', titlesByArtist)
  }

  listByGenre(genre: string) {
    const titlesByGenre: string[] = this.getTitleByInfo(genre)
    return printInfo('genre', genre, 'albums', titlesByGenre)
  }

  private getTitleByInfo(info: string) {
    const titlesByInfo: string[] = []
    this.items.forEach((item) => {
      if (item.artist === info || item.genre === info) {
        titlesByInfo.push(item.title)
      }
    })
    return titlesByInfo
  }
}
