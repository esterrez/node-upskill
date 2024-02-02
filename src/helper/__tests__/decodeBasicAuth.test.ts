import { decodeBasicAuth } from "../decodeBasicAuth";

describe("decodeBasicAuth", () => {
  it("should return username and password", () => {
    expect(decodeBasicAuth("UmV5bm9sZC5Wb246cnF2eGZONWxOMTlURWR6")).toEqual({
      username: "Reynold.Von",
      password: "rqvxfN5lN19TEdz",
    });
  });
});
