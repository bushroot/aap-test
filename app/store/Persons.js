Ext.define('Aap.store.Persons', {
	extend: 'Ext.data.Store',
    model: 'Aap.model.Person',
 	autoLoad: 'true',
    storeId: 'persons'
});
