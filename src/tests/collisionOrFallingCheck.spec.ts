import {
  Robots,
  FACING,
  DEFAULT_TABLE_X_UNIT,
  DEFAULT_TABLE_Y_UNIT,
} from "../api";
import { collisionOrFallingCheck } from "../utils";

describe("Collision or Falling Checker", function () {
  it("should return PASSED provided by robots correct value [{x:0, y:0, f: FACING.NORTH}]", function () {
    const robots: Robots = [{ id: "genesis", x: 0, y: 0, f: FACING.NORTH }];
    expect(
      collisionOrFallingCheck({
        robots,
        tableXUnit: DEFAULT_TABLE_X_UNIT,
        tableYUnit: DEFAULT_TABLE_Y_UNIT,
      })
    ).toBe("PASSED");
  });

  it("should return COLLISION if there is robot with same x and y value", function () {
    const robots: Robots = [
      { id: "genesis", x: 0, y: 0, f: FACING.NORTH },
      { id: "2ndrobot", x: 0, y: 0, f: FACING.EAST },
    ];
    expect(
      collisionOrFallingCheck({
        robots,
        tableXUnit: DEFAULT_TABLE_X_UNIT,
        tableYUnit: DEFAULT_TABLE_Y_UNIT,
      })
    ).toBe("COLLISION");
  });

  it("should return FALLING if there is robot that x value is negative", function () {
    const robots: Robots = [
      { id: "genesis", x: -1, y: 0, f: FACING.NORTH },
      { id: "2ndrobot", x: 0, y: 0, f: FACING.EAST },
    ];
    expect(
      collisionOrFallingCheck({
        robots,
        tableXUnit: DEFAULT_TABLE_X_UNIT,
        tableYUnit: DEFAULT_TABLE_Y_UNIT,
      })
    ).toBe("FALLING");
  });

  it("should return FALLING if there is robot that x value is negative", function () {
    const robots: Robots = [
      { id: "genesis", x: 1, y: -1, f: FACING.NORTH },
      { id: "2ndrobot", x: 0, y: 0, f: FACING.EAST },
    ];
    expect(
      collisionOrFallingCheck({
        robots,
        tableXUnit: DEFAULT_TABLE_X_UNIT,
        tableYUnit: DEFAULT_TABLE_Y_UNIT,
      })
    ).toBe("FALLING");
  });

  it("should return FALLING if there is robot that x value equal or exceed tableXUnit", function () {
    const robots: Robots = [
      { id: "genesis", x: 5, y: 0, f: FACING.NORTH },
      { id: "2ndrobot", x: 0, y: 0, f: FACING.EAST },
    ];
    expect(
      collisionOrFallingCheck({
        robots,
        tableXUnit: DEFAULT_TABLE_X_UNIT,
        tableYUnit: DEFAULT_TABLE_Y_UNIT,
      })
    ).toBe("FALLING");
  });

  it("should return FALLING if there is robot that y value equal or exceed tableYUnit", function () {
    const robots: Robots = [
      { id: "genesis", x: 0, y: 5, f: FACING.NORTH },
      { id: "2ndrobot", x: 0, y: 0, f: FACING.EAST },
    ];
    expect(
      collisionOrFallingCheck({
        robots,
        tableXUnit: DEFAULT_TABLE_X_UNIT,
        tableYUnit: DEFAULT_TABLE_Y_UNIT,
      })
    ).toBe("FALLING");
  });
});
