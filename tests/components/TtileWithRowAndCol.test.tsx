import React from "react";
import { render } from "@testing-library/react";
import Title from "components/TtileWithRowAndCol";

describe("Title", () => {
  it("可以正确渲染大字", () => {
    const { getByText } = render(<Title type="large" title="大字" />);
    const content = getByText("大字");
    expect(content).toMatchSnapshot();
  });

  it("可以正确渲染大字", () => {
    const { getByText } = render(<Title type="large" title="我是一个大帅哥" />);
    const content = getByText("我是一个大帅哥");
    expect(content).toMatchSnapshot();
  });


  it("可以正确渲染小字", () => {
    const { getByText } = render(<Title type="small" title="小字" />);
    const content = getByText("小字");
    expect(content).toMatchSnapshot();
  });
});
