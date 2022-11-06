import {
  COMMAND,
  DEFAULT_TABLE_X_UNIT,
  DEFAULT_TABLE_Y_UNIT,
  Robots,
} from "./api";
import {
  collisionOrFallingCheck,
  getInputCommandEnumValue,
  getPlaceInputObjectValue,
  rl,
  showCommands,
  validateInput,
} from "./utils";

/** GLOBAL VAR */
let activeRobotId = "genesis";
let robots: Robots = [];
let tableXUnit = DEFAULT_TABLE_X_UNIT;
let tableYUnit = DEFAULT_TABLE_Y_UNIT;

showCommands();
const askCommand = () => {
  rl.question("Enter command: ", (input: string) => {
    if (!validateInput(input)) {
      rl.write(
        "Ooops you enter wrong command, please see command list above\n"
      );
      askCommand();
      return;
    }

    switch (getInputCommandEnumValue(input)) {
      case COMMAND.PLACE:
        robots = makePlace({ robotId: activeRobotId, robots, input });
        break;
      case COMMAND.MOVE:
        break;
      case COMMAND.LEFT:
        break;
      case COMMAND.RIGHT:
        break;
      case COMMAND.REPORT:
        makeReport(activeRobotId, robots);
        break;

      default:
        /**
         * This should not fire
         */
        rl.write("Ooops something wrong, please run again\n");
        break;
    }

    askCommand();
  });
};

/**
 *----------- ROBOT COMMAND ACTIONS -----------------
 */
type PlaceOptions = {
  robotId: string;
  robots: Robots;
  input: string;
};

const makePlace = (options: PlaceOptions): Robots => {
  const { robotId, robots, input } = options;
  const [placeValue, error] = getPlaceInputObjectValue(input);
  let tmpRobots: Robots = []; // Copy of robots where input value is applied and will check for collision or falling
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
  }

  if (result === "FALLING") {
    rl.write("Ooops the Robot will fall!, please try again\n");
  }

  return tmpRobots; // seems everything is fine return and assign to global robots
};

const makeMove = () => {};

export const makeReport = (activeRobotId: string, robots: Robots) => {
  const robot = robots.find((robot) => robot.id === activeRobotId);
  if (typeof robot === "undefined") {
    rl.write("Ooops please PLACE a Robot first!, please try again\n");
    return;
  }
  const { x, y, f } = robot;
  const output = `Output: ${x},${y},${f}`;
  rl.write(`${output}\n`);
  return output;
};

askCommand();
