import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
