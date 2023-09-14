import { printInfo } from '@cat/utils'
import { Book } from './utils/interfaces'

export class BookLibrary {
  public items: Array<Book>
  public genre: string
  public author: string
  public title: string

  constructor(items: Array<Book> = []) {
    this.items = items
    this.genre = ''
    this.author = ''
    this.title = ''
  }

  add(genre: string, author: string, title: string): void {
    this.items.push({ genre: genre, author: author, title: title })
  }

  listByTitles() {
    const titles: string[] = []
    this.items.forEach((item) => {
      titles.push(item.title)
    })

    return titles
  }

  listByAuthor(author: string) {
    const titlesByAuthor: string[] = this.getTitleByInfo(author)
    return printInfo('author', author, 'books', titlesByAuthor)
  }

  listByGenre(genre: string) {
    const titlesByGenre: string[] = this.getTitleByInfo(genre)
    return printInfo('genre', genre, 'books', titlesByGenre)
  }

  private getTitleByInfo(info: string) {
    const titlesByInfo: string[] = []
    this.items.forEach((item) => {
      if (item.author === info || item.genre === info) {
        titlesByInfo.push(item.title)
      }
    })
    return titlesByInfo
  }
}
