import { FACING } from "../api";
import { makeReport } from "../robot";

describe("Command REPORT", function () {
  it("should show proper output makeReport", function () {
    const robots = [
      { id: "genesis", x: 0, y: 0, f: FACING.NORTH },
      { id: "2ndrobot", x: 1, y: 1, f: FACING.EAST },
    ];
    expect(makeReport("genesis", robots)).toBe("Output: 0,0,NORTH");
    expect(makeReport("2ndrobot", robots)).toBe("Output: 1,1,EAST");
  });
});
