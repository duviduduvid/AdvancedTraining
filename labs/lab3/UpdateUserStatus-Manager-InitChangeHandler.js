/* Update User Status form
Manager property - Initialization and Change handlers
Notice that when using in the Initialization handler you should 
add 'return' before the first call to api.service
*/

api.service('GetManagerAndAdminRoles', prop.value).then(
	function succcess(response) {
		const userInfo = parseInitValues(response.initializationValues);		
		const fullName = userInfo['Full Name'][0];
		const roles = userInfo['Admin Roles'];
		const manager = userInfo['Manager'] ? userInfo['Manager'][0] : undefined;
		
		const messageProp = api.getProp('managerMsgProp');
		messageProp.message = '';
		
		if (roles) {
			messageProp.message = 'The user <strong>' + fullName + '</strong> ' +
								'has the following Administrative Roles:<br><ul>';
			roles.forEach(function (role) {
				messageProp.message += '<li>' + role + '</li>';
			});
			messageProp.message += '</ul></br>';
		} 
		else {
			messageProp.message = 'The user <strong>' + fullName + '</strong> ' +
								'has no Administrative Roles.<br>';
		}
		
		if (manager) {
			api.service('GetManagerAndAdminRoles', manager).then(
				function (response) {
					const managerInfo = parseInitValues(response.initializationValues);
					const managerName = managerInfo['Full Name'][0];
					messageProp.message += fullName + ' reports to: ' +
								'<strong>' + managerName + '</strong>.';
				},
				handleFailure
			);
		}
	},
	handleFailure
);

function parseInitValues(initValues) {
	let result = {};
	initValues.forEach(function (initValue) {
		const name = initValue.formProperty.name;
		const values = initValue.values;
		result[name] = values;
	});
	return result;
}

function handleFailure(error) {
		api.prompt('An error occured while fetching manager\'s information');
}