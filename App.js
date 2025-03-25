import React from 'react'
import { createRoot } from "react-dom/client";
const heading=React.createElement("h1",{},"My name is Shikha");
const root=createRoot(document.getElementById("root"));
root.render(heading)