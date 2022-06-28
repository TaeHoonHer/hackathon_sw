import './assets/css/App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import MainPage2 from './pages/Main_';
import CreatePage from './pages/Create';
import SelectPage from './pages/Select';
import Test from './pages/Test';
import ResultPage from './pages/Result';
import UploadPage from './pages/Upload';

import { useMediaQuery } from 'react-responsive'

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(minWidth: 900px)",
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/main" element={<MainPage2/>}/>
          <Route path="/create" element={<CreatePage />}/>
          <Route path="/select" element={<SelectPage />}/>
          <Route path="/test" element={<Test />}/>
          <Route path="/result" element={<ResultPage/>}/>
          <Route path="/upload" element={<UploadPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
