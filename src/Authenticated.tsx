import { ReactNode, useEffect, ReactElement } from "react";
import authgear from "@authgear/web";

export interface AuthenticatedProps {
  children?: ReactNode;
}

export default function Authenticated(
  props: AuthenticatedProps
): ReactElement | null {
  const { children } = props;
  const isAuthenticated = authgear.sessionState === "AUTHENTICATED";

  const redirectURI = window.location.origin + "/oauth-redirect";

  useEffect(() => {
    if (!isAuthenticated) {
      authgear
        .startAuthentication({
          redirectURI,
          prompt: "login",
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isAuthenticated, redirectURI]);

  if (isAuthenticated) {
    // @ts-expect-error
    return children ?? null;
  }

  return null;
}
