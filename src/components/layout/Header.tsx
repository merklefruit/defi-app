import {
  Header as MantineHeader,
  Burger,
  MediaQuery,
  Group,
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
    <MantineHeader height={100} p="md">
      <Group align="center" style={{ justifyContent: "space-between" }}>
        <Group>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={showNavbar}
              onClick={() => setShowNavbar(!showNavbar)}
              size="md"
            />
          </MediaQuery>

          <h3>{config.appName}</h3>
        </Group>

        <ConnectButton />
      </Group>
    </MantineHeader>
  );
}
