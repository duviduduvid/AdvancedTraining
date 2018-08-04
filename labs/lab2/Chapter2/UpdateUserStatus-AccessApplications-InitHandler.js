return api.server(['getOptionsFromDB','APPLICATION', 'NAME']).then(
    function (response) {
        prop.options = [];
        const options = response.returnValue;
        
        if (options) {
            options.forEach(function (option) {
                prop.options.push({name: option, value: option});
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