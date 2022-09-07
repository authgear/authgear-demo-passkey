import { useContext } from "react";
import cn from "classnames";
import { tokens } from "@fluentui/react-theme";
import { makeStyles, Text, Button, Image } from "@fluentui/react-components";
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

export default function Root() {
  const classes = useStyles();
  const { userInfo } = useContext(UserInfoContext);

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
          <Button appearance="primary">Profile and Account Settings</Button>
          <Button appearance="secondary">Sign out</Button>
        </div>
        <div className={styles.footer}>
          <Text size={200}>Powered by</Text>
          <Image src={logo} />
        </div>
      </div>
    </div>
  );
}
