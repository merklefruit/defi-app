import Head from "next/head";
import { Container } from "@mantine/core";
import config from "config";

export default function Layout({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{`${pageTitle ?? ""} ${config.appName}`}</title>
      </Head>
      <Container>{children}</Container>
    </>
  );
}
