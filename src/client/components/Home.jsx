import React from "react";
import { Button } from "antd";
import About from "./views/About";
import Concat from "./views/Concat";
import classnames from "classnames";
import { css } from "@emotion/css";
import "./Home.css";

const WrapContainer = ({ children }) => {
  return (
    <div className={"HomeContainer"}>
      {children.map((child, idx) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
};
const WrapContainer1 = ({ children }) => {
  return (
    <div
      className={classnames(
        "HomeContainer",
        css`
          display: flex;
          flex-direction: column;
          row-gap: 10px;
          background-color: green;
        `
      )}
    >
      {children.map((child, idx) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <WrapContainer>
        <Button onClick={() => console.log("click me")}>Click Me</Button>
        <About />
        <Concat />
      </WrapContainer>
      <WrapContainer1>
        <Button onClick={() => console.log("click me")}>Click Me</Button>
        <About />
        <Concat />
      </WrapContainer1>
    </div>
  );
};

export default Home;
