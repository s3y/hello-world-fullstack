import MessageDisplay from './components/MessageDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World Full-Stack Application test</h1>
      </header>
      <main>
        <MessageDisplay />
        <p>This is a simple full-stack application using React for the frontend. to test the preview deployments</p>
        <p>Feel free to explore and modify the code!</p>
      </main>
    </div>
  );
}

export default App;
