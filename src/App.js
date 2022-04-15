import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>

        <main style={{height:'85vh', color:'white'}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>

      </BrowserRouter>
    </>
  );
};

export default App;
