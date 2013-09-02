new Ext.data.Store({
    autoLoad  : true,
    model     : 'Aap.model.Address',
    proxy     : {
        type        : 'ajax',
        url         : 'data/address_book.json',
        reader      : {
            type : 'json',
            root : 'data'
        },
        extraParams : {
            ownerid  : 1
        }
    },
    listeners : {
        load : function (store, recs) {
            var rec   = recs[0],
                user  = rec.getUser(),
                owner = rec.getOwner();
 
            console.log(user);
            console.log(owner);
        }
    }
});
