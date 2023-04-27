/*
 * @Author: tianyu
 * @Date: 2023-04-19 15:33:02
 * @Description:
 */
import React from "react";
import { hydrateRoot } from "react-dom/client";
import Home from "./components/Home";

let Root = document.getElementById("root");
console.log(Root);
hydrateRoot(Root, <Home />);
