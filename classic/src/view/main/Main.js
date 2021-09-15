/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 * 1. Move handler to MainController
 * 2. Move variables to MainModel
 */
Ext.define('AppName.view.main.Main', {
    requires: [
        'AppName.view.main.MainController',
        'AppName.view.main.NumberButton',
        'AppName.view.main.MainModel'
    ],
    viewModel:{
      type: 'main'
    },
    extend: 'Ext.panel.Panel',
    //title: 'Outer panel',
    // Тестирую привязывание данных
    bind: {
        title: '{loremIpsum}'
    },
    border: true,
    controller: 'main',
    style: {
        border: '1px solid black'
    },
    bodyPadding: 10,
    layout: { type: 'hbox', align: 'stretch'},
    items: [
        {
            extend: 'Ext.panel.Panel',
            title: 'Calculator',

            width: '30%',
            border: true,
            style: {
                border: '1px solid black'
            },
            bodyPadding: 20,
            draggable: true,
            layout: { type: 'table', columns: 1, align: 'stretch'},
            items: [
                {
                    extend: 'Ext.panel.Panel',
                    border: true,
                    bodyPadding: 2,
                    layout: { type: 'vbox', align: 'stretch'},
                    items: [
                        {
                            xtype: 'displayfield',
                            reference: 'displayTwo',
                            //value: '',
                            bind: {
                                value: '{displayTwo}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            //value: '0',
                            reference: 'display',
                            bind: {
                                value: '{display}'
                            }
                        }
                    ]
                },
                {
                    extend: 'Ext.panel.Panel',
                    border: true,
                    layout: { type: 'table', columns: 4, align: 'stretch'},
                    buttonPressed: false,
                    reference: 'calculatorPanel',
                    // bind: {
                    //   firstDigit: '{firstDigit}',
                    //   secondDigit: '{secondDigit}',
                    //   operationType: '{operationType}'
                    // },
                    // firstDigit: 0,    // Первое число
                    // secondDigit: 0,   // Второе число
                    // operationType: 0, // Тип операции, которую надо выполнить после нажатия =.
                    items: [          // 1 - деление, 2 - умножение, 3 - вычитание, 4 - сложение
                        {
                            xtype: 'numberButton',
                            text: '7',
                        },
                        {
                            xtype: 'numberButton',
                            text: '8',
                        },
                        {
                            xtype: 'numberButton',
                            text: '9',
                        },
                        {
                            xtype: 'operationButton',
                            text: '/',
                            operationType: 1,
                        },
                        {
                            xtype: 'numberButton',
                            text: '4',
                        },
                        {
                            xtype: 'numberButton',
                            text: '5',
                        },
                        {
                            xtype: 'numberButton',
                            text: '6',
                        },
                        {
                            xtype: 'operationButton',
                            text: 'x',
                            operationType: 2,
                        },
                        {
                            xtype: 'numberButton',
                            text: '1',
                        },
                        {
                            xtype: 'numberButton',
                            text: '2',
                        },
                        {
                            xtype: 'numberButton',
                            text: '3',
                        },
                        {
                            xtype: 'operationButton',
                            text: '-',
                            operationType: 3,
                        },
                        {
                            xtype: 'numberButton',
                            text: '0',
                        },
                        {
                            xtype: 'operationButton',
                            text: '+',
                            operationType: 4,
                        },
                        {
                            xtype: 'operationButton',
                            text: '=',
                            handler: 'onClickEqualsButton',
                        },
                        {
                            xtype: 'operationButton',
                            text: 'C',
                            handler: 'onClickClearButton',
                        }
                    ]
                },
                {
                    extend: 'Ext.panel.Panel',
                    title: 'History',
                    border: true,
                    style: {
                        border: '1px solid black'
                    },
                    height: 250,
                    layout: {
                        type: 'hbox', align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textareafield',
                            grow: true,
                            editable: false,
                            width: '100%',
                            reference: 'history',
                            bind: {
                                value: '{textArea}'
                            }
                        }
                    ]

                }

            ]
        }
    ]
});
