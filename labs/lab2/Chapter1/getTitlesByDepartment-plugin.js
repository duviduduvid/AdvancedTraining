
/* "getTitlesByDepartment" Javascript plugin code */

function getTitlesByDepartment(dept) {
    var map={
        "Customer Service": 
            '['+
            '{"name":"Representative","value":"Representative"},'+
            '{"name":"Manager","value":"Manager"}'+
            ']',
        "Executive": 
            '['+
            '{"name":"CEO","value":"CEO","description":"Chief Executive Officer"},'+
            '{"name":"CFO","value":"CFO","description":"Chief Financial Officer"},'+
            '{"name":"CTO","value":"CTO","description":"Chief Technical Officer"},'+
            '{"name":"CIO","value":"CIO","description":"Chief Information Officer"},' +
            '{"name":"CCO","value":"CCO","description":"Chief Compliance Officer"},' +
            '{"name":"COO","value":"COO","description":"Chief Operating Officer"}' +
            ']',
        "Finance": 
            '['+
            '{"name":"Accountant","value":"Accountant"},'+
            '{"name":"Administrator","value":"Administrator"},'+
            '{"name":"Analyst","value":"Analyst"},'+
            '{"name":"Auditor","value":"Auditor"},'+
            '{"name":"Bookkeeper","value":"Bookkeeper"},'+
            '{"name":"Clerk","value":"Clerk"},'+
            '{"name":"Controller","value":"Controller"},'+
            '{"name":"Manager","value":"Manager"},'+
            '{"name":"Specialist","value":"Specialist"},'+
            '{"name":"VP","value":"VP"}'+
            ']',
        "Human Resources": 
            '['+
            '{"name":"Administrator","value":"Administrator"},'+
            '{"name":"Coordinator","value":"Coordinator"},'+
            '{"name":"Manager","value":"Manager"},'+
            '{"name":"Representative","value":"Representative"},'+
            '{"name":"Specialist","value":"Specialist"}'+
            ']',	
        "Insurance": 
            '['+
            '{"name":"Analyst","value":"Analyst"}'+
            ']',	
        "Investments": 
            '['+
            '{"name":"Analyst"," value":"Analyst"}'+
            ']',
        "IT Services": 
            '['+
            '{"name":"Administrator","value":"Administrator"},'+
            '{"name":"DB2 Administrator","value":"DB2 Administrator"},'+
            '{"name":"Developer","value":"Developer"},'+
            '{"name":"Manager","value":"Manager"},'+
            '{"name":"Process Controller","value":"Process Controller"},'+
            '{"name":"Project Assistant","value":"Project Assistant"},'+
            '{"name":"Project Lead","value":"Project Lead"}'+
            ']',
        "Legal": 
            '['+
            '{"name":"Associate","value":"Associate"},'+
            '{"name":"Counsel","value":"Counsel"},'+
            '{"name":"Director","value":"Director"}'+
            ']',
        "Marketing": 
            '['+
            '{"name":"Event Coordinator","value":"Event Coordinator"},'+
            '{"name":"Product Marketing","value":"Product Marketing"},'+
            '{"name":"Manager","value":"Manager"}'+
            ']',
        "Operations": 
            '['+
            '{"name":"Analyst","value":"Analyst"},'+
            '{"name":"Manager","value":"Manager"}'+
            ']',
        "Procurement": 
            '['+
            '{"name":"Administrator","value":"Administrator"},'+
            '{"name":"Document Manager","value":"Document Manager"},'+
            '{"name":"Manager","value":"Manager"},'+
            '{"name":"Registrar","value":"Registrar"},'+
            '{"name":"Reviewer","value":"Reviewer"}'+
            ']',
        "Real Estate": 
            '['+
            '{"name":"AD","value":"AD"},'+
            '{"name":"Analyst","value":"Analyst"},'+
            '{"name":"Manager","value":"Manager"}'+
            ']',
    	"Sales": 
    	    '['+
            '{"name":"Account Owner","value":"Account Owner"},'+
            '{"name":"Account Manager","value":"Account Manager"},'+
            '{"name":"Channel Sales Director","value":"Channel Sales Director"},'+
            '{"name":"Direct Sales Director","value":"Direct Sales Director"},'+
            '{"name":"International Customer Support","value":"International Customer Support"},'+
            '{"name":"International Vice President","value":"International Vice President"},'+
            '{"name":"NA Vice President","value":"NA Vice President"}'+
            ']',
    };
    return map[dept];
}