import React from "react";
import { Routes, Route } from "react-router-dom";

import Test from "./Test";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Test />} />
            </Routes>
        </div>
    );
}

export default App;