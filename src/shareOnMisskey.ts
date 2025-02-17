import type { CreatePostTextOptions } from './createPostText'

import { isUrl } from './utils/isUrl'
import { getMisskeyApiClient } from './api/misskey'
import { NOTE_VISIBILITY, settings } from './settings'
import { createPostText } from './createPostText'

export const shareOnMisskey = async (
  uri?: Spicetify.URI | null,
  options: CreatePostTextOptions = {}
) => {
  // 投稿テキストを生成
  const text = await createPostText(uri, options)

  if (!text) {
    Spicetify.showNotification(
      '[Share on Misskey] この形式には非対応です',
      true
    )

    return
  }

  // 公開範囲
  const visibilityLabel = settings.getFieldValue<string>('misskeyVisibility')
  const visibility = NOTE_VISIBILITY.find(
    ([_, label]) => label === visibilityLabel
  )?.[0]

  // Misskey Webで投稿
  if (settings.getFieldValue<boolean>('useMisskeyWeb')) {
    const host = settings.getFieldValue<string>('misskeyHost')

    if (!host) {
      Spicetify.showNotification(
        '[Share on Misskey] サーバーのホストを設定してください',
        true
      )

      return
    }

    const url = isUrl(host)
      ? new URL('/share', host)
      : new URL(`https://${host}/share`)

    url.searchParams.set('text', text)
    url.searchParams.set('visibility', visibility ?? 'public')

    window.open(url)
  }
  // Misskey APIで投稿
  else {
    const apiClient = getMisskeyApiClient()

    if (!apiClient) {
      Spicetify.showNotification(
        '[Share on Misskey] サーバーのホストとアクセストークンを設定してください',
        true
      )

      return
    }

    // ノートを投稿
    const createdNote = await apiClient.createNote({
      text,
      visibility,
    })

    if (createdNote) {
      Spicetify.showNotification('[Share on Misskey] 投稿しました')
    }
  }
}
