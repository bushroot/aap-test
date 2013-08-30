Ext.define('Aap.store.Addresses', {
	extend: 'Ext.data.Store',
    model: 'Aap.model.Address',
	storeId: 'addresses',
	autoLoad: true,
	proxy: {
        type: 'ajax',
        url: 'data/addresses.json',
        reader: {
            type: 'json',
			root: 'children',
            successProperty: 'success'
        }
    } 
});
