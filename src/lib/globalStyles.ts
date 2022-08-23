import { MantineTheme } from "@mantine/core"
import catppuccin from "./catppuccin"

const globalStyles = (theme: MantineTheme) => {
  const isDark = theme.colorScheme === "dark"

  return {
    body: {
      ...theme.fn.fontStyles(),

      backgroundColor: isDark ? catppuccin.mocha.base : theme.white,
      color: isDark ? catppuccin.mocha.text : theme.black,
    },
  }
}

export default globalStyles
