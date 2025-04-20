'use client';

import { useState, ReactNode } from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from './color-mode';

type CombinedProviderProps = ColorModeProviderProps & {
  children: ReactNode;
};

export function Provider({ children, ...colorModeProps }: CombinedProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...colorModeProps}>
          {children}
        </ColorModeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
