import logo from './logo.svg';
import './App.css';
import Counter  from './Counter';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <Counter />
      <ParentComponent />
    </div>
  );
}

export default App;
