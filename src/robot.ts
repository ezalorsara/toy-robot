import { FACING, Robots } from "./api";
import { collisionOrFallingCheck, getPlaceInputObjectValue, rl } from "./utils";

const getRobot = (id: string, robots: Robots) => {
  const robot = robots.find((robot) => robot.id === id);
  return robot;
};

/**
 * ----------- Command: PLACE x,y,f --------------
 */
type MakePlaceOptions = {
  robotId: string;
  robots: Robots;
  input: string;
  tableXUnit: number;
  tableYUnit: number;
};

export const makePlace = (options: MakePlaceOptions): Robots => {
  const { robotId, robots, input, tableXUnit, tableYUnit } = options;
  const [placeValue, error] = getPlaceInputObjectValue(input);
  let tmpRobots: Robots = [...robots]; // Copy of robots where input value is applied and will check for collision or falling
  if (error || placeValue === null) {
    rl.write(`${error?.message ?? "Oops unable to get object value"}\n`);
    return tmpRobots;
  }

  if (robots.length === 0) {
    tmpRobots = [
      { id: robotId, x: placeValue.x, y: placeValue.y, f: placeValue.f },
    ];
  } else {
    tmpRobots = robots.map((robot) => {
      if (robot.id === robotId) {
        return {
          ...robot,
          x: placeValue.x,
          y: placeValue.y,
          f: placeValue.f,
        };
      }
      return robot;
    });
  }

  const result = collisionOrFallingCheck({
    robots: tmpRobots,
    tableXUnit,
    tableYUnit,
  });

  if (result === "COLLISION") {
    rl.write(
      "Ooops the Robot will collide with another object/robot, please try again\n"
    );
    return robots;
  }

  if (result === "FALLING") {
    rl.write("Ooops the Robot will fall!, please try again\n");
    return robots;
  }

  return tmpRobots; // seems everything is fine return the updated robots
};

/**
 * ----------- Command: MOVE --------------
 */

type MakeMoveOptions = {
  robotId: string;
  robots: Robots;
  tableXUnit: number;
  tableYUnit: number;
};

export const makeMove = (options: MakeMoveOptions) => {
  const { robotId, robots, tableXUnit, tableYUnit } = options;
  const robot = getRobot(robotId, robots);
  if (typeof robot === "undefined") {
    rl.write("Ooops please PLACE a Robot first!, please try again\n");
    return robots;
  }

  const { x, y, f } = robot;
  let newX = x;
  let newY = y;
  switch (f) {
    case FACING.NORTH:
      newY = y + 1;
      break;
    case FACING.SOUTH:
      newY = y - 1;
      break;
    case FACING.EAST:
      newX = x + 1;
      break;
    case FACING.WEST:
      newX = x - 1;
      break;
  }
  const tmpRobots = [...robots].map((item) => {
    if (item.id === robot.id) {
      return {
        ...item,
        x: newX,
        y: newY,
      };
    } else {
      return item;
    }
  });

  const result = collisionOrFallingCheck({
    robots: tmpRobots,
    tableXUnit,
    tableYUnit,
  });

  if (result === "COLLISION") {
    rl.write(
      "Ooops the Robot will collide with another object/robot, please try again\n"
    );
    return robots;
  }

  if (result === "FALLING") {
    rl.write("Ooops the Robot will fall!, please try again\n");
    return robots;
  }

  return tmpRobots; // seems everything is fine return the updated robots
};

const makeLeft = () => {};

const makeRight = () => {};

export const makeReport = (robotId: string, robots: Robots) => {
  const robot = getRobot(robotId, robots);
  if (typeof robot === "undefined") {
    rl.write("Ooops please PLACE a Robot first!, please try again\n");
    return "";
  }
  const { x, y, f } = robot;
  const output = `Output: ${x},${y},${f}`;
  rl.write(`${output}\n`);
  return output;
};
