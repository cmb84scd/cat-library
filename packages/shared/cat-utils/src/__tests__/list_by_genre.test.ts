import * as factories from '../__factories__/test_librarys'
import { listByGenre } from '../list_by_genre'

describe('listByGenre function', () => {
  it('returns all the titles of a genre in the book library', () => {
    const testLibrary = factories.testBookLibrary
    expect(listByGenre('Fiction', 'books', testLibrary)).toEqual(
      'For genre Fiction you have the following books in your library:\n  * Best TS Practices\n  * Some TS Stuff',
    )
  })

  it('returns all the titles of a genre in the music library', () => {
    const testLibrary = factories.testMusicLibrary
    expect(listByGenre('Country', 'albums', testLibrary)).toEqual(
      'For genre Country you have the following albums in your library:\n  * Top country hits\n  * Classic country',
    )
  })
})
