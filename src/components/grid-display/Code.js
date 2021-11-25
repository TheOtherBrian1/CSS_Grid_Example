import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";


function Docs({iconSelected}) {
  const code =
    `
        /*Check the docs for alternative methods to construct the grid*/
        .grid{
            display: grid;
            grid: 
                "0      1" 100px
                "2      3" 100px
                /100px 100px;
        }
    `
  return (
        <Editor
            value={code}
            onValueChange={(code) => code}
            highlight={(docs) => highlight(code, languages.js)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
            }}
        />
  );
}

export default Docs;

