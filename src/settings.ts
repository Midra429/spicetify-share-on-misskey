import { SettingsSection } from 'spcr-settings'

import { isUrl } from './utils/isUrl'

export const NOTE_VISIBILITY = [
  ['public', 'パブリック'],
  ['home', 'ホーム'],
  ['followers', 'フォロワー'],
] as const

/** 設定の初期値 */
const DEFAULT_SETTINGS = {
  misskeyHost: 'misskey.io',
  misskeyToken: '',
  misskeyVisibility: 1,
  showContextMenuButton: true,
  showControlPanelButton: true,
} as const

export let settings: SettingsSection

export const initializeSettings = async () => {
  settings = new SettingsSection('Share on Misskey', 'share-on-misskey')

  // サーバーのホスト
  settings.addInput(
    'misskeyHost',
    'サーバーのホスト',
    DEFAULT_SETTINGS['misskeyHost']
  )

  // 設定したサーバーの「設定 > API」を開く
  settings.addButton(
    'openSettingsApiPage',
    '設定したサーバーの「設定 > API」を開く',
    '開く',
    () => {
      const host = settings.getFieldValue<string>('misskey-host')

      if (!host) {
        Spicetify.showNotification('サーバーのホストを入力してください', true)

        return
      }

      window.open(
        isUrl(host)
          ? new URL('/settings/api', host).href
          : `https://${host}/settings/api`
      )
    }
  )

  // アクセストークン
  settings.addInput(
    'misskeyToken',
    'アクセストークン',
    DEFAULT_SETTINGS['misskeyToken']
  )

  // 公開範囲
  settings.addDropDown(
    'misskeyVisibility',
    '公開範囲',
    NOTE_VISIBILITY.map(([_, label]) => label),
    DEFAULT_SETTINGS['misskeyVisibility']
  )

  // コンテキストメニューに「Misskeyでシェア」を表示
  settings.addToggle(
    'showContextMenuButton',
    'コンテキストメニューに「Misskeyでシェア」を表示',
    DEFAULT_SETTINGS['showContextMenuButton']
  )

  // コントロールパネルに投稿ボタンを表示
  settings.addToggle(
    'showControlPanelButton',
    'コントロールパネルに投稿ボタンを表示',
    DEFAULT_SETTINGS['showControlPanelButton']
  )

  await settings.pushSettings()
}
