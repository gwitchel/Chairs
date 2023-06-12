import logo from './logo.svg';
import './App.css';
import Authenticate from './components/Authenticate';
import ReactDOM from 'react-dom';
import AppRouter from './routing/AppRouter';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter />
    </div>
  );
}

export default App;
