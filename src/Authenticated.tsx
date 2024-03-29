import { ReactNode, useEffect, ReactElement } from "react";
import authgear, { PromptOption } from "@authgear/web";

export interface AuthenticatedProps {
  fallback?: ReactNode;
  children?: ReactNode;
}

export default function Authenticated(
  props: AuthenticatedProps,
): ReactElement | null {
  const { children, fallback } = props;
  const isAuthenticated = authgear.sessionState === "AUTHENTICATED";

  const redirectURI = window.location.origin + "/oauth-redirect";

  useEffect(() => {
    if (!isAuthenticated) {
      authgear
        .startAuthentication({
          redirectURI,
          prompt: PromptOption.Login,
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

  // @ts-expect-error
  return fallback;
}
