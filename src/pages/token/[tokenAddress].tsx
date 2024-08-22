import { SkeletonText, Text } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { useChainId, useReadContract } from "wagmi"

import { defaultChain } from "@/application/provider/web3/wagmi"
import ERC20__Abi from "@/shared/abi/ERC20"
import { ChartComponent } from "@/shared/components/Chart"
import { BaseLayout } from "@/shared/layout/Base.layout"

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
]

const TokenPage: NextPage = () => {
  const router = useRouter()
  const { tokenAddress } = router.query

  const connectedChainId = useChainId()
  const chainId = useMemo(() => connectedChainId || defaultChain.id, [connectedChainId])

  const result = useReadContract({
    abi: ERC20__Abi,
    address: tokenAddress as `0x${string}`,
    functionName: "name",
    chainId: chainId,
    query: {
      enabled: !!tokenAddress,
      refetchOnWindowFocus: false,
    },
  })

  return (
    <BaseLayout>
      <Head>
        <title>DEXE | {result?.data ?? "Token"}</title>
        <meta content="About page" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <h1>
        Token name from contract:{" "}
        {result.isFetching ? (
          <SkeletonText />
        ) : (
          <>
            <Text color={result?.error ? "tomato" : "green"}>
              {result?.data ?? "Failed to fetch"}
            </Text>
            <Text>adsfasdfasdfa</Text>
          </>
        )}
      </h1>
      <ChartComponent data={initialData} />
    </BaseLayout>
  )
}

export default TokenPage
