// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkDataValidity = (data: any) => {
  if (data === null) {
    return ''
  }
  if (data === undefined) {
    return ''
  }
  return data
}
