import './App.css';
import Navbar from './components/Navbar';
import Context from './Global/Context';
import Model from './components/Model';

function App() {
  return (
    <Context>
     <Navbar/>
     <Model/>
    </Context>
  );
}

export default App;
