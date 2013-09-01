Ext.define('Aap.store.Addresses', {
	extend: 'Ext.data.Store',
    model: 'Aap.model.Address',
 	autoLoad: 'true',
    storeId: 'addresses'
});
