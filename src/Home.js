import App from './App';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Description from './Description';
import Error from "./Error";
import NavBare from './components/NavBare';
const Home = () => {
  return (
    <div>
        <NavBare/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<Description />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Home