import './App.css';
import Modal from './loginRegister/loginPage';
import NavigationBar from './components/header/NavigationBars';
import Router from './router/Router';

function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <Router/>
    <Modal/>
    </div>
  );
}

export default App;
