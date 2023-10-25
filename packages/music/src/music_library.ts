import { getTitleByInfo, printInfo } from '@cat/utils'

import { Recording } from './utils/interfaces'

export class MusicLibrary {
  public items: Array<Recording>

  constructor(items: Array<Recording> = []) {
    this.items = items
  }

  add(recording: Recording): void {
    this.items.push(recording)
  }

  listByArtist(artist: string) {
    const titlesByArtist: string[] = getTitleByInfo(artist, this.items)
    return printInfo('artist', artist, 'albums', titlesByArtist)
  }
}
