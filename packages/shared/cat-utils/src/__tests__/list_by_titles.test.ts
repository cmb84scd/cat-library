import * as factories from '../__factories__/test_librarys'
import { listByTitles } from '../list_by_titles'

describe('listByTitles function', () => {
  it('returns a list of titles of the items in the book library', () => {
    const testLibrary = factories.testBookLibrary
    expect(listByTitles(testLibrary)).toEqual([
      'Best TS Practices',
      'Some TS Stuff',
      'Simple Maths',
      'Coding Practices',
    ])
  })

  it('returns a list of titles of the items in the music library', () => {
    const testLibrary = factories.testMusicLibrary
    expect(listByTitles(testLibrary)).toEqual([
      'Top country hits',
      'Classic country',
      'Best dances',
      'Top jazz hits',
    ])
  })
})
