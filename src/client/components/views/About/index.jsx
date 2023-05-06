import React from "react";
import { Rate } from "antd";
import { container, themeClass } from "./styles/about.css.ts";
import classnames from "classnames";

export default function About() {
  return (
    <div className={classnames(container, themeClass)}>
      <div>About1</div>
      <Rate />
    </div>
  );
}
