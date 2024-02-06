import React from 'react';
import './head.css';
import DarkMode from '../HeadSectionComponent/DarkMode';
import { Outlet } from 'react-router-dom';

function HeadSectionComponent() {
  return (
    <>
    <div className="body">
    <div className="header">
        <h1>Product List</h1>
        <DarkMode/>
    </div>
    <Outlet/>
    </div>
    </>
  )
}

export default HeadSectionComponent