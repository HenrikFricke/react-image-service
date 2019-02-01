import React from "react";

import { storiesOf } from "@storybook/react";

import { Vertical } from "./Vertical";

storiesOf("Vertical", module).add("default", () => (
  <Vertical name="Otto's Burger" />
));
