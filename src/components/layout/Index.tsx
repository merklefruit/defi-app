import { useState, useEffect } from "react";
import { AppShell } from "@mantine/core";
import Head from "next/head";
import Header from "src/components/layout/header";
import Navbar from "src/components/layout/navbar";
import config from "config";

type IProps = { pageTitle?: string; children: React.ReactNode };

export default function Layout({ pageTitle, children }: IProps) {
  const [initialLoad, setInitialLoad] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => setInitialLoad(true), []);
  if (!initialLoad) return <></>;

  return (
    <>
      <Head>
        <title>{`${pageTitle ?? ""} ${config.appName}`}</title>
      </Head>
      <AppShell
        fixed
        padding="lg"
        navbarOffsetBreakpoint="sm"
        navbar={<Navbar hidden={!showNav} />}
        header={<Header showNavbar={showNav} setShowNavbar={setShowNav} />}
      >
        {children}
      </AppShell>
    </>
  );
}
