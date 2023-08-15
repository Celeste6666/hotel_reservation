import { theme } from "antd";
import type { ThemeConfig } from "antd";

const cus_theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#3a6ac3",
    colorError: "#f46a6a",
    colorSuccess: "#eeea78",
    colorInfo: "#a378e0",
    colorWarning: "#dc9e6b",
  },
  algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
};

export default cus_theme;
