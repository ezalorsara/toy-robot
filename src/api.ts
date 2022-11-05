export const NO_X_UNIT = 5;
export const NO_Y_UNIT = 5;

export enum DIRECTION {
  NORTH = "NORTH",
  EAST = "EAST",
  SOUTH = "SOUTH",
  WEST = "WEST",
}

export enum COMMAND {
  PLACE = "PLACE",
  MOVE = "MOVE",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  REPORT = "REPORT",
}

type Robot = {
  id: string;
  x: number;
  y: number;
  direction: DIRECTION;
};

type Robots = Robot[];
