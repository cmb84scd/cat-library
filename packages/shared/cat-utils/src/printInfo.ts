/** The genre or artist. */
type Who = 'genre' | 'artist'
/** The type of item eg albums. */
type Item = 'albums'

/**
 * Accepts several arguments and returns a string containing a list of items
 * @param who The genre or artist. Type {@link Who}
 * @param name The name of the artist/band
 * @param item The type of item eg albums. Type {@link Item}
 * @param arr Array of items in the library
 * @returns A string with a list of items matching the criteria
 */
export const printInfo = (
  who: Who,
  name: string,
  item: Item,
  arr: string[],
) => {
  return `For ${who} ${name} you have the following ${item} in your library:\n  * ${arr.join(
    '\n  * ',
  )}`
}
