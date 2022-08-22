import Link from "next/link";
import {
  Button,
  Group,
  Navbar as MantineNavbar,
  Stack,
  Text,
} from "@mantine/core";
import { Wallet, Strategy, Sliders } from "phosphor-react";

export default function Navbar({ hidden }: { hidden: boolean }) {
  return (
    <MantineNavbar
      sx={(theme) => ({ backgroundColor: theme.colors.ctp_crust[6] })}
      hidden={hidden}
      hiddenBreakpoint="sm"
      width={{ base: "100%", sm: 300 }}
      p="lg"
    >
      <Stack>
        <NavbarItem
          link="/"
          icon={<Wallet weight="light" size={27} />}
          text="Portfolio"
        />

        <NavbarItem
          link="/strategies"
          icon={<Strategy weight="light" size={27} />}
          text="Strategies"
        />

        <NavbarItem
          link="/settings"
          icon={<Sliders weight="light" size={27} />}
          text="Settings"
        />
      </Stack>
    </MantineNavbar>
  );
}

function NavbarItem({
  link,
  icon,
  text,
}: {
  link: string;
  icon: any;
  text: string;
}) {
  return (
    <Link href={link}>
      <Button
        component="a"
        variant="light"
        color="gray"
        size="lg"
        leftIcon={icon}
      >
        <Text>{text}</Text>
      </Button>
    </Link>
  );
}
