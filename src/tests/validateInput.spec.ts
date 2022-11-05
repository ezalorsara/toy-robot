import { validateInput } from "../utils";

describe("RegExp: input command PLACE x,y,f", function () {
  it("should match the expected input of command PLACE x,y,f north facing", function () {
    const input = "PLACE 0,0,NORTH";
    expect(validateInput(input)).toBe(true);
  });

  it("should match the expected input of command PLACE x,y,f east facing", function () {
    const input = "PLACE 0,0,EAST";
    expect(validateInput(input)).toBe(true);
  });

  it("should match the expected input of command PLACE x,y,f south facing", function () {
    const input = "PLACE 0,0,SOUTH";
    expect(validateInput(input)).toBe(true);
  });

  it("should match the expected input of command PLACE x,y,f west facing", function () {
    const input = "PLACE 0,0,WEST";
    expect(validateInput(input)).toBe(true);
  });

  it("should fail not match the expected input of command PLACE x,y,f", function () {
    const input = "PLACE 0,0,SOUTH-EAST";
    expect(validateInput(input)).toBe(false);
  });

  it("should fail x must be a number of command PLACE x,y,f", function () {
    const input = "PLACE x,0,SOUTH";
    expect(validateInput(input)).toBe(false);
  });

  it("should fail x must be a positive number of command PLACE x,y,f", function () {
    const input = "PLACE -1,y,SOUTH";
    expect(validateInput(input)).toBe(false);
  });

  it("should fail y must be a number of command PLACE x,y,f", function () {
    const input = "PLACE 0,y,SOUTH";
    expect(validateInput(input)).toBe(false);
  });

  it("should fail y must be a positive number of command PLACE x,y,f", function () {
    const input = "PLACE 0,-1,SOUTH";
    expect(validateInput(input)).toBe(false);
  });

  it("should fail PLACE must be uppercase of command PLACE x,y,f", function () {
    const input = "place 0,-1,SOUTH";
    expect(validateInput(input)).toBe(false);
  });
});
