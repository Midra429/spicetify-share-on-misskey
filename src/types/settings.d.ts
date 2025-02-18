import type { NOTE_VISIBILITY } from '@/settings'

export type SettingsItems = {
  /** サーバーのホスト */
  misskeyHost: string

  /** アクセストークン */
  misskeyToken: string

  /** Misskey Webで投稿する */
  useMisskeyWeb: boolean

  /** 公開範囲 */
  misskeyVisibility: (typeof NOTE_VISIBILITY)[number][1]

  /** コンテキストメニューに「Misskeyでシェア」を表示 */
  showContextMenuButton: boolean

  /** コントロールパネルに「#NowPlaying」を表示 */
  showControlPanelButton: boolean
}

export type SettingsItemKeys = keyof SettingsItems

export type SettingsInputItemKeys = {
  [key in SettingsItemKeys]: SettingsItems[key] extends string ? key : never
}[SettingsItemKeys]

export type SettingsToggleItemKeys = {
  [key in SettingsItemKeys]: SettingsItems[key] extends boolean ? key : never
}[SettingsItemKeys]

export type SettingsDropDownItemKeys = {
  [key in SettingsItemKeys]: SettingsItems[key] extends string ? key : never
}[SettingsItemKeys]
