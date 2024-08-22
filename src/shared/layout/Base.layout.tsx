import { Flex, VStack } from "@chakra-ui/react"
import * as React from "react"

import Footer from "@/shared/components/Footer"
import Header from "@/shared/components/Header"

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex flexDirection={"column"} minHeight={"100dvh"} minWidth={"100dvw"}>
      <Header />
      <VStack as={"main"} flex={1} p={4} minWidth={"100dvw"}>
        {children}
      </VStack>
      <Footer />
    </Flex>
  )
}
