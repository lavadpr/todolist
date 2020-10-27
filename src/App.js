import './App.css';
import TodoGeneratorContainer from './containers/TodoGeneratorContainer';
import TodoGroupContainer from './containers/TodoGroupContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoGeneratorContainer/>
        <TodoGroupContainer/>
      </header>
    </div>
  );
}

export default App;
