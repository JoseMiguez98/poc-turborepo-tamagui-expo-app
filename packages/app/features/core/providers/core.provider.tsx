import { TamaguiProvider, TamaguiProviderProps, ToastProvider, uiConfig } from '@repo/ui';
import { ToastViewport } from './ToastViewport';

export function CoreProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider config={uiConfig} defaultTheme="light" {...rest}>
      <ToastProvider
        swipeDirection="horizontal"
        duration={6000}
        native={
          [
            /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
            // 'mobile'
          ]
        }
      >
        {children}
        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  );
}
