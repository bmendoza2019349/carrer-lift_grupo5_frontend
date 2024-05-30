import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Login from './pages/login/Login.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>} />
               
            </Routes>
        </BrowserRouter>
    )
}

export default App