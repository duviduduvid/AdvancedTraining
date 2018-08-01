
/* Update User Status form
Department property - Initialization and Change handlers
*/

return api.server(['getTitlesByDepartment', prop.value]).then(function(result) {
    var titles = JSON.parse(result.returnValue);
    api.getProp("title").options = titles;    
});