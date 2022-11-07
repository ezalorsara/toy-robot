# Toy Robot Coding Challenge

The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are noother obstructions on the table surface. The robot is free to roam around the surface of the table, but must be preventedfrom falling to destruction. Any movement that would result in the robot falling from the table must be prevented,however further valid movement commands must still be allowed.

Create a console application that can read in commands of the following form -
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT

PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
The origin (0,0)can be considered to be the SOUTH WEST most corner.
It is required that the first command to the robot is a PLACEcommand, after that, any sequence of commands may be issued, in any order, including another PLACE command.
The application should discard all commands in the sequence until a valid PLACE command has been executed.
MOVE willmove the toy robot one unit forward in the direction it is currently facing.

LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
REPORT will announce the X,Y and F of the robot.
This can be in any form, but standard output is sufficient.
A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
Input canbe from a file, or from standard input, as the developer chooses.Provide test data to exercise the application.
It is not required to provide any graphical output showing the movement of the toy robot.
The application should handle error states appropriately and be robust to user input.

## Constraints:

The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot. Anymove that would cause the robot to fall must be ignored.

## Tech

This is use node typescript:

- [Jest](https://jestjs.io/) - JavaScript testing framework!
- [NODE JS](https://nodejs.org/en/) - open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications

## Installation

This Toy Robot cli game requires [Node.js](https://nodejs.org/) v16+ to run.

- you must have node js v16+ installed in your machine [Download link](https://nodejs.org/en/download/)
- you must have git installed in your machine [How to install git?](https://github.com/git-guides/install-git)

clone the repository
Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/ezalorsara/toy-robot
cd toy-robot
npm i
npm run start
```

for testing run

```sh
npm run test
```
