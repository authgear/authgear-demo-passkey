/* global process */
import("classnames").finally(() => {});
import("react").finally(() => {});

if (process.env.NODE_ENV === "production") {
  import("@fluentui/react-components").finally(() => {});
  import("@fluentui/react-theme").finally(() => {});
  import("react-dom").finally(() => {});
  import("react-router-dom").finally(() => {});
}
