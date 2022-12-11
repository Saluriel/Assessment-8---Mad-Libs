const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("It returns a string with commas", () => {
    expect(addCommas(1234)).toBe("1,234")
    expect(addCommas(1000000)).toBe("1,000,000")
    expect(addCommas(-10)).toBe("-10")
    expect(addCommas(-5678)).toBe("-5,678")
  })
  test("works with decimals", () => {
    expect(addCommas(12345.678)).toBe("12,345.678")
  })
});
