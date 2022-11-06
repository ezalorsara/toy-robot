import { FACING, Robots } from "../api";
import { makeRight } from "../robot";

describe("Command RIGHT", function () {
  it("should fail no robot in the table", function () {
    const robots: Robots = [];
    const result = makeRight({
      robotId: "genesis",
      robots,
    });
    expect(result[0]).toBe(undefined); // expected undefined no robot in the table
  });

  it("should face NORTH if current facing is WEST", function () {
    const robots = [{ id: "genesis", x: 0, y: 0, f: FACING.WEST }];
    const [{ f }] = makeRight({
      robotId: "genesis",
      robots,
    });
    expect(f).toBe(FACING.NORTH);
  });

  it("should face WEST if current facing is SOUTH", function () {
    const robots = [{ id: "genesis", x: 0, y: 0, f: FACING.SOUTH }];
    const [{ f }] = makeRight({
      robotId: "genesis",
      robots,
    });
    expect(f).toBe(FACING.WEST);
  });

  it("should face SOUTH if current facing is EAST", function () {
    const robots = [{ id: "genesis", x: 0, y: 0, f: FACING.EAST }];
    const [{ f }] = makeRight({
      robotId: "genesis",
      robots,
    });
    expect(f).toBe(FACING.SOUTH);
  });

  it("should face EAST if current facing is NORTH", function () {
    const robots = [{ id: "genesis", x: 0, y: 0, f: FACING.NORTH }];
    const [{ f }] = makeRight({
      robotId: "genesis",
      robots,
    });
    expect(f).toBe(FACING.EAST);
  });
});
