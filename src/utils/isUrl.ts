export const isUrl = (url?: string | null) => {
  return !!url && /^https?:\/\//.test(url) && URL.canParse(url)
}
