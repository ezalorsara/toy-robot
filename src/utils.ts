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
