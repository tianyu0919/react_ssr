import React from "react";
import { Rate } from "antd";
import { container } from "./styles/about.css.ts";

export default function About() {
  return (
    <div className={container}>
      <div>About1</div>
      <Rate />
    </div>
  );
}
