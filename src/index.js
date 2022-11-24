import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TokiumProvider, GatedRoute } from "@tokium.co/tokiumwrapper";

// Import your gated site
import GatedSite from './GatedSite';
// Set variables (these are static but you can make them dynamic yourself)
const pubkey = 'ASgysXy4k8xhq1QeQ59kBs8bK5e5jdHwhkuX4Qd7pWTZ';
const collection = 'https://magiceden.io/marketplace/y00ts';
// Create your routes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TokiumProvider pubkey={pubkey} collection={collection}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='/GatedSite' element={
          <GatedRoute redirect='/'>
            { <GatedSite /> }
          </GatedRoute>} />
        </Routes>
      </BrowserRouter>
    </TokiumProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
