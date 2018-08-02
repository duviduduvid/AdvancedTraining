
/*Service Action demonstration*/

prop.options = [];

return api.service('getAllAdminRolesService').then(function(response) {
    const adminRoles = response.initializationValues[0].values;
    adminRoles.forEach(function (role) {
        prop.options.push({name: role, value: role});
    });
});