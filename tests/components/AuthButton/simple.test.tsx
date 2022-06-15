// tests/components/AuthButton/simple.test.tsx
import { render, screen } from "@testing-library/react";
import AuthButton from "components/AuthButton";
import React from "react";

describe("AuthButton", () => {
  it("可以正常展示", () => {
    render(<AuthButton>登录</AuthButton>);

    expect(screen.getByText("登录")).toBeInTheDocument();
  });
});
