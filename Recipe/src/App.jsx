import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from '../src/components/NavBar'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className='App'>
      <NavBar/>
      <main className='main_container'>
        <Outlet/>
      </main>
    </div>
    
  );
}

export default App;
