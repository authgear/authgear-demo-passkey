import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <AppRoutes />
    </FluentProvider>
  );
}
