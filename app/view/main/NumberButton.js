Ext.define('AppName.view.main.NumberButton', {
    //Чтобы все работало нормально надо прописывать оба и xtype и extends
    extend: 'Ext.button.Button',
    xtype: 'numberButton',
    width: 100,
    height: 40,
    style: 'background-color:gray;',
    handler: 'onClickButton',
})


