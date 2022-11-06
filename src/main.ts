import {
  COMMAND,
  DEFAULT_TABLE_X_UNIT,
  DEFAULT_TABLE_Y_UNIT,
  FACING,
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
let robots: Robots = [{ id: activeRobotId, x: 0, y: 0, f: FACING.NORTH }];
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
        doPlace(activeRobotId, input);
        break;
      case COMMAND.MOVE:
        break;
      case COMMAND.LEFT:
        break;
      case COMMAND.RIGHT:
        break;
      case COMMAND.REPORT:
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

const doPlace = (robotId: string, input: string) => {
  const [placeValue, error] = getPlaceInputObjectValue(input);

  if (error || placeValue === null) {
    rl.write(`${error?.message ?? "Oops unable to get object value"}\n`);
    return;
  }

  const tmpRobots = robots.map((robot) => {
    if (robot.id === robotId) {
      return {
        ...robot,
        x: placeValue.x,
        y: placeValue.y,
        f: placeValue.f,
      };
    }

    return robot;
  }); // Copy of robots where input value is applied and will check for collision or falling

  const result = collisionOrFallingCheck({
    robots: tmpRobots,
    tableXUnit,
    tableYUnit,
  });

  if (result === "COLLISION") {
    rl.write(
      "Ooops the Robot will collide with another object/robot, please try again\n"
    );
    return;
  }

  if (result === "FALLING") {
    rl.write("Ooops the Robot will fall!, please try again\n");
    return;
  }

  robots = tmpRobots; // seems everything is fine assign to global robots
};

const doMove = () => {};

const doReport = () => {};

askCommand();
