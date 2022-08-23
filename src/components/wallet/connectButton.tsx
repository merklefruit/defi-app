import { ConnectButton as RainbowWalletButton } from "@rainbow-me/rainbowkit";

export default function ConnectButton() {
  return <RainbowWalletButton label="Connect Wallet" showBalance={false} />;
}
