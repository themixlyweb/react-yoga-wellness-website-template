import './App.css';
import './MediaQueries.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';

function App() {
  return (
  <>
   <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
/**links inside section */