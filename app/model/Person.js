Ext.define('Aap.model.Person', {
 	extend: 'Ext.data.Model',
	requires: 'Aap.model.Address',
	fields: [
		{name: 'id', type: 'int'},
        {name: 'name', type: 'string'}, 
        {name: 'address_id', type: 'int'}
	],
	proxy: {
    	type: 'ajax',
    	url: 'data/persons.json',
    	reader: { 
			type: 'json',
      		root: 'children',
      		successProperty: 'success'
    	}
  	},	
	associations: [
		{ 
			type: 'hasOne', 
			model: 'Aap.model.Address',
			name: 'address'//,
//			autoLoad: 'true',
//			associationKey: 'children',
//			primaryKey: 'id',
//			foreignKey: 'address_id',
//			getterName: 'getAddress',
//			setterName: 'setAddress'
		}
	]
});
