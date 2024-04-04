import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { LandingPageDesign } from "./screens/LandingPageDesign";
import { LoginPage } from "./screens/Login";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(<LandingPageDesign />);
root.render(<LoginPage />);

