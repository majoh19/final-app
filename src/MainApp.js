import React from 'react';
import { Navbar } from './ui/Navbar';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Directory } from './components/Directory';
import { New } from './components/New';
import { Search } from './components/Search';

export const MainApp = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='directory' element={<Directory/>}/>
                <Route path='new' element={<New/>}/>
                <Route path='search' element={<Search/>}/>
                <Route path='*' element={<Navigate to='/directory'/>}/>
            </Routes>
        </BrowserRouter>
    </>
}