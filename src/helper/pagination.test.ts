import { pagination } from "./pagination";

describe("pagination", () => {
  it.each([
    [
      "1",
      {
        limit: 20,
        offset: 0,
      },
    ],
    [
      "-1",
      {
        limit: 20,
        offset: 0,
      },
    ],
    [
      "-100",
      {
        limit: 20,
        offset: 0,
      },
    ],
    [
      "020",
      {
        limit: 20,
        offset: 380,
      },
    ],
    [
      "asd",
      {
        limit: 20,
        offset: 0,
      },
    ],
    [
      "3",
      {
        limit: 20,
        offset: 40,
      },
    ],
  ])("given %s, should return %j", (query, expected) => {
    expect(pagination(query)).toEqual(expected);
  });
});
