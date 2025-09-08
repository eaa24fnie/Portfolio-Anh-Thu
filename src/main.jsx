import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter  basename={import.meta.env.DEV ? "/" : "/spa/"}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
