
/* "getOptionsFromDB" Javascript plugin code */

function getOptionsFromDB(tabelName, column) {
    load("nashorn:mozilla_compat.js");
	importPackage(Packages.javax.naming);
	importPackage(Packages.javax.sql);
	importPackage(Packages.java.sql);
	importPackage(Packages.java.util);
	importPackage( Packages.java.lang.System.out);
    
	var options =  new java.util.ArrayList();  

    try {
        var query ="SELECT * FROM " + tabelName + " ORDER BY " + column;
        var initialContext = new javax.naming.InitialContext();
    
        var dataSource = initialContext.lookup("jboss/datasources/jdbc/sigmadb");
        var connection = dataSource.getConnection();
        var statement = connection.createStatement();
        var resultSet = statement.executeQuery(query);
    
        while (resultSet.next()) {
        	options.add(resultSet.getString(column));
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