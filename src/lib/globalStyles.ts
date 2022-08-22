import { MantineTheme } from "@mantine/core";

const globalStyles = (theme: MantineTheme) => {
  const isDark = theme.colorScheme === "dark";

  return {
    body: {
      ...theme.fn.fontStyles(),

      backgroundColor: isDark ? theme.colors.ctp_crust[7] : theme.white,
      color: isDark ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
    },
  };
};

export default globalStyles;
