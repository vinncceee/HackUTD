
import './App.css';
import Chat from './components/Chat';
import Home from './components/Home';
import SelectCompany from './components/SelectCompany';


function App() {
  return (
    <div className="App bg-primary-600"> {/* Apply the custom color class here */}
      <SelectCompany/>
    </div>
  );
}

export default App;
