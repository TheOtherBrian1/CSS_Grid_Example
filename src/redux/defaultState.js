//Houses the data for creating and updating the examples
/*
    STATE STRUCTURE:

    [
        {  
            section:{
                title: string,
                subtitle: string,
                text: string,
                mainGrid: {
                    initialHeight: (starting height of grid) string,
                    initialWidth: string,
                    code: (css code) string
                    gridItems: [
                        {
                            code: (grid item code) string
                        },
                        ...
                    ]
                }
            },
            toggle: {
                selectedIcon: "CSS"|"Docs" string
            },
            docGrids:[
                {
                    title: string,
                    text: string,
                    code: (css code for doc grid) string,
                    initialHeight: string,
                    initialWidth: string,
                    gridItems: [
                        {
                            code: (css code) string
                        },
                        ...
                    ]
                }
            ]
        },
        ...repeat above
    ]
*/



export const defaultState = [
    {
        //First section
        section:{
            title: 'Fixed Grid Templates:',
            subtitle: 'Build grids with fixed dimensions',
            text: "It's important to note that you can still add more grids than defined, but their size will be outside your control",
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
            selectedIcon: "CSS",
        },

        docGrids:[
           {
                title: 'Grid shorthand',
                text: 'This is shown in the main example. Each cell in the grid is defined by an x-axis measurement, a y-axis measurement, and a name in quotes',
                code: `position: relative;\ndisplay: grid;\ngrid:\n"1      2" 50px\n"3      4" 50px\n/50px 50px;`,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
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
                title: '"templating properties"',
                text: 'Grids can be defined using "grid-template-columns and grid-template-rows',
                code: `position: relative;\ndisplay: grid;\n/*defines the y axis*/\ngrid-template-columns: 50px 50px;\n/*defines the x axis*/\ngrid-template-rows: 75px 75px;`,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
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
                title: 'Repeat function',
                text: "Not every cell needs to be defined explicitly. You can also define elements using Grid's built-in 'repeat function'",
                code: `position: relative;\ndisplay: grid;\ngrid-template-columns: repeat(2, 50px);\ngrid-template-rows: repeat(2, 60px);`,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    }
                ]
            },

        ]
    },

    //second section
    {
        section:{
            title: 'Grid Units:',
            subtitle: 'How to use the "fr" unit',
            text: "Grids can use all basic units, like percentages, px, vmin, etc. However, they also can use the fr unit. any cell with the fr unit will take up all remaining space available, unless their is another cell with the unit. When there are 2 cells with fr units, let's say cell one takes up '1fr' and cell two takes up '2fr' then they will split the remaining space based off their relative ratios to each other.",
            mainGrid: {
                initialHeight: '100',
                initialWidth: '300',
                code: 
    `
    position: relative;
    display: grid;
    width: 300px;

    /*fr units are fractional. They will expand to take up whatever space is available*/
    grid-template-columns: 1fr 2fr 3fr 50px;
    grid-template-rows: 100px;
    `,
                gridItems: [
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    }
                ]
            }
        },

        toggle:{
            selectedIcon: "CSS",
        },

        docGrids:[
            {
                title: 'Basic example of Units',
                text: "Hover over or click this box to see an example of different units in action",
                code: `position: relative;\ndisplay: grid;\nwidth: 150px;\ngrid-template-columns: 30% 50px 1fr 1fr;\ngrid-template-rows: 100px;`,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    },
                    {
                        code: '/*insert code here*/'
                    }
                ]
            },
        ]
    },







    //third section
    {
        section:{
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
            selectedIcon: "CSS",
        },

        docGrids:[
           {
                title: 'Grid line model',
                text: "Grids have an x and y axis. The first line for both axises of the grid is labeled one, followed by two, and so fourth. It's possible to span a cell from one grid line to another",
                code: `position: relative;\ndisplay: grid;\nngrid-template-columns: 50px 50px;\ngrid-template-rows: 50px 50px;`,
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
                code: `position: relative;\ndisplay: grid;\ngrid-template-columns: 50px 50px;\ngrid-template-rows: 50px 50px;`,
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
                code: `position: relative;\ndisplay: grid;\ngrid: "a    b" 50px\n"a    b" 50px\n/ 50px  50px;`,
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
                code: `\nposition: relative;\ndisplay: grid;\ngrid-template-columns: 50px 50px;\ngrid-template-rows: 50px 50px 50px;
                `,
                initialHeight: '100',
                initialWidth: '100',
                gridItems: [
                    {
                        code: 'grid-column: 1/2;\n grid-row:1/3'
                    },
                    {
                        code: '/*column-start / row-start / column-end / row-end;*/\ngrid-area: 1 / 2 / 3 / 3;'
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
    },

        //fourth section

        {
            section:{
                title: 'Auto-Resizing Grids for Dynamic Content:',
                subtitle: ' Program your grid to gracefully grow and shrink for new content',
                text: "Grids come with 4 special functions/keywords that allow them to grow, shrink, and dynamically add new content: 'repeat', 'auto-fill', 'auto-fix', 'minmax'",
                mainGrid: {
                    initialHeight: '300',
                    initialWidth: '300',
                    code: 
        `
        position: relative;
        width: 80%;
        display: grid;

/*Will create as many new columns as possible. If there is extra space in a row, it will fillit with invisible grid-items*/

            grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));

/*Will create as many new columns as possible. If there is extra space in a row, it will try to stretch the remaining grid-items to fill the space*/
    
            /*grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));*/
            
        grid-template-rows: 100px;
        `,
                    gridItems: [
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                    ]
                }
            },
    
            toggle:{
                selectedIcon: "CSS",
            },
    
            docGrids:[
               {
                    title: 'The minmax function',
                    text: "minmax takes two arguments: (min-size, max-size). It defines how much a grid-item can grow or shrink",
                    code: `position: relative;\ndisplay: grid;\ngrid-template-columns: 50px minmax(20px, 1fr);`,
                    initialHeight: '100',
                    initialWidth: '100',
                    gridItems: [
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        }
                    ]
                },
                {
                    title: 'The grid-auto-rows/columns property',
                    text: "The grid-auto-row grid property automatically creates as many rows of a certain size as needed",
                    code: `position: relative;\ndisplay: grid;\ngrid-template-columns: 50px 100px;\ngrid-auto-columns: 100px;`,
                    initialHeight: '100',
                    initialWidth: '100',
                    gridItems: [
                        {
                            code: '/*place code here*/'
                        },
                        {
                            code: '/*place code here*/'
                        },
                        {
                            code: '/*place code here*/'
                        },
                        {
                            code: '/*place code here*/'
                        },
                        {
                            code: '/*place code here*/'
                        },
                        {
                            code: '/*place code here*/'
                        }
                    ]
                },     
                {
                    title: 'The repeat function',
                    text: "repeat takes two arguments: (number of items/auto-fit/auto-fill, width or height of column/row). It can be used to specify a finite amount of rows or colums. When used with auto-fill or auto-fit, it can be ",
                    code: `position: relative;\ndisplay: grid;\ngrid-template-columns: repeat(3, 50px);`,
                    initialHeight: '100',
                    initialWidth: '100',
                    gridItems: [
                        {
                            code: '/*insert code here*/'
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
                    title: 'The auto-fill function',
                    text: "A repeat function set to auto-fill will fill any extra space with invisible grid-items. If there is not enough space for a new item to fit, the item will wrap-around",
                    code: `position: relative;\nwidth: 100%;\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(50px, 1fr));`,
                    initialHeight: '100',
                    initialWidth: '100',
                    gridItems: [
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
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
                    title: 'The auto-fit function',
                    text: "A repeat function set to auto-fit will stretch its grid-items as much as permitted to fill any extra space before allowing one to wrap around.",
                    code: `position: relative;\nwidth: 100%;\ndisplay: grid;\ngrid-template-rows: repeat(auto-fit, minmax(50px, 1fr));\ngrid-template-columns:50px 50px 50px;`,
                    initialHeight: '100',
                    initialWidth: '100',
                    gridItems: [
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        }
                    ]
                },
            ]
        },
        
























        //fifth section

        {
            section:{
                title: 'Aligning Content:',
                subtitle: "Orient your grid's content",
                text: "Grids use justify-items and align-items, as well as align-self and justify-self, to position grid items' content",
                mainGrid: {
                    initialHeight: '200',
                    initialWidth: '200',
                    code: 
        `
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-auto-rows: 100px;
        justify-content: center;
        align-items: end;
        justify-items: center;
        `,
                    gridItems: [
                        {
                            code: 'justify-self: end'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: 'align-self: center'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                    ]
                }
            },
    
            toggle:{
                selectedIcon: "CSS",
            },
    
            docGrids:[
                {
                    title: 'justify-content and align-items',
                    text: "The justify-items and align-items respectively center grid content from the x and y axis",
                    code: `position: relative;\nwidth: 100%;\ndisplay: grid;\ngrid-template-columns: repeat(4, minmax(50px, 1fr));\ngrid-auto-rows: 50px;\njustify-items: center;\nalign-items: center;`,
                    initialHeight: '100',
                    initialWidth: '100',
                    gridItems: [
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
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
                    title: 'justify-self and align-self',
                    text: "These properties affect individual grid-items instead of all of them",
                    code: `position: relative;\nwidth: 100%;\ndisplay: grid;\ngrid-template-columns: repeat(4, minmax(50px, 1fr));\ngrid-auto-rows: 50px;`,
                    initialHeight: '100',
                    initialWidth: '100',
                    gridItems: [
                        {
                            code: 'justify-self: center'
                        },
                        {
                            code: 'align-items: end'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        }
                    ]
                },
            ]
        },


















        //sixth section

        {
            section:{
                title: 'Spacing Grid Items:',
                subtitle: "Column and grid gaps",
                text: "You can insert space between grid-items with gutters: column-gap and row-gap",
                mainGrid: {
                    initialHeight: '200',
                    initialWidth: '200',
                    code: 
        `
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: 100px 100px;
        column-gap: 10px;
        row-gap: 20px;
        `,
                    gridItems: [
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                    ]
                }
            },
    
            toggle:{
                selectedIcon: "CSS",
            },
    
            docGrids:[
                {
                    title: 'justify-content and align-items',
                    text: "Column-gap and row-gap are used to provide spacing between grid-items",
                    code: `position: relative;\nwidth: 100%;\ndisplay: grid;\ngrid-template-columns: repeat(3, minmax(50px, 1fr));\ngrid-auto-rows: 50px;\ncolumn-gap: 10px;\nrow-gap: 10px;`,
                    initialHeight: '100',
                    initialWidth: '100',
                    gridItems: [
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        {
                            code: '/*insert code here*/'
                        },
                        
                    ]
                }
            ]
        },
];