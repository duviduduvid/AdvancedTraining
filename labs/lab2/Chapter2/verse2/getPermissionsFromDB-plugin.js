
/* "getPermissionsFromDB" Javascript plugin code */

function getPermissionsFromDB() {
    load("nashorn:mozilla_compat.js");
	importPackage(Packages.javax.naming);
	importPackage(Packages.javax.sql);
	importPackage(Packages.java.sql);
	importPackage(Packages.java.util);
	importPackage( Packages.java.lang.System.out);
    
	var options =  new java.util.HashMap();

    try {
        var query ="SELECT p.name AS permission, a.name AS application FROM PERMISSION p, APPLICATION a WHERE p.APPLICATION_ID = a.ID";
        var initialContext = new javax.naming.InitialContext();
    
        var dataSource = initialContext.lookup("jboss/datasources/jdbc/sigmadb");
        var connection = dataSource.getConnection();
        var statement = connection.createStatement();
        var resultSet = statement.executeQuery(query);
    
        while (resultSet.next()) {
            var app = resultSet.getString("application");
            var perm = resultSet.getString("permission");
            
            if (options.containsKey(app)) {
                options.get(app).add(perm);
            }
            else {
                var permList = new java.util.ArrayList();
                permList.add(perm);
                options.put(app, permList);    
            }
        }
    
        resultSet.close();
        statement.close();
        connection.close();
    }
    
    catch (err) {
		java.lang.System.out.println("PLUGIN ERROR:\n getOptionsFromDB plugin failed: " + err);
        return err;
    }
    
	finally {
		return options;
	}  
}