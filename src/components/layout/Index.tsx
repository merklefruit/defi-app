import { useState, useEffect } from "react";
import { AppShell } from "@mantine/core";
import Head from "next/head";
import Header from "src/components/layout/Header";
import Navbar from "src/components/layout/Navbar";
import config from "config";

export default function Layout({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) {
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
        padding="md"
        navbarOffsetBreakpoint="sm"
        navbar={<Navbar hidden={!showNav} />}
        header={<Header showNavbar={showNav} setShowNavbar={setShowNav} />}
      >
        {children}
      </AppShell>
    </>
  );
}
