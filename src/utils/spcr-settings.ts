import type {
  ISettingsFieldDropdown,
  ISettingsFieldInput,
  ISettingsFieldToggle,
} from 'spcr-settings/types/settings-field'
import type {
  SettingsItems,
  SettingsItemKeys,
  SettingsInputItemKeys,
  SettingsToggleItemKeys,
  SettingsDropDownItemKeys,
} from '@/types/settings'

import { SettingsSection as _SettingsSection } from 'spcr-settings'

export class SettingsSection extends _SettingsSection {
  // @ts-expect-error
  declare addInput: <Key extends SettingsInputItemKeys>(
    nameId: Key,
    description: string,
    defaultValue: SettingsItems[Key],
    onChange?: () => void,
    inputType?: string,
    events?: ISettingsFieldInput['events']
  ) => void

  // @ts-expect-error
  declare addToggle: <Key extends SettingsToggleItemKeys>(
    nameId: Key,
    description: string,
    defaultValue: SettingsItems[Key],
    onChange?: () => void,
    events?: ISettingsFieldToggle['events']
  ) => void

  // @ts-expect-error
  declare addDropDown: <Key extends SettingsDropDownItemKeys>(
    nameId: Key,
    description: string,
    options: string[],
    defaultIndex: number,
    onSelect?: () => void,
    events?: ISettingsFieldDropdown['events']
  ) => void

  // @ts-expect-error
  declare getFieldValue: <Key extends SettingsItemKeys>(
    nameId: Key
  ) => SettingsItems[Key]
}
