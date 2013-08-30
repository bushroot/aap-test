Ext.define('Aap.store.Persons', {
	extend: 'Ext.data.Store',
    model: 'Aap.model.Person',
	storeId: 'persons',
	autoLoad: true,
 	proxy: {
        type: 'ajax',
        url: 'data/persons.json',
        reader: {
            type: 'json',
			root: 'children',
            successProperty: 'success'
        }
    }
});
