import { describe, it, expect } from "vitest";

import { priceFormat } from "../priceFormat";

describe("Return price format for a value", () => {
  it("should return a valid format", () => {
    const result = priceFormat(1000);
    expect(result).toBe("1.000");
    const result2 = priceFormat(10000);
    expect(result2).toBe("10.000");
    const result3 = priceFormat(1000000);
    expect(result3).toBe("1.000.000");
  });
});
