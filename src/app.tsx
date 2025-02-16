import { initializeSettings } from './settings'
import { initializeContextMenu } from './contextMenu'
import { initializeControlPanel } from './controlPanel'

export default async () => {
  while (!Spicetify) {
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  // 設定の初期化
  await initializeSettings()

  // コンテキストメニューの初期化
  initializeContextMenu()

  // コントロールパネルの初期化
  initializeControlPanel()
}
