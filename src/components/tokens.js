export const themes = {
  dark: {
    page: "#12181F",
    paper: "#1B232D",
    paperLine: "#2C3644",
    navy: "#F2EFE6",
    navySoft: "#B9C2CC",
    brass: "#D9A94B",
  },
  light: {
    page: "#F7F4EB",
    paper: "#EFE9D8",
    paperLine: "#DCD3B8",
    navy: "#1B2A41",
    navySoft: "#3C4C63",
    brass: "#A87C2C",
  },
};

export const getTokens = (mode) => themes[mode] ?? themes.light;
