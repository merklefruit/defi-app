import { AppProps } from "next/app"
import Head from "next/head"

import { NotificationsProvider } from "@mantine/notifications"
import { Global, MantineProvider } from "@mantine/core"
import { Provider } from "react-redux"
import { WagmiConfig } from "wagmi"

import Wallet from "src/components/wallet/index"
import theme from "src/lib/theme"
import store from "state"
import config from "config"
import globalStyles from "src/lib/globalStyles"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>{config.appName}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <NotificationsProvider>
          <Provider store={store}>
            <WagmiConfig client={Wallet.wagmiClient}>
              <Wallet.Provider>
                <Global styles={(theme) => globalStyles(theme)} />
                <Component {...pageProps} />
              </Wallet.Provider>
            </WagmiConfig>
          </Provider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}
