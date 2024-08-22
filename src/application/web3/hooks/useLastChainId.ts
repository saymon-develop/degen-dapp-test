import { useEffect, useMemo } from "react"
import { useChainId } from "wagmi"

import { defaultChain } from "@/application/web3/const"

const LAST_CHAIN_ID_LS_KEY = `last-chain-id`

export function useLastChainId(): number {
  const chainId = useChainId()

  useEffect(() => {
    const storedChainId = localStorage.getItem(LAST_CHAIN_ID_LS_KEY)

    if (storedChainId === null) {
      localStorage.setItem(LAST_CHAIN_ID_LS_KEY, String(chainId ?? defaultChain.id))
    }
  }, [chainId])

  return useMemo(() => {
    if (chainId) {
      return chainId
    } else {
      const storedChainId = localStorage.getItem(LAST_CHAIN_ID_LS_KEY)
      return storedChainId ? +storedChainId : defaultChain.id
    }
  }, [chainId])
}
