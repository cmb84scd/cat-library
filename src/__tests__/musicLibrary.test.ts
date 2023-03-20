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
    expect(musicLibrary.list_titles()).toStrictEqual([
      'Top country hits',
      'Best dances',
    ])
  })
})
