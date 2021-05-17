import React from "react"
import {
  Box,
  Button,
  Flex,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

export default function Header({
  logo,
}: {
  logo: React.ReactChild
}): React.ReactElement {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        color={useColorModeValue("gray.900", "gray.100")}
        minH="60px"
        py="2"
        px="4"
        align="center"
      >
        <Flex flex="1" justify={{ base: "center", md: "start" }} align="center">
          <Button
            as="a"
            fontSize="sm"
            fontWeight="extrabold"
            color={useColorModeValue("primary.900", "primary.100")}
            href="/"
            variant="ghost"
            _hover={{
              bg: "inherit",
            }}
          >
            {logo}
          </Button>
          <Flex display={{ base: "none", md: "flex" }}>
            <Nav />
          </Flex>
        </Flex>

        <Stack flex="0" justify="flex-end" direction="row" spacing="6">
          <Button
            as="a"
            fontSize="sm"
            fontWeight="400"
            color={useColorModeValue("gray.900", "gray.100")}
            variant="link"
            href="#"
          >
            Sign In
          </Button>
          <Button
            fontSize="sm"
            fontWeight="600"
            bg="primary.500"
            color="gray.100"
            href="#"
            _hover={{
              bg: "primary.400",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
      <Flex
        display={{ base: "flex", md: "none" }}
        bg={useColorModeValue("gray.100", "gray.900")}
        py="2"
        px="4"
        align="center"
      >
        <Nav />
      </Flex>
    </Box>
  )
}

const Nav = () => {
  const color = useColorModeValue("gray.900", "gray.100")
  const childrenBg = useColorModeValue("gray.200", "gray.800")
  return (
    <Stack direction="row" spacing="4">
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                p="2"
                href={navItem.href ?? "#"}
                fontSize="sm"
                fontWeight="500"
                color={color}
                _hover={{
                  textDecoration: "none",
                  color: "primary.500",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border="0"
                boxShadow="xl"
                bg={childrenBg}
                p="4"
                rounded="xl"
                minW={{ base: "xs", md: "sm" }}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <SubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const SubNav = ({ label, href }: NavItem) => {
  return (
    <Link href={href} role="group" display="block" p="2" rounded="md">
      <Box>
        <Text _groupHover={{ color: "primary.500" }} fontWeight="500">
          {label}
        </Text>
      </Box>
    </Link>
  )
}

interface NavItem {
  label: string
  children?: Array<NavItem>
  href?: string
}

const navItems: Array<NavItem> = [
  {
    label: "Nav 1",
    children: [
      {
        label: "Nav 1 Sub 1",
        href: "#",
      },
      {
        label: "Nav 1 Sub 2",
        href: "#",
      },
    ],
  },
  {
    label: "Nav 2",
    children: [
      {
        label: "Nav 2 Sub 1",
        href: "#",
      },
      {
        label: "Nav 2 Sub 2",
        href: "#",
      },
    ],
  },
  {
    label: "Nav 3",
    href: "#",
  },
  {
    label: "Nav 4",
    href: "#",
  },
]
