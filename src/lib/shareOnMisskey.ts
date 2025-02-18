import type { CreatePostTextOptions } from '@/lib/createPostText'

import { EXTENSION_NAME } from '@/constants/extension'
import { NOTE_VISIBILITY, settings } from '@/settings'
import { isUrl } from '@/utils/isUrl'
import { getMisskeyApiClient } from '@/api/misskey'
import { createPostText } from '@/lib/createPostText'

export const shareOnMisskey = async (
  uri?: Spicetify.URI | null,
  options: CreatePostTextOptions = {}
) => {
  // 投稿テキストを生成
  const text = await createPostText(uri, options)

  if (!text) {
    Spicetify.showNotification(
      `[${EXTENSION_NAME}] この形式には非対応です`,
      true
    )

    return
  }

  // 公開範囲
  const visibilityLabel = settings.getFieldValue('misskeyVisibility')
  const visibility = NOTE_VISIBILITY.find(
    ([_, label]) => label === visibilityLabel
  )?.[0]

  // Misskey Webで投稿
  if (settings.getFieldValue('useMisskeyWeb')) {
    const host = settings.getFieldValue('misskeyHost')

    if (!host) {
      Spicetify.showNotification(
        `[${EXTENSION_NAME}] サーバーのホストを設定してください`,
        true
      )

      return
    }

    const url = isUrl(host)
      ? new URL('/share', host)
      : new URL(`https://${host}/share`)

    url.searchParams.set('text', text)

    if (visibility) {
      url.searchParams.set('visibility', visibility)
    }

    window.open(url)
  }
  // Misskey APIで投稿
  else {
    const apiClient = getMisskeyApiClient()

    if (!apiClient) {
      Spicetify.showNotification(
        `[${EXTENSION_NAME}] サーバーのホストとアクセストークンを設定してください`,
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
      Spicetify.showNotification(`[${EXTENSION_NAME}] 投稿しました`)
    }
  }
}
