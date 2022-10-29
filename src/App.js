import './App.css';
import Footer from './components/Footer';
import Home from './components/Home'
import Menu from './components/Menu';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Locucao from './components/Locucao';
import ProducaoDeVideo from './components/ProducaoDeVideo';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/locução' element={<Locucao/>} />
        <Route path='/produção_de_video' element={<ProducaoDeVideo/>} />
        <Route path='/fotografia' element={<ProducaoDeVideo/>} />
        <Route path='/sobre' element={<ProducaoDeVideo/>} />
        <Route path='/contato' element={<ProducaoDeVideo/>} />
      </Routes>
    
    
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
