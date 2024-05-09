
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header'
import { Footer } from './Footer'
import { Home } from './pages/Home';
import { Carrello } from './pages/Carrello';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrello" element={<Carrello />} />
        </Routes>
      </Router>
      
      <Footer />
    </>
  )
}

export default App
