import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! This is my demo of using webhooks. 
        </p>
        <p>I have made a webhook called "GitPush" to connect github with netlify so that when I push new code into the repo then netlify starts a new build and deploys a new version of this site.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
