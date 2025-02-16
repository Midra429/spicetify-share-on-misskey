import { MISSKEY_ICON_SVG } from './constants/misskeyIcon'
import { settings } from './settings'
import { shareOnMisskey } from './shareOnMisskey'

export const initializeControlPanel = () => {
  // Misskeyでシェア
  if (settings.getFieldValue('showControlPanelButton')) {
    new Spicetify.Playbar.Button(
      '#NowPlaying（Misskey）',
      MISSKEY_ICON_SVG,
      async () => {
        const uri = Spicetify.URI.from(Spicetify.Player.data?.item.uri)

        await shareOnMisskey(uri, {
          hashtag: 'NowPlaying',
        })
      }
    ).register()
  }
}
