
/*Short demonstration of calling a plugin*/

return api.server(['isDateValid', prop.value]).then(
    function success(respsone) {
        let result = respsone.returnValue;
        if (!result) {
            prop.errors.push('Chosen date cannot be in the past!');
        }
        return result;
    }, 
    function failure(error) {
        prop.errors.push('An error occured while validating date', error.statusText);
        if (error.data.exceptions) {
            error.data.exceptions.forEach(function (exception) {
                prop.errors.push(exception.message);
            });    
        }
        return false;
    }
);