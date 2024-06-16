import logo from './logo.svg';
import './App.css';

function App() {

  // down here, i added a function that has a variable that takes three names and  math.random library that will alternate the names 
  // when the function is called
  const handleNameChange =() => { 
    const names = ['Fidel',['Kipsang'],["Langat"]];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          There's more to what meets the eye😂😁
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello {handleNameChange() /*we are calling the function we defined */}</p> 
      </header>
    </div>
  );
}

export default App;
