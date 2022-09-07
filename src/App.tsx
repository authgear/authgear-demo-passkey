import { lazy, Suspense } from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Root = lazy(async () => import("./Root"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index={true}
          element={
            <Suspense fallback={null}>
              <Root />
            </Suspense>
          }
        />
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
