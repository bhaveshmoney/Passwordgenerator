import React, { useState } from 'react';
import './App.css';
import { number,UpperCaseLetters,LowerCaseLetter,specialCharacter } from "./characters";

function App() {

     const [password, setPassword] = useState('');
     const [passwordLength,setPasswordLength] =useState('20');
     const [includeUppercase,setincludeUppercase]=useState(false);
     const [includeLowercase,setincludeLowercase]=useState(false);
     const [includeNumber,setincludeNumber]=useState(false);
     const [includeSymbol,setincludeSymbol]=useState(false);
   
     const handledgeneratepassword= (e) =>{
       
      let characterList='';
       if (includeUppercase) {
        characterList= characterList + UpperCaseLetters;
       }
       if (includeLowercase) {
        characterList= characterList + LowerCaseLetter;
       }
       if (includeNumber) {
        characterList= characterList + number;
       }
       if (includeSymbol) {
        characterList= characterList + specialCharacter;
       }
       setPassword(createPassword(characterList));
     }
     const createPassword = (characterList) =>{
       let password ='';

       const CharacterListLength =characterList.length;
       for (let i = 0; i < passwordLength; i++) {
         const characterIndex= Math.round(Math.random() * CharacterListLength)  ;
          
         password =password +characterList.charAt(characterIndex)
         
       }
       return password
     }
     const copyToClipboard =() =>{
       const newTextarea = document.createElement('textarea');
       newTextarea.innerText =password
       document.body.appendChild(newTextarea);
       newTextarea.select()
       document.execCommand('copy')
       newTextarea.remove()
     }

     const handleCopyPassword= (e) =>{
       copyToClipboard()
     }

  return (
    <div className="App">
      <div className="container">
          <div className="generator">
              <h2 className="generator_header">
             Password Generator
            </h2>
            <div className="generator_password">
              <h3>{password}</h3>
              <button onClick={handleCopyPassword} className="copy_btn">
              <i class="fas fa-clipboard"></i>
              </button>
            </div>
            <div className="form-group">
               <label htmlFor="password-length">Password Length</label>
               <input
               defaultValue={passwordLength}
               onChange={ (e) =>setPasswordLength(e.target.value)}
                type="number"
                 id="password-length" 
                 name="password-length"
                  max="8"
                   min="20"/> 
            </div>
            <div className="form-group">
               <label htmlFor="uppercase-letter"> Include Uppercase Letter</label>
               <input
               checked={includeUppercase}
               onChange={ (e) =>setincludeUppercase(e.target.checked)}
                type="checkbox"
                 id="uppercase-letter"
                  name="uppercase-letter" /> 
            </div>
            <div className="form-group">
               <label htmlFor="lowercase-letter">Include lowercase Letter</label>
               <input 
               checked={includeLowercase}
               onChange={ (e) =>setincludeLowercase(e.target.checked)}
               type="checkbox" 
               id="lowercase-letter"
                name="lowercase-letter" /> 
            </div>
            <div className="form-group">
               <label htmlFor="number">Include Number</label>
               <input
               checked={includeNumber}
               onChange={ (e)=>setincludeNumber(e.target.checked)} 
               type="checkbox" 
               id="number" 
               name="number" /> 
            </div>
            <div className="form-group">
               <label htmlFor="symbol">Include Symbol</label>
               <input 
               checked={includeSymbol}
               onChange={ (e)=>setincludeSymbol(e.target.checked)}
               type="checkbox" 
               id="symbol" 
               name="symbol" /> 
            </div>
            <button onClick={handledgeneratepassword} className="generate_btn" >Generate Button</button>
          </div>
      </div> 
    </div>
  );
}

export default App;
