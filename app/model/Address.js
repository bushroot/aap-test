Ext.define('Aap.model.Address', {
    extend : 'Ext.data.Model',
 
    fields : [
        'id',
        'userid',
        'ownerid'
    ],
 
    associations : [
        {
            type           : 'hasOne',
            model          : 'Aap.model.User',
            getterName     : 'getUser',
            associatedName : 'User',
            associationKey : 'User'
        },
        {
            type           : 'belongsTo',
            model          : 'Aap.model.User',
            getterName     : 'getOwner',
            associatedName : 'Owner',
            associationKey : 'Owner'
        }
    ]
});
