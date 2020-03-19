import { sum } from "@utils/sum";

describe("test", () => {
  test("sum", () => {
    const result: number = sum(1, 2);

    expect(result).toBe(3);
  });
});
