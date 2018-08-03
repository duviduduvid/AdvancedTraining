/* Update User Status form
Manager property - Change handler
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
	let errMessage = 'An error occured while fetching manager\'s information';
	if (error.data.exceptions) {
		error.data.exceptions.forEach(function (exception) {
			errMessage += '<br>' + exception.message;
			if (exception.backendMessages) {
				exception.backendMessages.forEach(function (backendMessage) {
					errMessage += '<br>' + backendMessage.message;
				});
			}
		});
	}
	api.prompt(errMessage);
}
