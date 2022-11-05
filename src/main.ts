import { rl, showCommands, validateInput } from "./utils";

showCommands();

const askCommand = () => {
  rl.question("Enter command: ", (input) => {
    if (!validateInput(input)) {
      rl.write(
        "Ooops you enter wrong command, please see command list above\n"
      );
    }
    askCommand();
  });
};

askCommand();
