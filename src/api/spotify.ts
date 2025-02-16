import type {
  Track,
  Album,
  Artist,
  Show,
  Episode,
  Playlist,
} from '@spotify/web-api-ts-sdk'

export const spotifyApi = {
  // 曲
  track: async (uri: Spicetify.URI): Promise<Track> => {
    return Spicetify.CosmosAsync.get(
      `https://api.spotify.com/v1/tracks/${uri.id}`
    )
  },

  // アルバム
  album: async (uri: Spicetify.URI): Promise<Album> => {
    return Spicetify.CosmosAsync.get(
      `https://api.spotify.com/v1/albums/${uri.id}`
    )
  },

  // アーティスト
  artist: async (uri: Spicetify.URI): Promise<Artist> => {
    return Spicetify.CosmosAsync.get(
      `https://api.spotify.com/v1/artists/${uri.id}`
    )
  },

  // ポッドキャスト・番組
  show: async (uri: Spicetify.URI): Promise<Show> => {
    return Spicetify.CosmosAsync.get(
      `https://api.spotify.com/v1/shows/${uri.id}`
    )
  },

  // エピソード
  episode: async (uri: Spicetify.URI): Promise<Episode> => {
    return Spicetify.CosmosAsync.get(
      `https://api.spotify.com/v1/episodes/${uri.id}`
    )
  },

  // プレイリスト
  playlist: async (uri: Spicetify.URI): Promise<Playlist> => {
    return Spicetify.CosmosAsync.get(
      `https://api.spotify.com/v1/playlists/${uri.id}`
    )
  },
}
