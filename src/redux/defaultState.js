export const defaultState = [
    {
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

    {
        mainGrid:{
            title: 'milk',
            subtitle: 'raisin  butter',
            text: 'evil pandas',
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
            }
        },

        toggle:{
            selectedIcon: null,
        },

        docGrids:[
           {
                title: 'lint',
                text: 'yellow brick for male catiness',
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
        ]
    },


    {
        mainGrid:{
            title: 'milk',
            subtitle: 'raisin  butter',
            text: 'evil pandas',
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
            }
        },

        toggle:{
            selectedIcon: null,
        },

        docGrids:[
           {
                title: 'lint',
                text: 'yellow brick for male catiness',
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
        ]
    },

    {
        mainGrid:{
            title: 'milk',
            subtitle: 'raisin  butter',
            text: 'evil pandas',
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
            }
        },

        toggle:{
            selectedIcon: null,
        },

        docGrids:[
           {
                title: 'lint',
                text: 'yellow brick for male catiness',
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
        ]
    }

];