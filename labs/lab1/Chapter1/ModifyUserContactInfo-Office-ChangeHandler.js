
/* Modify User Contact Info form
Office property - Change handler
*/

var option = prop.options.filter(function (office) {
    return office.value === prop.value;
});
var officeCode = option[0].name;
var city = officeCode.split('-')[1].trim();
api.getProp('city').value = city;