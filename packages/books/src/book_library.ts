import { getTitleByInfo, printInfo } from '@cat/utils'

import { Book } from './utils/interfaces'

export class BookLibrary {
  public items: Array<Book>

  constructor(items: Array<Book> = []) {
    this.items = items
  }

  add(book: Book): void {
    this.items.push(book)
  }

  listByAuthor(author: string) {
    const titlesByAuthor: string[] = getTitleByInfo(author, this.items)
    return printInfo('author', author, 'books', titlesByAuthor)
  }
}
