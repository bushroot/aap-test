Ext.define('Aap.model.Person', {
 	extend: 'Ext.data.Model',
	fields: [
		{name: 'id', type: 'int'},
        {name: 'name', type: 'string'}, 
        {name: 'address_id', type: 'int'}
	],
	associations: [
		{ 
			type: 'hasOne', 
			model: 'Aap.model.Address' 
		}
	]
});
