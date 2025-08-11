import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
