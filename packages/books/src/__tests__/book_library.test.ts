import { BookLibrary } from '../book_library'

describe('Book Library class', () => {
  const bookLibrary = new BookLibrary()

  it('creates with an empty library', () => {
    expect(bookLibrary.items).toStrictEqual([])
  })

  it('adds a book to the library', () => {
    bookLibrary.add({
      genre: 'Fiction',
      author: 'Best Author',
      title: 'Best TS Practices',
    })
    expect(bookLibrary.items).toStrictEqual([
      { genre: 'Fiction', author: 'Best Author', title: 'Best TS Practices' },
    ])
  })

  describe('Getting data from the book library', () => {
    const bookLibrary1 = new BookLibrary()
    bookLibrary1.add({
      genre: 'Fiction',
      author: 'Best Author',
      title: 'Best TS Practices',
    })
    bookLibrary1.add({
      genre: 'Fiction',
      author: 'Best Author',
      title: 'Some TS Stuff',
    })
    bookLibrary1.add({
      genre: 'Maths',
      author: 'Math Nerd',
      title: 'Simple Maths',
    })
    bookLibrary1.add({
      genre: 'Tech',
      author: 'Tech Nerd',
      title: 'Coding Practices',
    })

    it('returns all the titles of an author in the library', () => {
      expect(bookLibrary1.listByAuthor('Best Author')).toEqual(
        'For author Best Author you have the following books in your library:\n  * Best TS Practices\n  * Some TS Stuff',
      )
    })
  })
})
