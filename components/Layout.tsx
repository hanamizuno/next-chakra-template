import React from "react"
import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import Header from "./Header"

export const siteTitle = "Site Title"

export default function Layout({
  children,
  pageTitle,
}: {
  children: React.ReactNode
  pageTitle?: string
}): React.ReactElement {
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
      </Head>

      <Box>
        <Header logo={siteTitle} />
        <Container p="2" maxW="4xl">
          {children}
        </Container>
      </Box>
    </>
  )
}
