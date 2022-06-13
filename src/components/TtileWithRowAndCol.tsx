// src/components/Title.tsx
import React, { CSSProperties, FC } from "react";
import { Row, Col } from "antd";

interface Props {
  type: "large" | "small";
  title: string;
}

// large 样式
const largeStyle: CSSProperties = {
  fontSize: "2em",
  color: "red",
};

// small 样式
const smallStyle: CSSProperties = {
  fontSize: "0.5rem",
  color: "green",
};

// 样式 Mapper
const styleMapper: Record<"large" | "small", CSSProperties> = {
  small: smallStyle,
  large: largeStyle,
};

// 组件
const Title: FC<Props> = (props) => {
  const { title, type } = props;

  return (
    <Row style={styleMapper[type]}>
      <Col>第一个 Col</Col>
      <Col>
        <div>{title}</div>
      </Col>
    </Row>
  );
};

export default Title;
