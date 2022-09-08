/* global process */

import { lazy, Suspense, useEffect, useState, ReactElement } from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import authgear from "@authgear/web";

import Loading from "./Loading";
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
            <Suspense fallback={<Loading />}>
              <Authenticated fallback={<Loading />}>
                <Root />
              </Authenticated>
            </Suspense>
          }
        />
        <Route
          path="/oauth-redirect"
          element={
            <Suspense fallback={<Loading />}>
              <OAuthRedirect />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

async function init() {
  // @ts-expect-error
  const clientID = process.env.CLIENT_ID;
  // @ts-expect-error
  const endpoint = process.env.ENDPOINT;
  await authgear.configure({
    clientID,
    endpoint,
  });
}

export default function App(): ReactElement | null {
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
    return <Loading />;
  }

  return (
    <FluentProvider theme={webLightTheme}>
      <UserInfoContextProvider>
        <AppRoutes />
      </UserInfoContextProvider>
    </FluentProvider>
  );
}
