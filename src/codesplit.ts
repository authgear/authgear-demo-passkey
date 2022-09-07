/* global process */
import("classnames").finally(() => {});
import("react").finally(() => {});

// @ts-expect-error
if (process.env.NODE_ENV === "production") {
  import("@fluentui/react-components").finally(() => {});
  import("@fluentui/react-theme").finally(() => {});
  import("react-dom").finally(() => {});
  import("react-router-dom").finally(() => {});
}
