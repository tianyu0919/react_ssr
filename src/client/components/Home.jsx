import React from "react";
import { Button } from "antd";
// import 'antd/dist/reset.css';
// import About from "./views/About";
// import Concat from "./views/Concat";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => console.log("click me")}>Click Me</Button>
      {/* <About /> */}
      {/* <Concat /> */}
    </div>
  );
};

export default Home;
