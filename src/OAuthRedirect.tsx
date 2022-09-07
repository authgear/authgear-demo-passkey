import { useEffect } from "react";
import authgear from "@authgear/web";
import { useNavigate } from "react-router-dom";

export default function OAuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    authgear.finishAuthentication().then(
      (_result) => {
        navigate("/");
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return null;
}
