Ext.define('Aap.store.Persons', {
	extend: 'Ext.data.Store',
    model: 'Aap.model.Person',
    storeId: 'persons',
    data: [
        {
			"id": 1,
			"name": "Bernt",
			"address_id": 1
		},
		{ 
			"id": 2,
			"name": "Ludowid",
			"address_id": 2
		}
	]
});
