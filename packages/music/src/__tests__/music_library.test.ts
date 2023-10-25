import { MusicLibrary } from '../music_library'

describe('Music Library class', () => {
  const musicLibrary = new MusicLibrary()

  it('creates with an empty library', () => {
    expect(musicLibrary.items).toStrictEqual([])
  })

  it('adds an item to the library', () => {
    musicLibrary.add({
      genre: 'Country',
      artist: 'Top band',
      title: 'Top country hits',
      tracks: 12,
      length: 60,
    })
    expect(musicLibrary.items).toStrictEqual([
      {
        genre: 'Country',
        artist: 'Top band',
        title: 'Top country hits',
        tracks: 12,
        length: 60,
      },
    ])
  })

  describe('Getting data from the music library', () => {
    const musicLibrary1 = new MusicLibrary()
    musicLibrary1.add({
      genre: 'Country',
      artist: 'Top band',
      title: 'Top country hits',
      tracks: 12,
      length: 60,
    })
    musicLibrary1.add({
      genre: 'Country',
      artist: 'Top band',
      title: 'Classic country',
      tracks: 12,
      length: 60,
    })
    musicLibrary1.add({
      genre: 'Dance',
      artist: 'Dance band',
      title: 'Best dances',
      tracks: 12,
      length: 60,
    })
    musicLibrary1.add({
      genre: 'Jazz',
      artist: 'JazziB',
      title: 'Top jazz hits',
      tracks: 12,
      length: 60,
    })

    it('returns all the titles of an artist in the library', () => {
      expect(musicLibrary1.listByArtist('Top band')).toEqual(
        'For artist Top band you have the following albums in your library:\n  * Top country hits\n  * Classic country',
      )
    })
  })
})
