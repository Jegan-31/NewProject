
import './App.css';
import { Main } from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chess } from './components/Chess';
import { Vollyball } from './components/Volleyball';
import { Football } from './components/Football';
import { Home } from './components/Home';
import { Rugby } from './components/Rugby';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/chess" element={<Chess/>}></Route>
          <Route path="/volley" element={<Vollyball/>}></Route>
          <Route path="/football" element={<Football/>}></Route>
          <Route path="/rugby" element={<Rugby/>}></Route>
        </Route>
        
        </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
