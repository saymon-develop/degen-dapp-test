import { Link } from "@chakra-ui/next-js"
import { Box } from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import * as React from "react"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Box>
          <Link href="/">DEXE</Link>
        </Box>
        <Box>
          <nav>
            <Link href="/" color="blue.400" _hover={{ color: "blue.500" }}>
              Home
            </Link>
            <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
              About
            </Link>
          </nav>
        </Box>
        <Box>
          <ConnectButton />
        </Box>
      </header>
      {children}
      <footer>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </>
  )
}
