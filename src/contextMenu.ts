import { MISSKEY_ICON_SVG } from './constants/misskeyIcon'
import { settings } from './settings'
import { shareOnMisskey } from './shareOnMisskey'

export const initializeContextMenu = () => {
  if (settings.getFieldValue<boolean>('showContextMenuButton')) {
    // Misskeyでシェア
    new Spicetify.ContextMenu.Item(
      'Misskeyでシェア',
      async (uris) => {
        const uri = Spicetify.URI.from(uris[0])

        await shareOnMisskey(uri)
      },
      undefined,
      MISSKEY_ICON_SVG as any
    ).register()
  }
}
