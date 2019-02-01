import React from "react";

import { storiesOf } from "@storybook/react";

import { Horizontal } from "./Horizontal";

storiesOf("Horizontal", module).add("default", () => (
  <Horizontal name="Otto's Burger" />
));
