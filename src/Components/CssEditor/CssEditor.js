import React, {useState} from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism.css';
 

 
const CssEditor = ()=>{
    const [code, setCode] = useState('d');
    return (
        <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={j => highlight(code, languages.css)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
            }}
        />
    );
}
export default CssEditor;
