import { Link } from "@chakra-ui/next-js"
import { Box, Flex } from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import * as React from "react"

export default function Header() {
  return (
    <Box as="header" bg="gray.100" p={4}>
      <Flex minWidth="100%" alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"} justifyContent={"space-between"} gap={"24px"}>
          <Box>
            <Link href="/">DEXE</Link>
          </Box>
          <Box>
            <Flex as={"nav"} alignItems={"center"} justifyContent={"flex-start"} gap={"12px"}>
              <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
                Home
              </Link>
              <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
                About
              </Link>
            </Flex>
          </Box>
        </Flex>
        <ConnectButton />
      </Flex>
    </Box>
  )
}
