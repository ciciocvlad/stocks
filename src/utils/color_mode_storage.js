const getSystemColorMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const getInitialColorMode = () => {
  const persistedSettings = localStorage.getItem("colorMode");
  return !!persistedSettings ? persistedSettings : getSystemColorMode();
};
