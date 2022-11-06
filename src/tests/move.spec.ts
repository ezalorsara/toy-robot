import { DEFAULT_TABLE_X_UNIT, DEFAULT_TABLE_Y_UNIT, FACING } from "../api";
import { makeMove } from "../robot";

describe("Command MOVE", function () {
  it("should increment by 1 the y value when facing NORTH", function () {
    const robots = [{ id: "genesis", x: 0, y: 0, f: FACING.NORTH }];
    const [{ x, y }] = makeMove({
      robotId: "genesis",
      robots,
      tableXUnit: DEFAULT_TABLE_X_UNIT,
      tableYUnit: DEFAULT_TABLE_Y_UNIT,
    });
    expect(y).toBe(1);
    expect(x).toBe(0);
  });

  it("should decrement by 1 the y value when facing SOUTH", function () {
    const robots = [{ id: "genesis", x: 1, y: 1, f: FACING.SOUTH }];
    const [{ x, y }] = makeMove({
      robotId: "genesis",
      robots,
      tableXUnit: DEFAULT_TABLE_X_UNIT,
      tableYUnit: DEFAULT_TABLE_Y_UNIT,
    });
    expect(y).toBe(0);
    expect(x).toBe(1);
  });

  it("should increment by 1 the x value when facing EAST", function () {
    const robots = [{ id: "genesis", x: 0, y: 0, f: FACING.EAST }];
    const [{ x, y }] = makeMove({
      robotId: "genesis",
      robots,
      tableXUnit: DEFAULT_TABLE_X_UNIT,
      tableYUnit: DEFAULT_TABLE_Y_UNIT,
    });
    expect(y).toBe(0);
    expect(x).toBe(1);
  });

  it("should decrement by 1 the x value when facing WEST", function () {
    const robots = [{ id: "genesis", x: 1, y: 1, f: FACING.WEST }];
    const [{ x, y }] = makeMove({
      robotId: "genesis",
      robots,
      tableXUnit: DEFAULT_TABLE_X_UNIT,
      tableYUnit: DEFAULT_TABLE_Y_UNIT,
    });
    expect(y).toBe(1);
    expect(x).toBe(0);
  });

  it("should fail moving outside the table east x axis", function () {
    const robots = [{ id: "genesis", x: 4, y: 1, f: FACING.EAST }];
    const [{ x, y }] = makeMove({
      robotId: "genesis",
      robots,
      tableXUnit: DEFAULT_TABLE_X_UNIT,
      tableYUnit: DEFAULT_TABLE_Y_UNIT,
    });
    expect(y).toBe(1);
    expect(x).toBe(4); // expected not to increment since the robot will fall to the table
  });

  it("should fail moving outside the table west x axis", function () {
    const robots = [{ id: "genesis", x: 0, y: 1, f: FACING.WEST }];
    const [{ x, y }] = makeMove({
      robotId: "genesis",
      robots,
      tableXUnit: DEFAULT_TABLE_X_UNIT,
      tableYUnit: DEFAULT_TABLE_Y_UNIT,
    });
    expect(y).toBe(1);
    expect(x).toBe(0); // expected not to decrement since the robot will fall to the table
  });

  it("should fail moving outside the table north y axis", function () {
    const robots = [{ id: "genesis", x: 0, y: 4, f: FACING.NORTH }];
    const [{ x, y }] = makeMove({
      robotId: "genesis",
      robots,
      tableXUnit: DEFAULT_TABLE_X_UNIT,
      tableYUnit: DEFAULT_TABLE_Y_UNIT,
    });
    expect(y).toBe(4); // expected not to increment since the robot will fall to the table
    expect(x).toBe(0);
  });

  it("should fail moving outside the table south y axis", function () {
    const robots = [{ id: "genesis", x: 0, y: 0, f: FACING.SOUTH }];
    const [{ x, y }] = makeMove({
      robotId: "genesis",
      robots,
      tableXUnit: DEFAULT_TABLE_X_UNIT,
      tableYUnit: DEFAULT_TABLE_Y_UNIT,
    });
    expect(y).toBe(0); // expected not to increment since the robot will fall to the table
    expect(x).toBe(0);
  });
});
