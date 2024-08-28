import { createThemeBuilder } from '@tamagui/theme-builder';
import { palettes } from './palettes.foundation';
import { templates } from './templates.foundation';

const themesBuilder = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addThemes({
    light: {
      template: 'pawsy-light',
      palette: 'light',
    },
  });

export const themes = themesBuilder.build();
