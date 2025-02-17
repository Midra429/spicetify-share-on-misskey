import { MISSKEY_ICON_SVG } from './constants/misskeyIcon'
import { settings } from './settings'
import { shareOnMisskey } from './shareOnMisskey'

export const initializeContextMenu = () => {
  if (settings.getFieldValue<boolean>('showContextMenuButton')) {
    // Misskeyでシェア
    new Spicetify.ContextMenu.Item(
      'Misskeyでシェア',
      async (uris) => {
        if (2 <= uris.length) {
          Spicetify.showNotification(
            '[Share on Misskey] 複数の項目が選択されています',
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
  }
}
