import { useState } from 'react';
import './App.css';
import {text} from './starttext.js' 
import { marked } from 'marked';

function App() {
  
  const [input, setInput] = useState(text)
  let output = marked.parse(input)
  
  return (
    <>
    <div className='header'>Markdown Previewer</div>
    <div className="App">
      <textarea id="editor" 
      onChange={event => setInput(event.target.value)}>{input}</textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html: output}}></div>
    </div>
    </>
  );
}

export default App;
