Ext.define('Aap.store.Addresses', {
	extend: 'Ext.data.Store',
    model: 'Aap.model.Address',
    storeId: 'addresses',
  	data: [
		{ 
			"id": 1, 
			"city": "Berlin" 
		},
		{ 
			"id": 2, 
			"city": "London"
		}
	]
});
