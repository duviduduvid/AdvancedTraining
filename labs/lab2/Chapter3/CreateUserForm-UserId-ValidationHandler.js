return api.server(['CheckUserIdUniqueness', prop.value]).then(
    function (response) {
        if (!response.returnValue) {
            api.prompt('User with ID: "' + prop.value + '" already exists!');
            prop.errors.push('User with ID: ' + prop.value + ' already exists!');
        }
        return response.returnValue;
    },
    function (error) {
        prop.errors.push('An error occured while checking userid uniqueness', 
                        error.statusText);
        if (error.data.exceptions) {
            error.data.exceptions.forEach(function (exception) {
                prop.errors.push(exception.message);
            });    
        }
        return false;
    }
);