import React from 'react';
import { Routes , Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Heroe from '../components/Heroe/Heroe';
import Error from '../components/Error/Error';

function RouterConfig() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="heroe/:heroeId" element={<Heroe />} />
        <Route path="error" element={<Error />} />
        <Route element={<Error />} />
    </Routes>
    );
}

export default RouterConfig;

  