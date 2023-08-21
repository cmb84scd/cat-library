import { printInfo } from '../printInfo'

describe('Print info function', () => {
  it('returns a string with a list of particular items', () => {
    const testArr = ['Top country hits', 'Classic country']
    expect(printInfo('artist', 'An Artist', 'albums', testArr)).toEqual(
      'For artist An Artist you have the following albums in your library:\n  * Top country hits\n  * Classic country',
    )
  })
})
