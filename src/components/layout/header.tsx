import Link from "next/link"
import { Header as MantineHeader, Burger, MediaQuery, Group, Title, Box } from "@mantine/core"
import { Activity } from "phosphor-react"
import config from "config"
import ConnectButton from "src/components/wallet/connectButton"
import catppuccin from "src/lib/catppuccin"

export default function Header({
  showNavbar,
  setShowNavbar,
}: {
  showNavbar: boolean
  setShowNavbar: (showNavbar: boolean) => void
}) {
  return (
    <MantineHeader sx={{ backgroundColor: catppuccin.mocha.crust }} height={100} p="lg">
      <Group align="center" style={{ justifyContent: "space-between", height: "100%" }}>
        <Group>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger opened={showNavbar} onClick={() => setShowNavbar(!showNavbar)} size="md" />
          </MediaQuery>

          <Link href="/">
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Activity size={32} />
              <Title order={2} sx={() => ({ cursor: "pointer" })}>
                {config.appName}
              </Title>
            </Box>
          </Link>
        </Group>

        <ConnectButton />
      </Group>
    </MantineHeader>
  )
}
