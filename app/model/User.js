Ext.define('Aap.model.User', {
    extend : 'Ext.data.Model',
 
    fields : [
        'id',
        'firstName',
        'lastName'
    ],
 
    associations : [
        {
            type           : 'hasMany',
            model          : 'Aap.model.Address',
            getterName     : 'getAddresses',
            associationKey : 'AddressBook'
        },
        {
            type           : 'belongsTo',
            model          : 'Aap.model.Address',
            getterName     : 'getAddress',
            associationKey : 'Address'
        }
    ]
});
 
