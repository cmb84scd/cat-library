import { MusicLibrary } from "../musicLibrary"

describe('Music Library class', () => {
  const musicLibrary = new MusicLibrary()
  it('creates with an empty library', () => {
    expect(musicLibrary.items).toStrictEqual([])
  })

  it('adds an item to the library', () => {
    musicLibrary.add('Country', 'Top band', 'Best dances', 12, 60)
    expect(musicLibrary.items).toStrictEqual([{ 'genre': 'Country', 'artist': 'Top band', 'title': 'Best dances', 'tracks': 12, 'length': 60 }])
  })
})
