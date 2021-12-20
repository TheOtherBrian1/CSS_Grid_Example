export const defaultState = [
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