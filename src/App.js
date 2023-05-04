import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import MyContext from './context/MyContext'
import Layout from './layout/Layout'

function App() {
  return (
    <div className="App">
      <MyContext>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </MyContext>
    </div>
  )
}

export default App
