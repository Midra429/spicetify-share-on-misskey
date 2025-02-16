import type { CreatePostTextOptions } from './createPostText'

import { NOTE_VISIBILITY, settings } from './settings'
import { getMisskeyApiClient } from './api/misskey'
import { createPostText } from './createPostText'

export const shareOnMisskey = async (
  uri?: Spicetify.URI | null,
  options: CreatePostTextOptions = {}
) => {
  const apiClient = getMisskeyApiClient()

  if (!apiClient) {
    Spicetify.showNotification(
      '[Share on Misskey] サーバーのホストとアクセストークンを設定してください',
      true
    )

    return
  }

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

  // ノートを投稿
  const createdNote = await apiClient.createNote({
    text,
    visibility,
  })

  if (createdNote) {
    Spicetify.showNotification('[Share on Misskey] 投稿しました')
  }
}
