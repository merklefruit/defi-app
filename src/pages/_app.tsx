import { AppProps } from "next/app";
import Head from "next/head";

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { Provider } from "react-redux";
import { WagmiConfig } from "wagmi";
import Wallet from "src/components/wallet/Index";
import store from "state";
import config from "config";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>{config.appName}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "dark" }}
      >
        <NotificationsProvider>
          <Provider store={store}>
            <WagmiConfig client={Wallet.wagmiClient}>
              <Wallet.Provider>
                <Component {...pageProps} />
              </Wallet.Provider>
            </WagmiConfig>
          </Provider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
