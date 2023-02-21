import { MusicLibrary } from "../musicLibrary"

describe('Music Library class', () => {
  const musicLibrary = new MusicLibrary()
  it('creates with an empty library', () => {
    expect(musicLibrary.items).toStrictEqual([])
  })
})
