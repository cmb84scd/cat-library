import { MusicLibrary } from '../musicLibrary'

describe('Music Library class', () => {
  const musicLibrary = new MusicLibrary()

  it('creates with an empty library', () => {
    expect(musicLibrary.items).toStrictEqual([])
  })

  it('adds an item to the library', () => {
    musicLibrary.add('Country', 'Top band', 'Top country hits', 12, 60)
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
    musicLibrary1.add('Country', 'Top band', 'Top country hits', 12, 60)
    musicLibrary1.add('Country', 'Top band', 'Classic country', 12, 60)
    musicLibrary1.add('Dance', 'Dance band', 'Best dances', 12, 60)
    musicLibrary1.add('Jazz', 'JazziB', 'Top jazz hits', 12, 60)

    it('returns the titles of all the items in the library', () => {
      expect(musicLibrary1.listByTitles()).toStrictEqual([
        'Top country hits',
        'Classic country',
        'Best dances',
        'Top jazz hits',
      ])
    })

    it('returns all the titles of an artist in the library', () => {
      expect(musicLibrary1.listByArtist('Top band')).toEqual(
        'For artist Top band you have the following albums in your library:\n  * Top country hits\n  * Classic country',
      )
    })

    it('returns all the titles of an artist in the library', () => {
      expect(musicLibrary1.listByGenre('Country')).toEqual(
        'For genre Country you have the following albums in your library:\n  * Top country hits\n  * Classic country',
      )
    })
  })
})
