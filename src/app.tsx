import { useState } from 'preact/hooks'
import './app.css'
import Clocks from './components/Clocks'
import Links from './components/Links'
import config from "../public/config.json"

export function App() {
  
  return (
    <>
      <div class="card center">
        <Clocks/>
        <Links/>
      </div>
    <style>
      {`:root {
        --img-source: url('${config.images[Math.floor(Math.random() * config.images.length)]}');
        --columns: ${config.grid.columns};
        --max-width: ${config.grid.width};
      }
      ${config.colors.usegreentitle ? `.links .title {
        color: mediumseagreen;
      }` : ""}
      `}
    </style>
    </>
  )
}
