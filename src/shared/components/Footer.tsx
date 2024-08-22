import { Box, Flex } from "@chakra-ui/react"
import * as React from "react"

export default function Footer() {
  return (
    <Box as="footer" bg="gray.100" p={4}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </Flex>
    </Box>
  )
}
