import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';

function App() {
  return (
    <div className="App">
      <Header myExtraStuff = "some data" SomeOtherCrap="123456"/>
    </div>
  );
}

export default App;
