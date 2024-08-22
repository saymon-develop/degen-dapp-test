import { Link } from "@chakra-ui/next-js"
import { Box, Card, CardBody, CardFooter, CardHeader, Image, VStack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"

import { useLastChainId } from "@/application/web3"
import { BaseLayout } from "@/shared/layout/Base.layout"

const tokens = [
  {
    name: "Wrapped BNB",
    symbol: "WBNB",
    address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    chainId: 97,
    decimals: 18,
    logoURI:
      "https://pancake.kiemtienonline360.com/images/coins/0xae13d989dac2f0debff460ac112a837c89baa7cd.png",
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    address: "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684",
    chainId: 97,
    decimals: 18,
    logoURI:
      "https://pancake.kiemtienonline360.com/images/coins/0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684.png",
  },
  {
    name: "Ethereum Token",
    symbol: "ETH",
    address: "0x8BaBbB98678facC7342735486C851ABD7A0d17Ca",
    chainId: 97,
    decimals: 18,
    logoURI:
      "https://pancake.kiemtienonline360.com/images/coins/0x8babbb98678facc7342735486c851abd7a0d17ca.png",
  },
  {
    name: "BUSD Token",
    symbol: "BUSD",
    address: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
    chainId: 97,
    decimals: 18,
    logoURI:
      "https://pancake.kiemtienonline360.com/images/coins/0x78867bbeef44f2326bf8ddd1941a4439382ef2a7.png",
  },
  {
    name: "Dai Token",
    symbol: "DAI",
    address: "0x8a9424745056Eb399FD19a0EC26A14316684e274",
    chainId: 97,
    decimals: 18,
    logoURI:
      "https://pancake.kiemtienonline360.com/images//coins/0x8a9424745056eb399fd19a0ec26a14316684e274.png",
  },
  {
    name: "PancakeSwap Token",
    symbol: "CAKE",
    address: "0xF9f93cF501BFaDB6494589Cb4b4C15dE49E85D0e",
    chainId: 97,
    decimals: 18,
    logoURI:
      "https://pancake.kiemtienonline360.com/images/coins/0xf9f93cf501bfadb6494589cb4b4c15de49e85d0e.png",
  },
  {
    name: "SafeMoon",
    symbol: "SAFEMOON",
    address: "0xdacbdecc2992a63390d108e8507b98c7e2b5584a",
    chainId: 97,
    decimals: 9,
    logoURI:
      "https://pancake.kiemtienonline360.com/images/coins/0xdacbdecc2992a63390d108e8507b98c7e2b5584a.png",
  },
  {
    name: "Wrapped BNB",
    symbol: "WBNB",
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    chainId: 56,
    decimals: 18,
    logoURI:
      "https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png",
  },
  {
    name: "BUSD Token",
    symbol: "BUSD",
    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    chainId: 56,
    decimals: 18,
    logoURI:
      "https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png",
  },
  {
    name: "Ethereum Token",
    symbol: "ETH",
    address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    chainId: 56,
    decimals: 18,
    logoURI:
      "https://pancakeswap.finance/images/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png",
  },
  {
    name: "BTCB Token",
    symbol: "BTCB",
    address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    chainId: 56,
    decimals: 18,
    logoURI:
      "https://pancakeswap.finance/images/tokens/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png",
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    address: "0x55d398326f99059fF775485246999027B3197955",
    chainId: 56,
    decimals: 18,
    logoURI:
      "https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.png",
  },
]

const Home: NextPage = () => {
  const chainId = useLastChainId()

  return (
    <BaseLayout>
      <Head>
        <title>DEXE Launchpad</title>
        <meta content="Generated by @rainbow-me/create-rainbowkit" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <h1>
        Welcome to <a href="">RainbowKit</a> + <a href="">wagmi</a> +{" "}
        <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Box>
        <VStack spacing={"24px"}>
          {tokens
            .filter(token => token.chainId == chainId)
            .map(token => (
              <Link href={`/token/${token.address}`} key={token.address}>
                <Card>
                  <CardHeader>{token.name}</CardHeader>
                  <CardBody>
                    <Image src={token.logoURI} />
                  </CardBody>
                  <CardFooter>{token.address}</CardFooter>
                </Card>
              </Link>
            ))}
        </VStack>
      </Box>
    </BaseLayout>
  )
}

export default Home
