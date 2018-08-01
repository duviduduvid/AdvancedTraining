
/* Modify User Contact Info form
City property - Change handler
*/

var address = api.getProp('address').value;
var state = api.getProp('state').value;
var postalCode = api.getProp('postalCode').value;

switch(prop.value) {
    case 'New York':
        address = '1 Forward Inc Plaza';
        state = 'NY';
        postalCode = '10213';
        break;
    case 'Toronto':
        address = '2 Forward Inc Way';
        state = 'ON';
        postalCode = 'M4B 1B7';
        break;
    case 'Tokyo':
        address = '7 Forward Inc Street';
        state = 'TOKYO';
        postalCode = '3001';
        break;
    case 'London':
        address = '5 Forward Inc. Square';
        state = 'LONDON';
        postalCode = 'EC1Y 8SY';
        break;
    case 'Buenos Aires':
        address = '4 Calle Forward Inc.';
        state = 'BUENOS AIRES';
        postalCode = 'C100ZAA';
        break;
    case 'Melbourne':
        address = '8 Forward Inc. Plaza';
        state = 'VIC';
        postalCode = '3001';
        break;
    case 'Dubai':
        address = '1 Forward Inc Plaza';
        state = 'DXB';
        postalCode = '337-1500';
        break;
    case 'São Paulo':
        address = '3 Praca de Forward Inc';
        state = 'SP';
        postalCode = '04522-050';
}

api.getProp('address').value = address;
api.getProp('state').value = state;
api.getProp('postalCode').value = postalCode;
