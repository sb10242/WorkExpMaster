import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js'


function App() {

   
  return (
    <div className="App">
      <header className="App-header">      
        <h1><img src={logo} className="App-logo" alt="logo"/>Junior</h1>        
        <DataTable /> 
        
      </header>
    </div>
  );
}

export default App;
