import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { LandingPageDesign } from "./screens/LandingPageDesign";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LandingPageDesign />);
