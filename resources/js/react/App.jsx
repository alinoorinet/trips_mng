import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AddTrip from "./components/AddTrip";
import Tasks from "./components/Tasks";
import Trips from "./components/Trips";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<><Tasks/><Trips/></>} />
                    <Route exact path="trips/add" element={<AddTrip />} />
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
