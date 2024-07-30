import React, { useState } from 'react';
import { Header } from './components/Header/header';
import "../src/styles/global.css"
import {Tasks} from "../src/components/Tasks/Tasks"




function App() {
  const [toggle, SetToggle] = useState(false)
  return (
    <>
  <Header />
    <Tasks />
  </>  

);

}

export default App;
