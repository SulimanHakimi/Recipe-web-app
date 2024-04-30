import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import NotFound from './components/404';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path='/*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
