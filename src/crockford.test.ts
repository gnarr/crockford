import crockford, { toBase32, fromBase32 } from "./crockford";

describe("toBase32", () => {
  it("should return 7 as 7", () => {
    expect(crockford.toBase32(7)).toBe("7");
    expect(toBase32(7)).toBe("7");
  });
  it("should return 23 as Q", () => {
    expect(crockford.toBase32(23)).toBe("Q");
    expect(toBase32(23)).toBe("Q");
  });
  it("should return 42 as 1A", () => {
    expect(crockford.toBase32(42)).toBe("1A");
    expect(toBase32(42)).toBe("1A");
  });
  it("should return 69 as 25", () => {
    expect(crockford.toBase32(69)).toBe("25");
    expect(toBase32(69)).toBe("25");
  });
  it("should return 420 as D4", () => {
    expect(crockford.toBase32(420)).toBe("D4");
    expect(toBase32(420)).toBe("D4");
  });
  it("should return 1337 as 19S", () => {
    expect(crockford.toBase32(1337)).toBe("19S");
    expect(toBase32(1337)).toBe("19S");
  });
  it("should return 2147483647 as 1ZZZZZZ", () => {
    expect(crockford.toBase32(2147483647)).toBe("1ZZZZZZ");
    expect(toBase32(2147483647)).toBe("1ZZZZZZ");
  });
});

describe("fromBase32", () => {
  it("should return 7 as 7", () => {
    expect(crockford.fromBase32("7")).toBe(7);
    expect(fromBase32("7")).toBe(7);
  });
  it("should return Q as 23", () => {
    expect(crockford.fromBase32("Q")).toBe(23);
    expect(fromBase32("Q")).toBe(23);
  });
  it("should return lower-case q as 23", () => {
    expect(crockford.fromBase32("q")).toBe(23);
    expect(fromBase32("q")).toBe(23);
  });
  it("should return 1A as 42", () => {
    expect(crockford.fromBase32("1A")).toBe(42);
    expect(fromBase32("1A")).toBe(42);
  });
  it("should return 25 as 69", () => {
    expect(crockford.fromBase32("25")).toBe(69);
    expect(fromBase32("25")).toBe(69);
  });
  it("should return D4 as 420", () => {
    expect(crockford.fromBase32("D4")).toBe(420);
    expect(fromBase32("D4")).toBe(420);
  });
  it("should return 19S as 1337", () => {
    expect(crockford.fromBase32("19S")).toBe(1337);
    expect(fromBase32("19S")).toBe(1337);
  });
  it("should return 1ZZZZZZ as 2147483647", () => {
    expect(crockford.fromBase32("1ZZZZZZ")).toBe(2147483647);
    expect(fromBase32("1ZZZZZZ")).toBe(2147483647);
  });
});
