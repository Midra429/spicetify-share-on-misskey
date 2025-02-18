import { spotifyApi } from '@/api/spotify'

import { EXTENSION_NAME } from '@/constants/extension'

export type CreatePostTextOptions = {
  hashtag?: string
}

export const createPostText = async (
  uri?: Spicetify.URI | null,
  options: CreatePostTextOptions = {}
) => {
  if (!uri?.id) return

  const { hashtag } = options

  try {
    let text = ''

    switch (uri.type) {
      // 曲
      case Spicetify.URI.Type.TRACK:
        const track = await spotifyApi.track(uri)

        text += track.name

        if (track.artists.length) {
          text += ' - '
          text += track.artists.map((artist) => artist.name).join(', ')
        }

        break

      // アルバム
      case Spicetify.URI.Type.ALBUM:
        const album = await spotifyApi.album(uri)

        text += album.name

        break

      // アーティスト
      case Spicetify.URI.Type.ARTIST:
        const artist = await spotifyApi.artist(uri)

        text += artist.name

        break

      // ポッドキャスト（番組）
      case Spicetify.URI.Type.SHOW:
        const show = await spotifyApi.show(uri)

        text += show.name

        break

      // ポッドキャスト（エピソード）
      case Spicetify.URI.Type.EPISODE:
        const episode = await spotifyApi.episode(uri)

        text += episode.name
        text += ' - '
        text += episode.show.name

        break

      // プレイリスト
      case Spicetify.URI.Type.PLAYLIST:
      case Spicetify.URI.Type.PLAYLIST_V2:
        const playlist = await spotifyApi.playlist(uri)

        text += playlist.name

        break
    }

    if (!text) return

    // ハッシュタグ
    if (hashtag) {
      text += ` #${hashtag}`
    }

    // SpotifyのURL
    text += '\n'
    text += uri.toURL()

    return text.trim()
  } catch (err: any) {
    Spicetify.showNotification(`[${EXTENSION_NAME}] ${err.message}`, true)
  }
}
