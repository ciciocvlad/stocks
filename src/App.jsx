import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./theme/theme";
import { Items } from "./components/Items/Items";
import { Stocks } from "./components/Stocks/Stocks";
import { AppBar } from "./components/AppBar/AppBar";
import { CssBaseline, Toolbar } from "@mui/material";
import { getInitialColorMode } from "./utils/color_mode_storage";
import useLocalStorage from "use-local-storage";
import { ContextProvider } from "./context/ContextProvider";

export default function App() {
  const [colorMode, setColorMode] = useLocalStorage(
    "colorMode",
    getInitialColorMode(),
  );

  return (
    <ThemeProvider theme={createTheme(colorMode)}>
      <ContextProvider>
        <CssBaseline />
        <BrowserRouter>
          <AppBar colorMode={colorMode} setColorMode={setColorMode} />
          <Toolbar />
          <Routes>
            <Route index element={<Items />} />
            <Route path="/stocks" element={<Stocks />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  );
}
