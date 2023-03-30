import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./src/views/Index";
import "./styles/main.scss";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./src/utils/Store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/country">
              <Route path=":id" element={<Index />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
