import ObjToSearchStr from "utils/objToSearchStr";

describe("objTosearchStr", () => {
  it("可以将对象转化成查询参数字符串", () => {
    expect(
      ObjToSearchStr({
        a: "1",
        b: "2",
      })
    ).toEqual("a=1&b=2");
  });
});