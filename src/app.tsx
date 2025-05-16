import { initializeSettings } from '@/settings'
import { initializeContextMenu } from '@/contextMenu'
import { initializeControlPanel } from '@/controlPanel'

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

  // Spotifyのアプデで適用されなくなったスタイルの修正用
  const style = document.createElement('style')
  style.textContent = `
    .Wrapper-sm-only, .Wrapper-small-only {
      display: flex;
      position: absolute;
    }

    .e-9890-button-tertiary--icon-only {
      .Wrapper-sm-only, .Wrapper-small-only {
        position: static;
      }
    }

    .Svg-img-icon-small {
      fill: var(--encore-icon-fill, currentColor);
      height: var(--encore-icon-height, var(--encore-graphic-size-decorative-base));
      width: var(--encore-icon-width, var(--encore-graphic-size-decorative-base));
    }
  `
  document.body.appendChild(style)
}
