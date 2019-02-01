import React from "react";

export interface Props {
  name: string;
}

export const Vertical: React.FunctionComponent<Props> = ({ name }) => (
  <svg height="500" width="500">
    <rect width="500" height="500" fill="white" />
    <circle cx="130" cy="250" r="80" fill="black" />
    <text x="250" y="270" fontSize="32">
      {name}
    </text>
  </svg>
);
