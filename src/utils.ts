import { COMMAND, FACING, Robot, Robots } from "./api";
import * as readline from "readline";
import { stdin as input, stdout as output } from "node:process";

export const rl = readline.createInterface({ input, output });

export const validateInput = (input: string) => {
  const regex: string[] = [
    "^PLACE [0-9]+[0-9]*,[0-9]+[0-9]*,NORTH$",
    "^PLACE [0-9]+[0-9]*,[0-9]+[0-9]*,EAST$",
    "^PLACE [0-9]+[0-9]*,[0-9]+[0-9]*,SOUTH$",
    "^PLACE [0-9]+[0-9]*,[0-9]+[0-9]*,WEST$",
    "^MOVE$",
    "^LEFT$",
    "^RIGHT$",
    "^REPORT$",
  ];
  var re = new RegExp(regex.join("|"), "gm");
  return re.test(input);
};

export const showCommands = () => {
  rl.write("********** TOY ROBOT ************\n");
  rl.write("********** LIST COMMAND *********\n");
  rl.write("PLACE X,Y,F\n");
  rl.write("MOVE\n");
  rl.write("LEFT\n");
  rl.write("RIGHT\n");
  rl.write("REPORT\n");
  rl.write("*********************************\n\n");
};

export const getInputCommandEnumValue = (validInput: string) => {
  if (validInput.includes("PLACE")) {
    return COMMAND.PLACE;
  }

  return validInput; // we just return the valid input value since they are the same value with its enum
};

export type RobotPosition = Pick<Robot, "x" | "y" | "f">;

type GetPlaceInputObjectValueResult = [RobotPosition | null, Error | null];

export const getPlaceInputObjectValue = (
  validInput: string
): GetPlaceInputObjectValueResult => {
  try {
    const [x, y, f] = validInput.replace("PLACE ", "").split(",");
    return [{ x: parseInt(x), y: parseInt(y), f: f as FACING }, null];
  } catch (e) {
    return [
      null,
      new Error("Oops unable to get object value", {
        cause: JSON.stringify(e),
      }),
    ];
  }
};

type CollisionOrFallingCheckOptions = {
  robots: Robots;
  tableXUnit: number;
  tableYUnit: number;
};

type CollisionOrFallingCheckResult = "PASSED" | "FALLING" | "COLLISION";

export const collisionOrFallingCheck = (
  options: CollisionOrFallingCheckOptions
): CollisionOrFallingCheckResult => {
  const { robots, tableXUnit, tableYUnit } = options;

  /**
   * check if there is a falling robot
   * x should be withing 0 to (noBoxXUnit - 1) since we start from 0
   * y should be withing 0 to (noBoxYUnit - 1) since we start from 0
   */
  const fallingRobot = robots.find(
    ({ x, y }) => x >= tableXUnit || y >= tableYUnit || x < 0 || y < 0
  );

  if (fallingRobot) {
    return "FALLING";
  }

  /**
   * check if there is a collision with another object/robot in the table
   */
  const robotsXY = robots.map(({ x, y }) => `${x},${y}`);
  const uniqueRobotsXY = Array.from(new Set(robotsXY));
  if (robots.length !== uniqueRobotsXY.length) {
    return "COLLISION";
  }

  return "PASSED";
};
