import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OrgHierarchy from '../Components/orgHierarchy';
const Routing: React.FC = () => {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<OrgHierarchy/>} />
        </Routes>
      </BrowserRouter>
      </>
    )
  }
  
  export default Routing