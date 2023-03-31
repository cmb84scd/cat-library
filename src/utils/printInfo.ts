export const printInfo = (type: string, who: string, arr: string[]) => {
  return `For ${type} ${who} you have the following albums in your library:\n  * ${arr.join(
    '\n  * '
  )}`
}
