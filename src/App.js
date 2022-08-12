import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new Blog!';

  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <p className='title'>{title}</p>
        <Home/>
      </div>
    </div>
  );
}

export default App;
