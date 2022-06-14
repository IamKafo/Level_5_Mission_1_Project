import Chatbot from './components/Chatbot'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            {/* <Route path='/products' element={<Products/>} /> */}
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
          <Chatbot/>
      </Router>
    </>
  );
}

export default App;
