import { EXTENSION_NAME } from '@/constants/extension'
import { MISSKEY_ICON_SVG } from '@/constants/misskeyIcon'
import { settings } from '@/settings'
import { shareOnMisskey } from '@/lib/shareOnMisskey'

export const initializeContextMenu = () => {
  if (settings.getFieldValue('showContextMenuButton')) {
    // Misskeyでシェア
    new Spicetify.ContextMenu.Item(
      'Misskeyでシェア',
      async (uris) => {
        if (2 <= uris.length) {
          Spicetify.showNotification(
            `[${EXTENSION_NAME}] 複数の項目が選択されています`,
            true
          )

          return
        }

        const uri = Spicetify.URI.from(uris[0])

        await shareOnMisskey(uri)
      },
      undefined,
      MISSKEY_ICON_SVG as any
    ).register()

    // Spotifyのアプデで適用されなくなったスタイルの修正用
    const style = document.createElement('style')
    style.textContent = `
      .Wrapper-sm-only, .Wrapper-small-only {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: absolute;
      }
    `
    document.body.appendChild(style)
  }
}
