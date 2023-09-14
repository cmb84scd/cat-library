import { BookLibrary } from '../book_library'

describe('Book Library class', () => {
  const bookLibrary = new BookLibrary()

  it('creates with an empty library', () => {
    expect(bookLibrary.items).toStrictEqual([])
  })

  it('adds a book to the library', () => {
    bookLibrary.add('Fiction', 'Best Author', 'Best TS Practices')
    expect(bookLibrary.items).toStrictEqual([
      { genre: 'Fiction', author: 'Best Author', title: 'Best TS Practices' },
    ])
  })

  describe('Getting data from the book library', () => {
    const bookLibrary1 = new BookLibrary()
    bookLibrary1.add('Fiction', 'Best Author', 'Best TS Practices')
    bookLibrary1.add('Fiction', 'Best Author', 'Some TS Stuff')
    bookLibrary1.add('Maths', 'Math Nerd', 'Simple Maths')
    bookLibrary1.add('Tech', 'Tech Nerd', 'Coding Practices')

    it('returns the titles of all the books in the library', () => {
      expect(bookLibrary1.listByTitles()).toStrictEqual([
        'Best TS Practices',
        'Some TS Stuff',
        'Simple Maths',
        'Coding Practices',
      ])
    })

    it('returns all the titles of an author in the library', () => {
      expect(bookLibrary1.listByAuthor('Best Author')).toEqual(
        'For author Best Author you have the following books in your library:\n  * Best TS Practices\n  * Some TS Stuff',
      )
    })

    it('returns all the titles of a genre in the library', () => {
      expect(bookLibrary1.listByGenre('Fiction')).toEqual(
        'For genre Fiction you have the following books in your library:\n  * Best TS Practices\n  * Some TS Stuff',
      )
    })
  })
})
