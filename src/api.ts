export const DEFAULT_TABLE_X_UNIT = 5;
export const DEFAULT_TABLE_Y_UNIT = 5;

export enum FACING {
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

export type Robot = {
  id: string;
  x: number;
  y: number;
  f: FACING;
};

export type Robots = Robot[];
