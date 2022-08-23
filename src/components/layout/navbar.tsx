import Link from "next/link"
import { Button, Navbar as MantineNavbar, Stack, Text } from "@mantine/core"
import { Wallet, Strategy, Sliders } from "phosphor-react"
import catppuccin from "src/lib/catppuccin"

type IProps = { hidden: boolean }

export default function Navbar({ hidden }: IProps) {
  return (
    <MantineNavbar
      sx={{ backgroundColor: catppuccin.mocha.crust }}
      hidden={hidden}
      hiddenBreakpoint="sm"
      width={{ base: "100%", sm: 300 }}
      p="lg"
    >
      <Stack>
        <NavbarItem link="/" icon={<Wallet weight="light" size={27} />} text="Portfolio" />

        <NavbarItem link="/strategies" icon={<Strategy weight="light" size={27} />} text="Strategies" />

        <NavbarItem link="/settings" icon={<Sliders weight="light" size={27} />} text="Settings" />
      </Stack>
    </MantineNavbar>
  )
}

type INavItemProps = { link: string; icon: React.ReactNode; text: string }

function NavbarItem({ link, icon, text }: INavItemProps) {
  return (
    <Link href={link}>
      <Button
        component="a"
        size="md"
        leftIcon={icon}
        sx={{
          backgroundColor: catppuccin.mocha.overlay0,
          color: catppuccin.mocha.text,
          border: "none",

          "&:hover": {
            backgroundColor: catppuccin.mocha.overlay1,
          },
        }}
      >
        <Text>{text}</Text>
      </Button>
    </Link>
  )
}
