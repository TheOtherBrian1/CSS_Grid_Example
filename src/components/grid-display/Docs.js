import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";


function Docs({iconSelected}) {
  const docs =
    `
    Ways to create a grid:
    
    Creates a grid with:
    - 2 rows, each 100px
    - 2 columns, each 200px

        L1  (200px) L2 (200px) L3
            ---------- ----------
    (100px) |         |         |
            |         |         |
        L2  ---------- ----------
    (100px) |         |         |
            |         |         |
        L3  ---------- ----------

    ===============================
    /*the following are equivalent*/

      /*
        Defines length of the rows & columns
      */
    #grid1{
      display: grid;
      grid-template-rows: 100px 100px;
      grid-template-columns: 200px 200px;
    }

      /*
        Shorthand: defines length of rows and columns.
        Also, gives each grid item a name.
        If lengths are not explicitly set, 
        they default to auto.
      */
    #grid2{
      display: grid;
      grid: 
        "0      1"    100px
        "2      3"    100px 
      / 200px  200px

    /*
      Shorthand: defines length of rows and columns.
    */
      #grid3{
        display: grid;
        grid: 100px 100px / 200px 200px;
      }

    /*
      Any of the above method, but 
      with the 'repeat' function
    */
      #Repeat_Example{
        display: grid;
        #grid1{
          //grid-template-rows: repeat(2, 100px);
          //grid-template-columns: repeat(2, 200px);
        }
        #grid3{
          //grid: repeat(2, 100px) / repeat(2, 200px);
        }
      }


    `;
  return (
        <Editor
            value={docs}
            onValueChange={(code) => code}
            highlight={(docs) => highlight(docs, languages.js)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
            }}
        />
  );
}

export default Docs;

