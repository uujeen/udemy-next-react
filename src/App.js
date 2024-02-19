import './App.css';
import Post from './components/Post';

function App() {
  return (
    <main className="App">
      <Post author="Develop" body="React is awesome!" />
      <Post author="Product" body="React is awesome!" />
    </main>
  );
}

export default App;
