import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Books from './pages/Books'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
