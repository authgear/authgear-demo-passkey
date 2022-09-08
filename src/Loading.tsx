import { ReactElement } from "react";
import cn from "classnames";
import { makeStyles, Text } from "@fluentui/react-components";
import { tokens } from "@fluentui/react-theme";

const useStyles = makeStyles({
  background: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
});

import styles from "./Loading.module.css";

export default function Loading(): ReactElement {
  const classes = useStyles();
  return (
    <div className={cn(styles.root, classes.background)}>
      <Text as="h1" block={true} size={900}>
        Signup/Login to Authgear Example
      </Text>
    </div>
  );
}
