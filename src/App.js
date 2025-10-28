
import Navbar from './Navbar.js';  // <-- Import Navbar
import Home from './Home.js';      // <-- Import Home

function App() {
  // We can delete the old variables from Experiment 4
  
  return (
    <div className="App">
      <Navbar /> 
      <div className="content">
         {/* We can delete the old h1 tags from Experiment 4 */}
         <h1>Hello World</h1>
      </div>
      <Home />
    </div>
  );
}

export default App;