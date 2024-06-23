import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './components/Mainpage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
