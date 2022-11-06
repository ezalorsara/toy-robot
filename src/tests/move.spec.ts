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
});
