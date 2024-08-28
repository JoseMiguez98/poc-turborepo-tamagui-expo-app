import { config } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui';

export const appConfig = createTamagui(config);

export type AppConfigType = typeof appConfig;
