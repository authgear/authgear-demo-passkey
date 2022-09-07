import { useEffect, useContext, ReactElement } from "react";
import authgear from "@authgear/web";
import { UserInfoContext } from "./UserInfoContext";
import { useNavigate } from "react-router-dom";

export default function OAuthRedirect(): ReactElement | null {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserInfoContext);

  useEffect(() => {
    authgear.finishAuthentication().then(
      (result) => {
        setUserInfo(result.userInfo);
        navigate("/");
      },
      (err) => {
        console.error(err);
      }
    );
  }, [navigate, setUserInfo]);

  return null;
}
