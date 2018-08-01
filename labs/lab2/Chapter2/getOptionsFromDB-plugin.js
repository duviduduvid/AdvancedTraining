function getOptionsFromDB(tabelName, column) {
    load("nashorn:mozilla_compat.js");
    var options =  "";  
    try {
        importPackage(Packages.javax.naming);
        importPackage(Packages.javax.sql);
        importPackage(Packages.java.sql);
        importPackage(Packages.java.util);
    
        var query ="SELECT * FROM " + tabelName;
        var initialContext = new javax.naming.InitialContext();
    
        var dataSource = initialContext.lookup("jboss/datasources/jdbc/sigmadb");
        var connection = dataSource.getConnection();
        var statement = connection.createStatement();
        var resultSet = statement.executeQuery(query);
    
        while (resultSet.next()) {
        	options += resultSet.getString(column) + '||';
        }
    
        resultSet.close();
        statement.close();
        connection.close();
    }
    catch (err) {
        return err;
    }
  
  return options;
}