import './App.css';
import { useEffect, useState } from 'react';
import {
    formatJavaScriptCode,
    formatPythonCode,
    formatJavaCode,
    formatHTMLCode,
    formatCSStCode,
} from './Reformatter';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
  const [iconClass, setIconClass] = useState('js');

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const languagesIcons: Record<string, string> = {
    'JavaScript': 'js',
    'Python': 'python',
    'Java': 'java',
    'HTML': 'html5',
    'CSS': 'css3-alt'
  }

  useEffect(() => {
    setIconClass(languagesIcons[selectedLanguage]);
  }, [selectedLanguage]);

  const [codeInput, setCodeInput] = useState('');

  const handleCodeChange = (event: any) => {
    setCodeInput(event.target.value);
  };

  const languagesFuncs: Record<string, (selectedLanguage: string) => Promise<string> | string> = {
    'JavaScript': formatJavaScriptCode,
    'Python': formatPythonCode,
    'Java': formatJavaCode,
    'HTML': formatHTMLCode,
    'CSS': formatCSStCode,
};

  const handleCode = async () => {
    const formatter = languagesFuncs[selectedLanguage];
    if (typeof formatter === 'function') {
      const formattedCode = await formatter(codeInput);
      setCodeInput(formattedCode);
  }
  };

  const clearCode = () => {
    setCodeInput('');
  }

  return (
    <>
      <div className="container">

        <h2>Enter your code here</h2>

        <div className="code-input-cont">

            <div className="dropdown">
                
                <button className="dropdown-btn">

                    <i className={`fa-brands fa-${iconClass}`}></i>
                    
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

            <textarea
                id="code-input"
                placeholder={`Enter ${selectedLanguage} code here`}
                value={codeInput}
                onChange={handleCodeChange}
            />

            <div className="btns-cont">

                <button onClick={handleCode} className='btn-down' id='format-btn'>Format Code</button>

                <button onClick={clearCode} className='btn-down' id='clear-btn'>Clear Code</button> 

            </div>

        </div>

      </div>
    </>
  );
}

export default App;
