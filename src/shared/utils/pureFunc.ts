export const getRenderData = (data: string | number | null | undefined) => {
  if (typeof data === 'string') {
    return data
  }
  if (typeof data === 'number') {
    return data.toString()
  }
  return ''
}
