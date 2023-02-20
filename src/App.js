import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StartPage from './StartPage';
import Logo from './Logo';
import MainPage from './MainPage';


function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Logo/>}/>
        <Route path="/start_page" element={<StartPage/>}/>
        <Route path="/main_page" element={<MainPage/>}/>
    </Routes>
  );
}

export default App;
