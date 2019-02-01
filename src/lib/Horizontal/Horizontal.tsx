import React from "react";

export interface Props {
  name: string;
}

export const Horizontal: React.FunctionComponent<Props> = ({ name }) => (
  <svg height="500" width="500">
    <rect width="500" height="500" fill="white" />
    <circle cx="250" cy="200" r="130" fill="black" />
    <text x="250" y="400" textAnchor="middle" fontSize="32">
      {name}
    </text>
  </svg>
);
