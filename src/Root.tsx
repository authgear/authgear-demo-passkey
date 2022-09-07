import { ReactElement, useContext, useCallback } from "react";
import cn from "classnames";
import { tokens } from "@fluentui/react-theme";
import { makeStyles, Text, Button, Image } from "@fluentui/react-components";
import authgear, { Page } from "@authgear/web";
import { UserInfoContext } from "./UserInfoContext";

import logo from "./logo.svg";
import styles from "./Root.module.css";

const useStyles = makeStyles({
  background: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
  secondaryText: {
    color: tokens.colorNeutralForeground4,
  },
});

export default function Root(): ReactElement {
  const classes = useStyles();
  const { userInfo } = useContext(UserInfoContext);

  const redirectURI = window.location.origin + "/";

  const onClickSettings = useCallback(() => {
    authgear.open(Page.Settings).catch((err) => console.error(err));
  }, []);
  const onClickSignOut = useCallback(() => {
    authgear
      .logout({
        redirectURI,
      })
      .catch((err) => console.error(err));
  }, [redirectURI]);

  const email = userInfo?.email ?? "-";
  const sub = userInfo?.sub ?? "-";

  return (
    <div className={cn(classes.background, styles.root)}>
      <div className={styles.content}>
        <Text block={true} as="h1" size={400}>
          Welcome!
        </Text>
        <div>
          <Text block={true} as="p" size={500} weight="semibold">
            {email}
          </Text>
          <Text
            className={classes.secondaryText}
            block={true}
            as="p"
            size={200}
          >
            {sub}
          </Text>
        </div>
        <div className={styles.buttons}>
          <Button appearance="primary" onClick={onClickSettings}>
            Profile and Account Settings
          </Button>
          <Button appearance="secondary" onClick={onClickSignOut}>
            Sign out
          </Button>
        </div>
        <div className={styles.footer}>
          <Text size={200}>Powered by</Text>
          <Image src={logo} />
        </div>
      </div>
    </div>
  );
}
