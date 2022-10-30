import './App.css';
import Navbar from './components/navbar'
import Main from './components/main'
// console.log(navbar);
function App() {
  return (
    <div className="App">
      < Navbar />
      < Main />
      {/* < Footer /> */}
    </div>
  )
}

export default App;
/* { <navbar className="App-navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </navbar> } 
*/