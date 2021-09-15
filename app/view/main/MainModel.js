/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('AppName.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'AppName',

        loremIpsum: 'Lorem',

        firstDigit: 0,
        secondDigit: 0,
        operationType: 0,
        display: '0',
        displayTwo: '',
        textArea: '',
        buttonPressed: false
    }

    //TODO - add data, formulas and/or methods to support your view
});
