Ext.define('AppName.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone', 'date'
    ],

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", date: "123"},
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", date: "123" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" , date: "123"},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", date: "123" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
