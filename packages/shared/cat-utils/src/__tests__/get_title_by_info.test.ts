import * as factories from '../__factories__/test_librarys'
import { getTitleByInfo } from '../get_title_by_info'

describe('getTitleByInfo function', () => {
  it('returns the titles of the given info in the book library', () => {
    const testLibrary = factories.testBookLibrary
    expect(getTitleByInfo('Fiction', testLibrary)).toEqual([
      'Best TS Practices',
      'Some TS Stuff',
    ])
  })

  it('returns the titles of the given info in the music library', () => {
    const testLibrary = factories.testMusicLibrary
    expect(getTitleByInfo('Dance', testLibrary)).toEqual(['Best dances'])
  })
})
