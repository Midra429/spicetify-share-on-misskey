import type {
  Track,
  Album,
  Artist,
  Show,
  Episode,
  Playlist,
} from '@spotify/web-api-ts-sdk'

export const spotifyApi = {
  v1_get(
    path: string,
    body?: Spicetify.CosmosAsync.Body,
    headers?: Spicetify.CosmosAsync.Headers
  ) {
    return Spicetify.CosmosAsync.get(
      `https://api.spotify.com/v1${path}`,
      body,
      headers
    )
  },

  // 曲
  async track(uri: Spicetify.URI): Promise<Track> {
    return this.v1_get(`/tracks/${uri.id}`)
  },

  // アルバム
  async album(uri: Spicetify.URI): Promise<Album> {
    return this.v1_get(`/albums/${uri.id}`)
  },

  // アーティスト
  async artist(uri: Spicetify.URI): Promise<Artist> {
    return this.v1_get(`/artists/${uri.id}`)
  },

  // ポッドキャスト・番組
  async show(uri: Spicetify.URI): Promise<Show> {
    return this.v1_get(`/shows/${uri.id}`)
  },

  // エピソード
  async episode(uri: Spicetify.URI): Promise<Episode> {
    return this.v1_get(`/episodes/${uri.id}`)
  },

  // プレイリスト
  async playlist(uri: Spicetify.URI): Promise<Playlist> {
    return this.v1_get(`/playlists/${uri.id}`)
  },
}
