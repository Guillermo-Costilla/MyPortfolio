import * as React from "react";
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import App from './App.jsx'
import './index.css'
import 'atropos/css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)


