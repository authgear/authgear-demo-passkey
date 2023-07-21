import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  createContext,
  ReactNode,
  ReactElement,
} from "react";
import authgear, { UserInfo } from "@authgear/web";

export interface UserInfoContextValue {
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo) => void;
}

export const UserInfoContext = createContext<UserInfoContextValue>({
  userInfo: null,
  setUserInfo: () => {},
});

export interface UserInfoContextProviderProps {
  children?: ReactNode;
}

export function UserInfoContextProvider(
  props: UserInfoContextProviderProps,
): ReactElement | null {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const fetchUserInfo = useCallback(() => {
    authgear.fetchUserInfo().then(
      (userInfo) => setUserInfo(userInfo),
      (err) => console.error(err),
    );
  }, []);

  useEffect(() => {
    authgear.delegate = {
      onSessionStateChange: (container) => {
        if (container.sessionState !== "AUTHENTICATED") {
          setUserInfo(null);
        }
        if (container.sessionState === "AUTHENTICATED") {
          fetchUserInfo();
        }
      },
    };
    if (authgear.sessionState === "AUTHENTICATED") {
      fetchUserInfo();
    }
  }, [fetchUserInfo]);

  const { children } = props;

  const value = useMemo(() => {
    return {
      userInfo,
      setUserInfo,
    };
  }, [userInfo]);

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
}
