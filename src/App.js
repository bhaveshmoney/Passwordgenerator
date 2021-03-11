
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="generator">
              <h2 className="generator_header">
             Password Generator
            </h2>
            <div className="generator_password">
              <h3>Password</h3>
              <button className="copy_btn">
              <i class="fas fa-clipboard"></i>
              </button>
            </div>
            <div className="form-group">
               <label htmlFor="password-length">Password Length</label>
               <input type="number" id="password-length" name="password-length" max="8" min="20"/> 
            </div>
            <div className="form-group">
               <label htmlFor="uppercase-letter"> Include Uppercase Letter</label>
               <input type="checkbox" id="uppercase-letter" name="uppercase-letter" /> 
            </div>
            <div className="form-group">
               <label htmlFor="lowercase-letter">Include lowercase Letter</label>
               <input type="checkbox" id="lowercase-letter" name="lowercase-letter" /> 
            </div>
            <div className="form-group">
               <label htmlFor="number">Include Number</label>
               <input type="checkbox" id="number" name="number" /> 
            </div>
            <div className="form-group">
               <label htmlFor="symbol">Include Symbol</label>
               <input type="checkbox" id="symbol" name="symbol" /> 
            </div>
            <button className="generate_btn">Generate Button</button>
          </div>
      </div> 
    </div>
  );
}

export default App;
