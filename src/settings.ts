import type { SettingsItems } from '@/types/settings'

import {
  EXTENSION_ID,
  EXTENSION_NAME,
  EXTENSION_VERSION,
  EXTENSION_HOMEPAGE,
} from '@/constants/extension'
import { SETTINGS_BUTTON_CLASSNAME } from '@/constants/classNames'
import { isUrl } from '@/utils/isUrl'
import { SettingsSection } from '@/utils/spcr-settings'

export const NOTE_VISIBILITY = [
  ['public', 'パブリック'],
  ['home', 'ホーム'],
  ['followers', 'フォロワー'],
] as const

/** 設定の初期値 */
const DEFAULT_SETTINGS: SettingsItems = {
  misskeyHost: 'misskey.io',
  misskeyToken: '',
  useMisskeyWeb: false,
  misskeyVisibility: 'ホーム',
  showContextMenuButton: true,
  showControlPanelButton: true,
}

export let settings: SettingsSection

export const initializeSettings = async () => {
  settings = new SettingsSection(
    `${EXTENSION_NAME} v${EXTENSION_VERSION}`,
    EXTENSION_ID
  )

  // サーバーのホスト
  settings.addInput(
    'misskeyHost',
    'サーバーのホスト',
    DEFAULT_SETTINGS['misskeyHost']
  )

  // アクセストークン
  settings.addInput(
    'misskeyToken',
    'アクセストークン',
    DEFAULT_SETTINGS['misskeyToken']
  )

  // 設定したサーバーの「設定 > API」を開く
  settings.addButton(
    'openSettingsApiPage',
    '┗ 設定したサーバーの「設定 > API」を開く',
    '開く',
    () => {
      const host = settings.getFieldValue('misskeyHost')

      if (!host) {
        Spicetify.showNotification('サーバーのホストを入力してください', true)

        return
      }

      window.open(
        isUrl(host)
          ? new URL('/settings/api', host)
          : `https://${host}/settings/api`
      )
    },
    {
      className: SETTINGS_BUTTON_CLASSNAME,
    }
  )

  // Misskey Webで投稿する
  settings.addToggle(
    'useMisskeyWeb',
    'Misskey Webで投稿する（アクセストークン不要）',
    DEFAULT_SETTINGS['useMisskeyWeb']
  )

  // 公開範囲
  settings.addDropDown(
    'misskeyVisibility',
    '公開範囲',
    NOTE_VISIBILITY.map(([_, label]) => label),
    NOTE_VISIBILITY.findIndex(
      ([_, label]) => label === DEFAULT_SETTINGS['misskeyVisibility']
    )
  )

  // コンテキストメニューに「Misskeyでシェア」を表示
  settings.addToggle(
    'showContextMenuButton',
    'コンテキストメニューに「Misskeyでシェア」を表示',
    DEFAULT_SETTINGS['showContextMenuButton']
  )

  // コントロールパネルに「#NowPlaying」を表示
  settings.addToggle(
    'showControlPanelButton',
    'コントロールパネルに「#NowPlaying」を表示',
    DEFAULT_SETTINGS['showControlPanelButton']
  )

  // GitHubでリポジトリを開く
  settings.addButton(
    'openGitHubRepository',
    'GitHubでリポジトリを開く',
    '開く',
    () => window.open(EXTENSION_HOMEPAGE),
    {
      className: SETTINGS_BUTTON_CLASSNAME,
    }
  )

  await settings.pushSettings()
}
