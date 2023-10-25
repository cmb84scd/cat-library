// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const listByTitles = (items: Record<string, any>[]) => {
  const titles: string[] = []
  items.forEach((item) => {
    titles.push(item.title)
  })

  return titles
}
