'use client'

import {
  ReactNode, useEffect,
} from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  RainbowKitProvider,
  getDefaultConfig,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import {
  type State,
  http,
  WagmiProvider,
} from "wagmi";
import { sepolia } from 'wagmi/chains'

const config = getDefaultConfig({
  appName: 'Jeet.Tech',
  projectId: '9c501b5f82295e29fb3a0b4eb14dab53',
  chains: [
    sepolia,
  ],
  transports: {
    [sepolia.id]: http('https://11155111.rpc.thirdweb.com/3c452241953a430f0654b7031b43ca8b'),
  },
  ssr: true,
})

const queryClient = new QueryClient()

export function Providers ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState: State | undefined;
}) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
