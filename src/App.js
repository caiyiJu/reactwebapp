import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <body>
      <button onClick={test}>Take the Shot!</button>
      </body>
    </div>

  );

}
function test(){
  console.log("test111111111111111111");
      // Send data to the backend via POST
      fetch('https://tonytestcors.azurewebsites.net/api/HttpTrigger1?code=esYiXyVIrV1uRXcl8tJiJh6fVJtDmRUssVHHGyWdv6r_AzFukEta_w==', {  // Enter your IP address here

      method: 'GET' 
      // mode: 'cors', 
      // body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

    });    
    console.log("test2222222222222222222");
    // Send data to the backend via POST
    fetch('/api/HttpTrigger1?code=esYiXyVIrV1uRXcl8tJiJh6fVJtDmRUssVHHGyWdv6r_AzFukEta_w==', {  // Enter your IP address here
    method: 'GET' 
    // mode: 'cors', 
    // body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

  })
}
export default App;
