/**
 * This view is an example list of people.
 */
Ext.define('AppName.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'AppName.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },               // flex - количество занимаемого пространства
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Birth date', dataIndex: 'date', flex: 1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
