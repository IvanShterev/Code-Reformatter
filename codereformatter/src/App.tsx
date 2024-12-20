import './App.css';
import { useState } from 'react';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

  const handleLanguageChange = (language: any) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <div className="container">

        <h2>Enter your code here</h2>

        <div className="code-input-cont">

            <div className="dropdown">
                
                <button className="dropdown-btn">

                    <i className={`fa-brands fa-${selectedLanguage.toLowerCase()}`}></i>
                    
                    {selectedLanguage}

                    <i className="fa-solid fa-chevron-down dropdown-arrow"></i>

                </button>

                <div className="dropdown-menu">

                    <div className="dropdown-item" onClick={() => handleLanguageChange('JavaScript')}>
                        <i className="fa-brands fa-js"></i> 
                        JavaScript
                    </div>

                    <div className="dropdown-item" onClick={() => handleLanguageChange('Python')}>
                        <i className="fa-brands fa-python"></i> 
                        Python
                    </div>

                    <div className="dropdown-item" onClick={() => handleLanguageChange('Java')}>
                        <i className="fa-brands fa-java"></i> 
                        Java
                    </div>

                    <div className="dropdown-item" onClick={() => handleLanguageChange('HTML')}>
                        <i className="fa-brands fa-html5"></i> 
                        HTML
                    </div>

                    <div className="dropdown-item" onClick={() => handleLanguageChange('CSS')}>
                        <i className="fa-brands fa-css3-alt"></i> 
                        CSS
                    </div>

                </div>

            </div>

            <textarea id="code-input" placeholder={`Enter ${selectedLanguage} code here`} />

            <button>Format Code</button>

        </div>

      </div>
    </>
  );
}

export default App;
