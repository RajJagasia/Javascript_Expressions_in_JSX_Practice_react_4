//Create a react app from scratch.

import React from "react";
import ReactDom from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
var today = new Date();
const name = "Raj Jagasia";
const year = String(today.getFullYear());
ReactDom.render(
  <div>
    <p>Created By {name}</p>
    <p>Copyright @ {year}</p>
  </div>,

  document.getElementById("root")
);
