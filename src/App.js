import logo from './logo.svg';
import './App.css';
import CustomButton from './Components/CustomButton/CustomButton';
import MuiButton from './Components/MuiButton/MuiButton';
import Link from './Components/Link';

function App() {

  function handleClickCustom() {
    console.log("Custom button");
  }

  function handleClickMui() {
    window.alert("Mui button")
  }

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
        <h1>Buttons!</h1>
        <div>
          <button onClick={() => console.log("Standard Button")}>Standard</button>
          <br />
          <CustomButton 
             label={"Custom "}
             handleClick={handleClickCustom}
          />
          <br />
          <MuiButton 
              label={"Mui Button"}
              handleClick={handleClickMui}
          />
        </div>
      </header>
      <Link page={"www.huffpost.com"}
      children={"This"}
      className
      />
    </div>
  );
}

export default App;
