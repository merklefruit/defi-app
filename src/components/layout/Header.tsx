import Link from "next/link";
import {
  Header as MantineHeader,
  Burger,
  MediaQuery,
  Group,
  Title,
} from "@mantine/core";
import config from "config";
import ConnectButton from "src/components/wallet/ConnectButton";

export default function Header({
  showNavbar,
  setShowNavbar,
}: {
  showNavbar: boolean;
  setShowNavbar: (showNavbar: boolean) => void;
}) {
  return (
    <MantineHeader height={100} p="lg">
      <Group
        align="center"
        style={{ justifyContent: "space-between", height: "100%" }}
      >
        <Group>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={showNavbar}
              onClick={() => setShowNavbar(!showNavbar)}
              size="md"
            />
          </MediaQuery>

          <Link href="/">
            <Title order={3} style={{ cursor: "pointer" }}>
              {config.appName}
            </Title>
          </Link>
        </Group>

        <ConnectButton />
      </Group>
    </MantineHeader>
  );
}
