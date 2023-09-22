import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Try from './try';
import GridExample from '../../public/GridExample';

const Routing: React.FC = () => {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GridExample />} />
          <Route path='/a' element={<Try />} />

        </Routes>
      </BrowserRouter>
      </>
    )
  }
  
  export default Routing