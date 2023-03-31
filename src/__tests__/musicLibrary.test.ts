import { MusicLibrary } from '../musicLibrary'

describe('Music Library class', () => {
  const musicLibrary = new MusicLibrary()

  beforeEach(() => {
    musicLibrary.items = []
  })

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

  it('returns the titles of all the items in the library', () => {
    musicLibrary.add('Country', 'Top band', 'Top country hits', 12, 60)
    musicLibrary.add('Dance', 'Dance band', 'Best dances', 12, 60)
    expect(musicLibrary.list_by_titles()).toStrictEqual([
      'Top country hits',
      'Best dances',
    ])
  })

  it('returns all the titles of an artist in the library', () => {
    musicLibrary.add('Country', 'Top band', 'Top country hits', 12, 60)
    musicLibrary.add('Country', 'Top band', 'Classic country', 12, 60)
    musicLibrary.add('Dance', 'Dance band', 'Best dances', 12, 60)
    musicLibrary.add('Jazz', 'JazziB', 'Top jazz hits', 12, 60)
    expect(musicLibrary.list_by_artist('Top band')).toEqual(
      'For artist Top band you have the following albums in your library:\n  * Top country hits\n  * Classic country'
    )
  })
})
