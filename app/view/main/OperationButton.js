Ext.define('AppName.view.main.OperationButton', {
    //Чтобы все работало нормально надо прописывать оба и xtype и extends
    extend: 'AppName.view.main.NumberButton',
    xtype: 'operationButton',
    handler: 'onClickOperationButton',
})