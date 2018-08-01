package com.ca;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;
import javax.naming.ldap.InitialLdapContext;
import javax.naming.ldap.LdapContext;

import com.idmlogic.sigma.plugin.BasePlugin;
import com.idmlogic.sigma.plugin.annotations.ExportedServerFunction;

public class LdapPluginUniquenessCheck extends BasePlugin{

	private LdapContext ctx = null;
	private String ldapServer = null; //"130.119.175.215";
    private String ldapPort = null; //"19289";
    private String ldapSearchBase = null; //"dc=IdM,dc=com";
    private String ldapUsername = null; //"uid=superuser,ou=users,ou=northamerica,dc=IdM,dc=com";
    private String ldapPassword = null; //"CAdemo123";
	private String ldapPersonObjectClass = null; //"imUser";
	private String ldapUserIdAttribute = null; //"uid";
	
 
	@Override
	public void initPlugin(){
		String server = getInitParamValues("server");
		String port = getInitParamValues("port");
		String searchBase = getInitParamValues("searchBase");
		String userName = getInitParamValues("userName");
		String password = getInitParamValues("password");
		String personObject = getInitParamValues("personObject");
		String userIdAttribute = getInitParamValues("userIdAttribute");

		if (server == null || port == null || searchBase == null || userName == null || password == null ) {
			System.out.println("one or more parameters are Null.");
		}
		else{
			this.ldapServer = server;
			this.ldapPort = port;
			this.ldapSearchBase = searchBase;
			this.ldapUsername = userName;
			this.ldapPassword = password;
			this.ldapPersonObjectClass = personObject;
			this.ldapUserIdAttribute = userIdAttribute;
		}
	}
	
	@ExportedServerFunction
	public boolean isUserUnique(String userId) throws NamingException{
		connect();
		List<String> queryResult = getUsersById(userId);
		
        return queryResult.isEmpty();
		
	}
	
	private void connect() throws NamingException{	
		Hashtable<String, Object> env = new Hashtable<String, Object>();
        env.put(Context.SECURITY_AUTHENTICATION, "simple");
        if(ldapUsername != null) {
            env.put(Context.SECURITY_PRINCIPAL, ldapUsername);
        }
        if(ldapPassword != null) {
            env.put(Context.SECURITY_CREDENTIALS, ldapPassword);
        }
        env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
        env.put(Context.PROVIDER_URL, "ldap://" + ldapServer + ":" + ldapPort);
        
        ctx = new InitialLdapContext(env, null);		
	}

	private List<String> getUsersById(String userId) throws NamingException{
		List<String> result = new ArrayList<String>();
		
		String serachSyntex = "(&(objectClass=" + ldapPersonObjectClass + ")(" + ldapUserIdAttribute + "=" + userId + "))";
		
		List<SearchResult> searchResults = findByString(ctx, ldapSearchBase, serachSyntex);
		for(SearchResult searchResult: searchResults){
			System.out.println(searchResult);
			result.add(searchResult.getName());
		}

        return result;
	}
	
	private List<SearchResult> findByString(DirContext ctx, String ldapSearchBase, String serachSyntex) throws NamingException {
		List<SearchResult> result = new ArrayList<SearchResult>();
		
        String searchFilter = serachSyntex;

        SearchControls searchControls = new SearchControls();
        searchControls.setSearchScope(SearchControls.SUBTREE_SCOPE);

        NamingEnumeration<SearchResult> results = ctx.search(ldapSearchBase, searchFilter, searchControls);

        while(results.hasMoreElements()) {
             result.add((SearchResult) results.nextElement());
        }
             
        return result;
    }

}
