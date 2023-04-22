import { useState } from "preact/hooks";
import "./app.css";
import Clocks from "./components/Clocks";
import Links from "./components/Links";
import config from "../public/config.json";

export function App() {
  let searchParams= new URLSearchParams(window.location.search);
  let selectedImage = config.images[Math.floor(Math.random() * config.images.length)]
  
  return (
    <>
      <Clocks />
      <Links />
      <style>
        {`:root { 
          ${searchParams.has("bg") ?
            `--img-source: #${searchParams.get("bg") || "141419"};` :
            `--img-source: url('${selectedImage}');` 
          }
          ${searchParams.has("width") ?
          `--max-width: ${searchParams.get("width") || "800"}px;` : ""}
        }

        ${searchParams.has("title") ? `.links .title {
          color: #${searchParams.get("title") || "3cb371"};
        }` : ""}      
      `}
      </style>
    </>
  );
}
