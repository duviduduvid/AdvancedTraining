return api.server(['getPermissionsFromDB']).then(
    function (response) {
        prop.options = [];
        const options = response.returnValue;
		
        if (options) {
            const applications = Object.keys(options);
            applications.forEach(function (application) {
                const permissions = options[application];
                permissions.forEach(function (permission) {
                    prop.options.push({
                        name: application + ' - ' + permission,
                        value: application + ' - ' + permission
                    });
                });
            });
        }
        else {
            prop.errors.push('No available options exist');
        }
    },
    function (error) {
        prop.errors.push('An error occured while fetching results from DB', 
                        error.statusText);
        if (error.data.exceptions) {
            error.data.exceptions.forEach(function (exception) {
                prop.errors.push(exception.message);
            });    
        }
 });