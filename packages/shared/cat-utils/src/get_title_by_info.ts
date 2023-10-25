// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTitleByInfo = (info: string, items: Record<string, any>[]) => {
  const titlesByInfo: string[] = []
  items.forEach((item) => {
    if (item.artist === info || item.author === info || item.genre === info) {
      titlesByInfo.push(item.title)
    }
  })
  return titlesByInfo
}
