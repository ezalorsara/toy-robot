import {
  COMMAND,
  DEFAULT_TABLE_X_UNIT,
  DEFAULT_TABLE_Y_UNIT,
  Robots,
} from "./api";
import { makeLeft, makeMove, makePlace, makeReport, makeRight } from "./robot";
import {
  getInputCommandEnumValue,
  rl,
  showCommands,
  validateInput,
} from "./utils";

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
        robots = makePlace({
          robotId: activeRobotId,
          robots,
          input,
          tableXUnit,
          tableYUnit,
        });
        break;
      case COMMAND.MOVE:
        robots = makeMove({
          robotId: activeRobotId,
          robots,
          tableXUnit,
          tableYUnit,
        });
        break;
      case COMMAND.LEFT:
        robots = makeLeft({ robotId: activeRobotId, robots: robots });
        break;
      case COMMAND.RIGHT:
        robots = makeRight({ robotId: activeRobotId, robots: robots });
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

askCommand(); // run main command
