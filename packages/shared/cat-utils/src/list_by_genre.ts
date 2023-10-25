import { getTitleByInfo } from './get_title_by_info'
import { printInfo, type Item } from './print_info'

export const listByGenre = (
  genre: string,
  item: Item,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Record<string, any>[],
) => {
  const titlesByGenre: string[] = getTitleByInfo(genre, items)
  return printInfo('genre', genre, item, titlesByGenre)
}
