type Who = 'genre' | 'artist'
type Item = 'albums'

export const printInfo = (
  who: Who,
  name: string,
  item: Item,
  arr: string[]
) => {
  return `For ${who} ${name} you have the following ${item} in your library:\n  * ${arr.join(
    '\n  * '
  )}`
}
