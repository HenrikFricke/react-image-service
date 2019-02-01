import { Horizontal } from "./Horizontal/Horizontal";
import { Vertical } from "./Vertical/Vertical";

export interface Props {
  name: string;
}

export interface Lib {
  [key: number]: React.FunctionComponent<Props>;
}

const lib: Lib = {
  1: Horizontal,
  2: Vertical
};

export default lib;
