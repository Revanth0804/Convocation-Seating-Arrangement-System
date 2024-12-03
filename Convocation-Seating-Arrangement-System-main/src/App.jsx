import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from "./layout/Header";
import FindSeat from "./layout/FindSeat";
import VisualMap from "./layout/VisualMap";
import AdminDashboard from './layout/AdminDashboard';
import Footer from "./layout/Footer";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <FindSeat />
      <VisualMap />
      <AdminDashboard />
      <Footer />
    </>
  )
}

export default App
