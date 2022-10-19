import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Button } from './components/elements/buttons/Button';
import { Counter } from './components/elements/counter/Counter';


function App() {
  return (
    <div>
      <Routes>
      
        <Route path='/store' element={<Button link="#" string="ACQUISTA ORA"/>}></Route>

      </Routes>
      
      
    </div>
  );
}

export default App;
