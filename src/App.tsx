import { lazy, Suspense, useEffect, useState } from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import authgear from "@authgear/web";

import Authenticated from "./Authenticated";
import { UserInfoContextProvider } from "./UserInfoContext";

const Root = lazy(async () => import("./Root"));
const OAuthRedirect = lazy(async () => import("./OAuthRedirect"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index={true}
          element={
            <Suspense fallback={null}>
              <Authenticated>
                <Root />
              </Authenticated>
            </Suspense>
          }
        />
        <Route
          path="/oauth-redirect"
          element={
            <Suspense fallback={null}>
              <OAuthRedirect />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

async function init() {
  const clientID = process.env.CLIENT_ID;
  const endpoint = process.env.ENDPOINT;
  await authgear.configure({
    clientID,
    endpoint,
  });
}

export default function App() {
  const [ok, setOK] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    init().then(
      () => setOK(true),
      (e) => {
        setError(e);
        console.error(e);
      }
    );
  }, []);

  if (error != null) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  if (!ok) {
    return null;
  }

  return (
    <FluentProvider theme={webLightTheme}>
      <UserInfoContextProvider>
        <AppRoutes />
      </UserInfoContextProvider>
    </FluentProvider>
  );
}
