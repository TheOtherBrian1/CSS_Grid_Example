export const defaultState = [
    {
        //First section
        mainGrid:{
            title: 'Fixed Grid Templates:',
            subtitle: 'Build grids with fixed dimensions in mind',
            text: "It's important to note that you can still add more grids than defined, but their size will be outside",
            mainGrid: {
                initialHeight: '200',
                initialWidth: '200',
                code: 
    `
    position: relative;
    display: grid;
    grid: 
        "1      2" 100px
        "3      4" 100px
        /100px 100px;
    `,
                gridItems: [
                    {
                        code: '/*Place code here*/'
                    },
                    {
                        code: '/*Place code here*/'
                    },
                    {
                        code: '/*Place code here*/'
                    },
                    {
                        code: '/*Place code here*/'
                    }
                ]
            },
        },

        toggle:{
            selectedIcon: null,
        },

        docGrids:[
           {
                title: 'Grid shorthand',
                text: 'This is shown in the main example. Each cell in the grid is defined by a x-axis measurement, a y-axis measurement, and a name in quotes',
                code: `
                    position: relative;
                    display: grid;
                    grid: 
                        "1      2" 50px
                        "3      4" 50px
                        /50px 50px;
                `,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: ''
                    },
                    {
                        code: ''
                    },
                    {
                        code: ''
                    },
                    {
                        code: ''
                    }
                ]
            },
            {
                title: 'Defining fixed columns with the "templating properties"',
                text: 'Grids can be defined using "grid-template-columns and grid-template-rows',
                code: `
                    position: relative;
                    display: grid;

                    /*defines the y axis*/
                    grid-template-columns: 50px 50px;
                    
                    /*defines the x axis*/
                    grid-template-rows: 75px 75px;
                    
                `,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: ''
                    },
                    {
                        code: ''
                    },
                    {
                        code: ''
                    },
                    {
                        code: ''
                    }
                ]
            },
            {
                title: 'Repeat function',
                text: "Not every cell needs to be defined explicitly. You can also define elements using Grid's built-in 'repeat function'",
                code: `
                    position: relative;
                    display: grid;
                    grid-template-columns: repeat(2, 50px);
                    grid-template-rows: repeat(2, 60px);
                `,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: ''
                    },
                    {
                        code: ''
                    },
                    {
                        code: ''
                    },
                    {
                        code: ''
                    }
                ]
            },

        ]
    },

    //second section
    {
        mainGrid:{
            title: 'Grid Cells Spanning Multiple columns/rows:',
            subtitle: 'How to have grid cells take up multiple columns and rows',
            text: "As long as a grid is somewhat defined, you can designate certain grid-items to take up multiple columns/rows",
            mainGrid: {
                initialHeight: '200',
                initialWidth: '200',
                code: 
    `
    position: relative;
    display: grid;
    grid: 
        "a      b     c" 100px
        "a      d     d" 100px
        /50px 100px 50px;
    `,
                gridItems: [
                    {
                        code: 'grid-area: a'
                    },
                    {
                        code: 'grid-area: b'
                    },
                    {
                        code: 'grid-area: c'
                    },
                    {
                        code: 'grid-area: d'
                    },
                ]
            }
        },

        toggle:{
            selectedIcon: null,
        },

        docGrids:[
           {
                title: 'Grid line model',
                text: "Grids have an x and y axis. The first line for both axises of the grid is labeled one, followed by two, and so fourth. It's possible to span a cell from one grid line to another",
                code: `
                    position: relative;
                    display: grid;
                    grid-template-columns: 50px 50px;
                    grid-template-rows: 50px 50px;
                `,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: 'grid-column: 1/2;\n grid-row:1/3'
                    },
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    }
                ]
            },

            {
                title: 'Grid line model Cont.',
                text: "There's a short hand called 'span' that tells CSS how many grid lines your grid-item should span",
                code: `
                    position: relative;
                    display: grid;
                    grid-template-columns: 50px 50px;
                    grid-template-rows: 50px 50px;
                `,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: '/*Starts at column line 1. Spans 2 lines to the left*/\ngrid-column: 1/ span 2'
                    },
                    {
                        code: '/*insert code here*/'
                    },
                    
                ]
            },
            {
                title: 'Span grid lines explicitly.',
                text: "If you chose to name you grid cells with grid, you can explicitly label which cells your grid-items should occupy",
                code: `
                    position: relative;
                    display: grid;
                    grid: "a    b" 50px
                          "a    b" 50px
                        / 50px  50px
                `,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: 'grid-area: a'
                    },
                    {
                        code: 'grid-area: b'
                    },
                   
                ]
            },
            {
                title: 'Span grids using grid lines',
                text: "Grids have an x and y axis. The first line for both axises of the grid is labeled one, followed by two, and so fourth. It's possible to span a cell from one grid line to another",
                code: `
                    position: relative;
                    display: grid;
                    grid-template-columns: 50px 50px;
                    grid-template-rows: 50px 50px 50px;
                `,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: 'grid-column: 1/2;\n grid-row:1/3'
                    },
                    {
                        code: '/*column-start / row-start / column-end / grid-end;*/\ngrid-area: 1 / 2 / 3 / 3;'
                    },
                    {
                        code: 'grid-column:span 2'
                    }
                ]
            },
            {
                title: 'Name grid lines for spanning',
                text: "Just like how you can name grid cells, you can also name grid lines",
                code: `
                    position: relative;
                    display: grid;
                    grid-template-columns: [col-start] 50px [col-middle] 50px [col-end];
                    grid-template-rows: [row-start] 50px [row-middle] 50px [row-end];
                `,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: 'grid-column: col-start / col-end;\n grid-row: row-start / row-middle'
                    },
                    {
                        code: 'grid-column: col-start / col-end;\n grid-row: row-middle / row-end'
                    }
                ]
            },
            
        ]
    }

];