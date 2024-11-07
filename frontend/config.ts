import { 
  http, 
  createConfig,
  cookieStorage,
  createStorage,
} from 'wagmi'
import { 
  sepolia,
} from 'wagmi/chains'
export const config = createConfig({
  chains: [
    sepolia,
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [sepolia.id]: http('https://11155111.rpc.thirdweb.com/3c452241953a430f0654b7031b43ca8b'),
  },
})