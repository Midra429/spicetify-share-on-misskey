import type * as Misskey from 'misskey-js'

import { EXTENSION_NAME } from '@/constants/extension'
import { isUrl } from '@/utils/isUrl'
import { settings } from '@/settings'

class MisskeyApiClient {
  readonly host: string
  readonly token: string
  readonly baseUrl: string

  constructor(host: string, token: string) {
    this.host = host
    this.token = token

    this.baseUrl = isUrl(host)
      ? new URL('/api', host).href
      : `https://${host}/api`
  }

  async createNote(
    body: Misskey.Endpoints['notes/create']['req']
  ): Promise<Misskey.Endpoints['notes/create']['res'] | undefined> {
    if (!body.text) return

    try {
      const res = await fetch(`${this.baseUrl}/notes/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...body,
          i: this.token,
        }),
      })
      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.error?.message || res.statusText)
      }

      return json
    } catch (err: any) {
      Spicetify.showNotification(`[${EXTENSION_NAME}] ${err.message}`, true)
    }
  }
}

let _misskeyApiClient: MisskeyApiClient | null = null

export const getMisskeyApiClient = (): MisskeyApiClient | null => {
  const host = settings.getFieldValue('misskeyHost')
  const token = settings.getFieldValue('misskeyToken')

  if (host && token) {
    if (
      host !== _misskeyApiClient?.host ||
      token !== _misskeyApiClient?.token
    ) {
      _misskeyApiClient = new MisskeyApiClient(host, token)
    }
  } else {
    _misskeyApiClient = null
  }

  return _misskeyApiClient
}
