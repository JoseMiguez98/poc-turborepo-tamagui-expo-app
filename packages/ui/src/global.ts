import { appConfig, AppConfigType } from './tamagui.config';

declare module 'tamagui' {
  // or '@tamagui/core'

  // overrides TamaguiCustomConfig so your custom types

  // work everywhere you import `tamagui`

  interface TamaguiCustomConfig extends AppConfigType {}
  // if you want types for group styling props, define them like so:
  interface TypeOverride {
    groupNames(): '';
  }
}

export const uiConfig = appConfig;
